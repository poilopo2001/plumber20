import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import connectDB from '@/lib/mongodb';
import { generateContent, generateSEOMetadata } from '@/lib/openrouter';
import { Content } from '@/models/Content';
import ContactCTA from '@/components/ContactCTA';
import ServiceHighlights from '@/components/ServiceHighlights';
import TestimonialCard from '@/components/TestimonialCard';
import EmergencyBanner from '@/components/EmergencyBanner';
import LocalMap from '@/components/LocalMap';

interface PageProps {
  params: {
    quartier: string;
    service: string;
  };
}

// Get metadata for the page
async function getPageMetadata(quartier: string, service: string): Promise<Metadata> {
  try {
    await connectDB();
    const content = await Content.findOne({
      slug: `${quartier}-${service}`,
      type: 'service'
    });

    if (!content) {
      return {
        title: 'Page non trouvée',
        description: 'La page que vous recherchez n\'existe pas.'
      };
    }

    return {
      title: content.metadata.title,
      description: content.metadata.description,
      keywords: content.metadata.keywords,
      openGraph: {
        title: content.metadata.title,
        description: content.metadata.description,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${quartier}/${service}`,
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        locale: 'fr_LU',
        type: 'website',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Erreur',
      description: 'Une erreur est survenue'
    };
  }
}

// Next.js metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { quartier, service } = params;
  return getPageMetadata(quartier, service);
}

// Generate or retrieve content for the page
async function getOrGenerateContent(quartier: string, service: string) {
  try {
    await connectDB();
    
    // Try to find existing content
    let content = await Content.findOne({
      slug: `${quartier}-${service}`,
      type: 'service'
    });

    // If content doesn't exist or is older than 30 days, generate new content
    if (!content || Date.now() - content.lastGenerated.getTime() > 30 * 24 * 60 * 60 * 1000) {
      const prompt = `Générer un article SEO optimisé en français sur les services de ${service} dans le quartier de ${quartier} à Luxembourg. 
      Inclure des informations sur la disponibilité 24/7, la qualité du service, et les tarifs compétitifs.`;
      
      const generatedContent = await generateContent(prompt);
      const seoMetadata = await generateSEOMetadata(
        `${service} à ${quartier}, Luxembourg`,
        generatedContent
      );

      const metadata = JSON.parse(seoMetadata);
      
      if (!content) {
        // Create new content
        content = new Content({
          slug: `${quartier}-${service}`,
          type: 'service',
          title: metadata.title || `${service} à ${quartier}, Luxembourg`,
          content: generatedContent,
          metadata: {
            title: metadata.title || `${service} à ${quartier}, Luxembourg`,
            description: metadata.description || `Services de ${service} professionnels à ${quartier}, Luxembourg. Intervention rapide et devis gratuit.`,
            keywords: metadata.keywords || [service, quartier, 'Luxembourg', 'plombier', 'urgence']
          }
        });
      } else {
        // Update existing content
        content.content = generatedContent;
        content.metadata = {
          title: metadata.title || content.metadata.title,
          description: metadata.description || content.metadata.description,
          keywords: metadata.keywords || content.metadata.keywords
        };
        content.lastGenerated = new Date();
      }
      
      await content.save();
    }

    return content;
  } catch (error) {
    console.error('Error getting/generating content:', error);
    throw error;
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { quartier, service } = params;
  
  try {
    const content = await getOrGenerateContent(quartier, service);

    if (!content) {
      return (
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Page non trouvée</h1>
            <p>La page que vous recherchez n'existe pas.</p>
          </div>
        </div>
      );
    }

    // Format the quartier name for display
    const formattedQuartier = quartier.charAt(0).toUpperCase() + quartier.slice(1).replace(/-/g, ' ');
    const formattedService = service.charAt(0).toUpperCase() + service.slice(1).replace(/-/g, ' ');

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Emergency Banner */}
        <EmergencyBanner />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-12 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">
                {content.title}
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                Service professionnel de plomberie à {formattedQuartier}, Luxembourg
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Devis Gratuit
                </Link>
                <Link 
                  href="tel:+352123456"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
                >
                  Appeler Maintenant
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <div className="prose prose-lg max-w-none"
                     dangerouslySetInnerHTML={{ __html: content.content }} />
              </article>

              {/* Service Highlights */}
              <ServiceHighlights service={formattedService} />

              {/* Local Service Area */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Zone de Service: {formattedQuartier}</h2>
                <LocalMap quartier={quartier} />
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Contact CTA */}
                <ContactCTA quartier={formattedQuartier} service={formattedService} />

                {/* Why Choose Us */}
                <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4">Pourquoi Nous Choisir?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Intervention 24/7</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Devis gratuit</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Garantie satisfaction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Erreur</h1>
          <p>Une erreur est survenue lors du chargement de la page.</p>
        </div>
      </div>
    );
  }
}
