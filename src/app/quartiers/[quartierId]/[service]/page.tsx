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
  // Installation
  'installation-chauffe-eau',
  'installation-climatisation',
  'installation-douche',
  'installation-evier',
  'installation-lavabo',
  'installation-wc',
  'installation-ballon-eau-chaude',
  'installation-pompe-chaleur',
  'installation-adoucisseur',
  'installation-compteur-eau',
  'installation-chauffage',
  'installation-baignoire',
  'installation-robinet',
  'installation-lave-vaisselle',
  'installation-lave-linge',
  'installation-gaz',
  'installation-chaudiere-gaz',
  'installation-compteur-gaz',
  'installation-cumulus',
  
  // Réparation
  'reparation-fuite',
  'reparation-chauffe-eau',
  'reparation-wc',
  'reparation-douche',
  'reparation-baignoire',
  'reparation-lavabo',
  'reparation-robinet',
  'reparation-ballon-eau-chaude',
  'reparation-pompe-chaleur',
  'reparation-canalisation',
  'reparation-plomberie',
  'reparation-sanitaire',
  'reparation-siphon',
  'reparation-vanne',
  'reparation-cumulus',
  'reparation-chauffage',
  'reparation-climatisation',
  'reparation-chaudiere-gaz',
  'reparation-fuite-gaz',
  'reparation-urgente',
  
  // Débouchage
  'debouchage-wc',
  'debouchage-evier',
  'debouchage-douche',
  'debouchage-baignoire',
  'debouchage-lavabo',
  'debouchage-toilette',
  'debouchage-siphon',
  'debouchage-canalisation',
  'debouchage-egout',
  'debouchage-colonne',
  'debouchage-urgent',
  
  // Détection
  'detection-fuite',
  'detection-fuite-eau',
  'detection-fuite-gaz',
  'detection-canalisation',
  'detection-fuite-canalisation',
  
  // Entretien
  'entretien-plomberie',
  'entretien-chauffe-eau',
  'entretien-chauffage',
  'entretien-climatisation',
  'entretien-canalisation',
  'entretien-pompe-chaleur',
  'entretien-adoucisseur',
  'entretien-chaudiere-gaz',
  'entretien-cumulus',
  
  // Détartrage
  'detartrage',
  'detartrage-ballon-eau-chaude',
  'detartrage-chauffe-eau',
  'detartrage-cumulus',
  'detartrage-robinet',
  'detartrage-sanitaire',
  'detartrage-canalisation',
  
  // Autres
  'fuite-eau',
  'fuite-gaz',
  'camera-inspection',
  'recherche-fuite'
];

const VALID_QUARTIERS = [
  'muhlenbach',
  'bonnevoie-nord',
  'bonnevoie-sud',
  'beggen',
  'belair',
  'cents',
  'cessange',
  'clausen',
  'dommeldange',
  'eich',
  'gare',
  'gasperich',
  'grund',
  'hamm',
  'hollerich',
  'kirchberg',
  'limpertsberg',
  'merl',
  'neudorf',
  'pfaffenthal'
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
export async function generateMetadata(
  { params }: { params: { quartierId: string; service: string } }
): Promise<Metadata> {
  // Get and await the dynamic params
  const quartierId = await params.quartierId;
  const service = await params.service;

  // Clean and validate URLs
  const cleanQuartierId = decodeURIComponent(quartierId)
    .toLowerCase()
    .replace(/\s+/g, '-')        // Replace any whitespace with single hyphen
    .replace(/[^a-z0-9-]/g, '') // Remove any non-alphanumeric characters except hyphens
    .replace(/-+/g, '-')        // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '');     // Remove leading/trailing hyphens

  const cleanService = decodeURIComponent(service)
    .toLowerCase()
    .replace(/\s+/g, '-')        // Replace any whitespace with single hyphen
    .replace(/[^a-z0-9-]/g, '') // Remove any non-alphanumeric characters except hyphens
    .replace(/-+/g, '-')        // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '');     // Remove leading/trailing hyphens

  // Format the quartier name for display
  const formatQuartierName = (id: string) => {
    return id.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Validate the service and quartier
  if (!VALID_QUARTIERS.includes(cleanQuartierId) || !VALID_SERVICES.includes(cleanService)) {
    return {
      title: 'Page Non Trouvée | Plombier Luxembourg',
      description: "La page que vous recherchez n'existe pas. Découvrez nos services de plomberie dans tous les quartiers de Luxembourg.",
    };
  }

  // Get the service details
  const pageContent = await getOrCreatePermanentContent(cleanQuartierId, cleanService);
  if (!pageContent || !pageContent.metadata) {
    return {
      title: 'Page Non Trouvée | Plombier Luxembourg',
      description: "La page que vous recherchez n'existe pas. Découvrez nos services de plomberie dans tous les quartiers de Luxembourg.",
    };
  }

  const quartierName = formatQuartierName(cleanQuartierId);
  
  return {
    title: `${pageContent.metadata.title} à ${quartierName} Luxembourg | Plombier Professionnel`,
    description: pageContent.metadata.description,
    keywords: ['plombier', quartierName, 'Luxembourg', ...pageContent.metadata.keywords],
    openGraph: {
      title: `${pageContent.metadata.title} - Service Professionnel à ${quartierName}`,
      description: pageContent.metadata.description,
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
  const cleanQuartierId = decodeURIComponent(quartierId)
    .toLowerCase()
    .replace(/\s+/g, '-')        // Replace any whitespace with single hyphen
    .replace(/[^a-z0-9-]/g, '') // Remove any non-alphanumeric characters except hyphens
    .replace(/-+/g, '-')        // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '');     // Remove leading/trailing hyphens

  const cleanService = decodeURIComponent(service)
    .toLowerCase()
    .replace(/\s+/g, '-')        // Replace any whitespace with single hyphen
    .replace(/[^a-z0-9-]/g, '') // Remove any non-alphanumeric characters except hyphens
    .replace(/-+/g, '-')        // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '');     // Remove leading/trailing hyphens

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
