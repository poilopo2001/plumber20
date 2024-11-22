import { Metadata } from 'next';
import { generatePageContent } from '@/lib/pageContent';
import HeroSection from '@/components/HeroSection';
import MainServiceSection from '@/components/MainServiceSection';
import LocalServiceSection from '@/components/LocalServiceSection';
import QuickFixSection from '@/components/QuickFixSection';
import PageMetadata, { generateMetadata as getMetadata } from '@/components/PageMetadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import FloatingContact from '@/components/FloatingContact';
import ContactCTA from '@/components/ContactCTA';
import ServiceHighlights from '@/components/ServiceHighlights';
import TestimonialCard from '@/components/TestimonialCard';
import LocalMap from '@/components/LocalMap';
import connectDB from '@/lib/mongodb';

interface PageProps {
  params: {
    quartierId: string;
    service: string;
  };
}

// Force cache to be permanent
export const dynamic = 'force-static';
export const dynamicParams = true;

async function getOrCreatePermanentContent(quartier: string, service: string) {
  try {
    await connectDB();
    const { connection } = await import('mongoose');
    
    if (!connection.db) {
      throw new Error('Database connection not established');
    }

    const collection = connection.db.collection('pageContent');

    // Try to find existing content
    const existingContent = await collection.findOne({
      quartier,
      service,
    });

    if (existingContent) {
      console.log('Using cached content for:', quartier, service);
      return existingContent.content;
    }

    // Generate new content only if it doesn't exist
    console.log('Generating new content for:', quartier, service);
    const newContent = await generatePageContent(quartier, service);

    // Store the content permanently
    await collection.insertOne({
      quartier,
      service,
      content: newContent,
      createdAt: new Date()
    });

    return newContent;
  } catch (error) {
    console.error('Cache error:', error);
    // Fallback to direct generation if cache fails
    return generatePageContent(quartier, service);
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const content = await getOrCreatePermanentContent(params.quartierId, params.service);
    return getMetadata({ metadata: content.metadata });
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'PlombierPro - Service de Plomberie',
      description: 'Service de plomberie professionnel au Luxembourg',
    };
  }
}

export default async function ServicePage({ params }: PageProps) {
  try {
    const content = await getOrCreatePermanentContent(params.quartierId, params.service);

    // Format the quartier name for display
    const formattedQuartier = params.quartierId.charAt(0).toUpperCase() + params.quartierId.slice(1).replace(/-/g, ' ');
    const formattedService = params.service.charAt(0).toUpperCase() + params.service.slice(1).replace(/-/g, ' ');

    return (
      <>
        <PageMetadata metadata={content.metadata} />
        <div className="min-h-screen bg-gray-50">
          {/* Breadcrumbs */}
          <Breadcrumbs />

          {/* Hero Section */}
          <HeroSection hero={content.sections.hero} />

          {/* Main Service Section */}
          <MainServiceSection mainService={content.sections.mainService} />

          {/* Local Service Section */}
          <LocalServiceSection localService={content.sections.localService} />

          {/* QuickFix Section */}
          <QuickFixSection quickFix={content.sections.quickFix} />

          {/* Service Highlights */}
          <ServiceHighlights service={formattedService} />

          {/* Local Service Area */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Zone de Service: {formattedQuartier}</h2>
            <LocalMap quartier={params.quartierId} />
            <p className="mt-4 text-gray-600">
              Nous intervenons rapidement dans tout {formattedQuartier} et ses environs pour tous vos besoins en {formattedService.toLowerCase()}.
            </p>
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Avis Clients</h2>
            <div className="grid gap-6">
              <TestimonialCard
                name="Jean Dupont"
                location={formattedQuartier}
                rating={5}
                text={`Excellent service de ${formattedService.toLowerCase()}. Rapide et professionnel.`}
              />
              <TestimonialCard
                name="Marie Martin"
                location={formattedQuartier}
                rating={5}
                text="Intervention rapide et travail de qualité. Je recommande!"
              />
            </div>
          </div>

          {/* Contact CTA */}
          <ContactCTA quartier={formattedQuartier} service={formattedService} />

          {/* Floating Contact Button */}
          <FloatingContact />
        </div>
      </>
    );
  } catch (error) {
    console.error('Error in service page:', error);
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error Generating Content</h1>
        <pre className="bg-red-50 p-4 rounded">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
  }
}
