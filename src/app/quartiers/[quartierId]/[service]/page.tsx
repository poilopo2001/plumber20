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
import Link from 'next/link';

interface PageProps {
  params: {
    quartierId: string;
    service: string;
  };
}

// Force cache to be permanent
export const dynamic = 'force-static';
export const dynamicParams = true;

// List of valid services
const VALID_SERVICES = [
  'entretien-adoucisseur',
  'entretien-plomberie',
  'entretien-chauffe-eau',
  'entretien-chauffage',
  'entretien-climatisation',
  'entretien-canalisation',
  'entretien-pompe-chaleur',
  'debouchage-wc',
  'debouchage-evier',
  'debouchage-douche',
  'debouchage-baignoire',
  'debouchage-lavabo',
  'debouchage-canalisation',
  'debouchage-urgent',
  'debouchage-toilette',
  'debouchage-egout',
  'debouchage-colonne',
  'debouchage-siphon',
  'fuite-eau',
  'detection-fuite',
  'detection-canalisation',
  'camera-inspection',
  'detection-fuite-eau',
  'detection-fuite-gaz',
  'installation-chauffe-eau',
  'installation-wc',
  'installation-douche',
  'installation-baignoire',
  'installation-lavabo',
  'installation-robinet',
  'installation-evier',
  'installation-lave-vaisselle',
  'installation-lave-linge',
  'installation-cumulus',
  'installation-ballon-eau-chaude',
  'installation-pompe-chaleur',
  'installation-chauffage',
  'installation-climatisation',
  'installation-adoucisseur',
  'installation-compteur-eau',
  'reparation-fuite',
  'reparation-chauffe-eau',
  'reparation-wc',
  'reparation-douche',
  'reparation-robinet',
  'reparation-cumulus',
  'reparation-ballon-eau-chaude',
  'reparation-pompe-chaleur',
  'reparation-chauffage',
  'reparation-climatisation',
  'reparation-urgente'
];

const VALID_QUARTIERS = [
  // Add valid quartiers here
];

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
  const { quartierId, service } = params;

  // Clean and validate URLs
  const cleanQuartierId = quartierId.toLowerCase()
    .replace(/[%20\s]+/g, '-')
    .replace(/[,]/g, '')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  const cleanService = service.toLowerCase()
    .replace(/[%20\s]+/g, '-')
    .replace(/[,]/g, '')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Check if quartier and service are valid
  if (!VALID_QUARTIERS.includes(cleanQuartierId) || !VALID_SERVICES.includes(cleanService)) {
    return {
      title: 'Page Non Trouvée | Plombier Luxembourg',
      description: 'La page que vous recherchez n\'existe pas. Découvrez nos services de plomberie dans tous les quartiers de Luxembourg.',
    };
  }

  const quartierName = cleanQuartierId.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const serviceName = cleanService.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${serviceName} à ${quartierName} Luxembourg | Plombier Pro`,
    description: `Service professionnel de ${serviceName.toLowerCase()} à ${quartierName}. Intervention rapide 24/7, devis gratuit. Plombiers expérimentés à votre service.`,
    keywords: ['plombier', quartierName, serviceName, 'Luxembourg', 'dépannage plomberie'],
    openGraph: {
      title: `${serviceName} à ${quartierName} Luxembourg`,
      description: `Service professionnel de ${serviceName.toLowerCase()} à ${quartierName}. Disponible 24/7.`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/quartiers/${cleanQuartierId}/${cleanService}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      locale: 'fr_LU',
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { quartierId, service } = params;

  // Clean and validate URLs
  const cleanQuartierId = quartierId.toLowerCase()
    .replace(/[%20\s]+/g, '-')
    .replace(/[,]/g, '')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  const cleanService = service.toLowerCase()
    .replace(/[%20\s]+/g, '-')
    .replace(/[,]/g, '')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Handle invalid URLs
  if (!VALID_QUARTIERS.includes(cleanQuartierId) || !VALID_SERVICES.includes(cleanService)) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Non Trouvée</h1>
          <p className="text-gray-600 mb-8">La page que vous recherchez n'existe pas.</p>
          <Link href="/quartiers" className="text-blue-600 hover:text-blue-700">
            Voir tous les quartiers →
          </Link>
        </div>
      </div>
    );
  }

  try {
    const content = await getOrCreatePermanentContent(cleanQuartierId, cleanService);

    // Format the quartier name for display
    const formattedQuartier = cleanQuartierId.charAt(0).toUpperCase() + cleanQuartierId.slice(1).replace(/-/g, ' ');
    const formattedService = cleanService.charAt(0).toUpperCase() + cleanService.slice(1).replace(/-/g, ' ');

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
            <LocalMap quartier={cleanQuartierId} />
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
