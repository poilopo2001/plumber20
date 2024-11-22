import { Metadata } from 'next';
import { generatePageContent } from '@/lib/pageContent';
import HeroSection from '@/components/HeroSection';
import MainServiceSection from '@/components/MainServiceSection';
import LocalServiceSection from '@/components/LocalServiceSection';
import QuickFixSection from '@/components/QuickFixSection';
import PageMetadata, { generateMetadata as getMetadata } from '@/components/PageMetadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import FloatingContact from '@/components/FloatingContact';
import EmergencyBanner from '@/components/EmergencyBanner';
import ContactCTA from '@/components/ContactCTA';
import ServiceHighlights from '@/components/ServiceHighlights';
import TestimonialCard from '@/components/TestimonialCard';
import LocalMap from '@/components/LocalMap';

interface PageProps {
  params: {
    quartier: string;
    service: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const content = await generatePageContent(params.quartier, params.service);
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
    const content = await generatePageContent(params.quartier, params.service);

    // Format the quartier name for display
    const formattedQuartier = params.quartier.charAt(0).toUpperCase() + params.quartier.slice(1).replace(/-/g, ' ');
    const formattedService = params.service.charAt(0).toUpperCase() + params.service.slice(1).replace(/-/g, ' ');

    return (
      <>
        <PageMetadata metadata={content.metadata} />
        <div className="min-h-screen bg-gray-50">
          {/* Emergency Banner */}
          <EmergencyBanner />

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
            <LocalMap quartier={params.quartier} />
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
