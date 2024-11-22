import { Metadata } from 'next';
import Link from 'next/link';
import { FaWrench, FaShower, FaTools, FaSearch, FaBroom } from 'react-icons/fa';
import { GiWaterDrop, GiHeatHaze } from 'react-icons/gi';
import connectDB from '@/lib/mongodb';
import { Content } from '@/models/Content';
import HeroSection from '@/components/HeroSection';
import ServiceHighlights from '@/components/ServiceHighlights';

interface PageProps {
  params: {
    quartier: string;
  };
}

interface ServiceMetadata {
  description: string;
  category: string;
}

interface Service {
  slug: string;
  title: string;
  metadata: ServiceMetadata;
}

interface ServicesByCategory {
  [key: string]: Service[];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { quartier } = params;
  
  return {
    title: `Services de Plomberie à ${quartier} | Plombier Pro Luxembourg`,
    description: `Découvrez nos services de plomberie professionnels à ${quartier}, Luxembourg. Intervention rapide 24/7, devis gratuit.`,
    keywords: ['plombier', quartier, 'Luxembourg', 'services plomberie'],
    openGraph: {
      title: `Services de Plomberie à ${quartier}`,
      description: `Services de plomberie professionnels à ${quartier}, Luxembourg`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${quartier}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      locale: 'fr_LU',
      type: 'website',
    },
  };
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Urgences':
      return <GiWaterDrop className="w-6 h-6 text-red-500" />;
    case 'Installation':
      return <FaWrench className="w-6 h-6 text-blue-500" />;
    case 'Réparation':
      return <FaTools className="w-6 h-6 text-green-500" />;
    case 'Débouchage':
      return <FaShower className="w-6 h-6 text-purple-500" />;
    case 'Détection':
      return <FaSearch className="w-6 h-6 text-yellow-500" />;
    case 'Entretien':
      return <FaBroom className="w-6 h-6 text-orange-500" />;
    default:
      return <GiHeatHaze className="w-6 h-6 text-gray-500" />;
  }
};

async function getQuartierServices(quartier: string): Promise<Service[]> {
  try {
    await connectDB();
    
    const services = await Content.find({
      slug: { $regex: new RegExp(`^${quartier}-`) },
      type: 'service'
    }).sort({ title: 1 });

    if (!services || services.length === 0) {
      // Return default services if none found in DB
      const defaultServices: Service[] = [
        // Urgences
        { 
          slug: `${quartier}-fuite-eau`,
          title: "Fuite d&apos;eau",
          metadata: { 
            description: "Service d&apos;urgence pour fuite d&apos;eau disponible 24/7",
            category: 'Urgences'
          }
        },
        // ... (rest of the default services would go here)
      ];

      return defaultServices;
    }

    return services as Service[];
  } catch (error) {
    console.error('Error fetching quartier services:', error);
    throw error;
  }
}

export default async function QuartierPage({ params }: PageProps) {
  const { quartier } = params;
  
  try {
    const services = await getQuartierServices(quartier);
    const capitalizedQuartier = quartier.charAt(0).toUpperCase() + quartier.slice(1);

    // Group services by category
    const servicesByCategory = services.reduce<ServicesByCategory>((acc, service) => {
      const category = service.metadata.category || 'Autres';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    }, {});

    const heroContent = {
      headline: `Plombier à ${capitalizedQuartier}`,
      subheadline: 'Service professionnel disponible 24/7',
      urgencyMessage: 'Intervention rapide en 30 minutes pour les urgences',
      primaryCTA: 'Appeler maintenant|tel:+352123456',
      secondaryCTA: 'Demander un devis|/contact'
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <HeroSection hero={heroContent} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ServiceHighlights service={`Plomberie à ${capitalizedQuartier}`} />
          
          {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                {getCategoryIcon(category)}
                <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service) => {
                  const serviceSlug = service.slug.replace(`${quartier}-`, '');
                  return (
                    <Link
                      key={service.slug}
                      href={`/${quartier}/${serviceSlug}`}
                      className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{service.metadata.description}</p>
                        <div className="flex items-center text-blue-600 font-medium">
                          En savoir plus
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {services.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <p className="text-gray-600 text-center text-lg">
                Aucun service n&apos;est actuellement disponible dans ce quartier.
                Veuillez nous contacter directement pour plus d&apos;informations.
              </p>
            </div>
          )}
        </div>

        {/* Contact CTA Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin d&apos;un plombier à {capitalizedQuartier} ?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Notre équipe est disponible 24/7 pour tous vos besoins en plomberie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+352123456"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <FaWrench className="w-5 h-5" />
                Appeler maintenant
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Demander un devis
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering quartier page:', error);
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Erreur</h1>
          <p className="text-gray-600">Une erreur est survenue lors du chargement de la page.</p>
        </div>
      </div>
    );
  }
}
