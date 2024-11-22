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
    quartierId: string;
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
  const { quartierId } = params;
  
  return {
    title: `Services de Plomberie à ${quartierId} | Plombier Pro Luxembourg`,
    description: `Découvrez nos services de plomberie professionnels à ${quartierId}, Luxembourg. Intervention rapide 24/7, devis gratuit.`,
    keywords: ['plombier', quartierId, 'Luxembourg', 'services plomberie'],
    openGraph: {
      title: `Services de Plomberie à ${quartierId}`,
      description: `Services de plomberie professionnels à ${quartierId}, Luxembourg`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/quartiers/${quartierId}`,
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

async function getQuartierServices(quartierId: string): Promise<Service[]> {
  try {
    await connectDB();
    
    const services = await Content.find({
      slug: { $regex: new RegExp(`^${quartierId}-`) },
      type: 'service'
    }).sort({ title: 1 });

    if (!services || services.length === 0) {
      // Return default services if none found in DB
      const defaultServices: Service[] = [
        // Urgences
        { 
          slug: `${quartierId}-fuite-eau`,
          title: "Fuite d&apos;eau",
          metadata: { 
            description: "Service d&apos;urgence pour fuite d&apos;eau disponible 24/7",
            category: 'Urgences'
          }
        },
        { 
          slug: `${quartierId}-debouchage-urgent`,
          title: 'Débouchage urgent',
          metadata: { 
            description: 'Débouchage en urgence de vos canalisations',
            category: 'Urgences'
          }
        },
        { 
          slug: `${quartierId}-reparation-urgente`,
          title: 'Réparation urgente',
          metadata: { 
            description: 'Service de réparation d&apos;urgence 24/7',
            category: 'Urgences'
          }
        },
        
        // Installation
        { 
          slug: `${quartierId}-installation-chauffe-eau`,
          title: 'Installation chauffe-eau',
          metadata: { 
            description: 'Installation professionnelle de chauffe-eau',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-wc`,
          title: 'Installation WC',
          metadata: { 
            description: 'Installation de WC et sanitaires',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-douche`,
          title: 'Installation douche',
          metadata: { 
            description: 'Installation complète de douche',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-baignoire`,
          title: 'Installation baignoire',
          metadata: { 
            description: 'Installation de baignoire sur mesure',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-lavabo`,
          title: 'Installation lavabo',
          metadata: { 
            description: 'Installation de lavabo et robinetterie',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-robinet`,
          title: 'Installation robinet',
          metadata: { 
            description: 'Installation et remplacement de robinetterie',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-evier`,
          title: 'Installation évier',
          metadata: { 
            description: 'Installation d&apos;évier de cuisine ou salle de bain',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-lave-vaisselle`,
          title: 'Installation lave-vaisselle',
          metadata: { 
            description: 'Installation et raccordement de lave-vaisselle',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-lave-linge`,
          title: 'Installation lave-linge',
          metadata: { 
            description: 'Installation et raccordement de machine à laver',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-cumulus`,
          title: 'Installation cumulus',
          metadata: { 
            description: 'Installation de chauffe-eau électrique',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-ballon-eau-chaude`,
          title: 'Installation ballon eau chaude',
          metadata: { 
            description: 'Installation de ballon d&apos;eau chaude',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-pompe-chaleur`,
          title: 'Installation pompe à chaleur',
          metadata: { 
            description: 'Installation de pompe à chaleur',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-chauffage`,
          title: 'Installation chauffage',
          metadata: { 
            description: 'Installation de système de chauffage',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-climatisation`,
          title: 'Installation climatisation',
          metadata: { 
            description: 'Installation de système de climatisation',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-adoucisseur`,
          title: 'Installation adoucisseur',
          metadata: { 
            description: 'Installation d&apos;adoucisseur d&apos;eau',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartierId}-installation-compteur-eau`,
          title: 'Installation compteur d&apos;eau',
          metadata: { 
            description: 'Installation et remplacement de compteur d&apos;eau',
            category: 'Installation'
          }
        },
        
        // Réparation
        { 
          slug: `${quartierId}-reparation-fuite`,
          title: 'Réparation fuite',
          metadata: { 
            description: 'Réparation de tout type de fuite d&apos;eau',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartierId}-reparation-chauffe-eau`,
          title: 'Réparation chauffe-eau',
          metadata: { 
            description: 'Réparation de chauffe-eau toutes marques',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartierId}-reparation-wc`,
          title: 'Réparation WC',
          metadata: { 
            description: 'Réparation de toilettes et WC',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartierId}-reparation-douche`,
          title: 'Réparation douche',
          metadata: { 
            description: 'Réparation de douche et cabine de douche',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartierId}-reparation-robinet`,
          title: 'Réparation robinet',
          metadata: { 
            description: 'Réparation de robinetterie',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartierId}-reparation-cumulus`,
          title: 'Réparation cumulus',
          metadata: { 
            description: 'Réparation de chauffe-eau électrique',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartierId}-reparation-ballon-eau-chaude`,
          title: 'Réparation ballon eau chaude',
          metadata: { 
            description: 'Réparation de ballon d&apos;eau chaude',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartierId}-reparation-pompe-chaleur`,
          title: 'Réparation pompe à chaleur',
          metadata: { 
            description: 'Réparation de pompe à chaleur',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartierId}-reparation-chauffage`,
          title: 'Réparation chauffage',
          metadata: { 
            description: 'Réparation de système de chauffage',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartierId}-reparation-climatisation`,
          title: 'Réparation climatisation',
          metadata: { 
            description: 'Réparation de système de climatisation',
            category: 'Réparation'
          }
        },
        
        // Débouchage
        { 
          slug: `${quartierId}-debouchage-wc`,
          title: 'Débouchage WC',
          metadata: { 
            description: 'Débouchage de toilettes et WC',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartierId}-debouchage-evier`,
          title: 'Débouchage évier',
          metadata: { 
            description: 'Débouchage d&apos;évier et lavabo',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartierId}-debouchage-douche`,
          title: 'Débouchage douche',
          metadata: { 
            description: 'Débouchage de douche et siphon',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartierId}-debouchage-baignoire`,
          title: 'Débouchage baignoire',
          metadata: { 
            description: 'Débouchage de baignoire et évacuation',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartierId}-debouchage-lavabo`,
          title: 'Débouchage lavabo',
          metadata: { 
            description: 'Débouchage de lavabo et siphon',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartierId}-debouchage-canalisation`,
          title: 'Débouchage canalisation',
          metadata: { 
            description: 'Débouchage de canalisation et égout',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartierId}-debouchage-toilette`,
          title: 'Débouchage toilette',
          metadata: { 
            description: 'Débouchage de toilettes bouchées',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartierId}-debouchage-egout`,
          title: 'Débouchage égout',
          metadata: { 
            description: 'Débouchage de canalisation d&apos;égout',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartierId}-debouchage-colonne`,
          title: 'Débouchage colonne',
          metadata: { 
            description: 'Débouchage de colonne d&apos;immeuble',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartierId}-debouchage-siphon`,
          title: 'Débouchage siphon',
          metadata: { 
            description: 'Débouchage de siphon bouché',
            category: 'Débouchage'
          }
        },
        
        // Détection
        { 
          slug: `${quartierId}-detection-fuite`,
          title: 'Détection fuite',
          metadata: { 
            description: 'Détection de fuite d&apos;eau non visible',
            category: 'Détection'
          }
        },
        { 
          slug: `${quartierId}-detection-canalisation`,
          title: 'Détection canalisation',
          metadata: { 
            description: 'Détection et localisation de canalisation',
            category: 'Détection'
          }
        },
        { 
          slug: `${quartierId}-camera-inspection`,
          title: 'Caméra inspection',
          metadata: { 
            description: 'Inspection vidéo des canalisations',
            category: 'Détection'
          }
        },
        { 
          slug: `${quartierId}-detection-fuite-eau`,
          title: 'Détection fuite eau',
          metadata: { 
            description: 'Localisation précise des fuites d&apos;eau',
            category: 'Détection'
          }
        },
        { 
          slug: `${quartierId}-detection-fuite-gaz`,
          title: 'Détection fuite gaz',
          metadata: { 
            description: 'Détection des fuites de gaz',
            category: 'Détection'
          }
        },
        
        // Entretien
        { 
          slug: `${quartierId}-entretien-plomberie`,
          title: 'Entretien plomberie',
          metadata: { 
            description: 'Entretien régulier de vos installations',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartierId}-entretien-chauffe-eau`,
          title: 'Entretien chauffe-eau',
          metadata: { 
            description: 'Entretien et maintenance de chauffe-eau',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartierId}-detartrage`,
          title: 'Détartrage',
          metadata: { 
            description: 'Détartrage de vos installations',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartierId}-entretien-pompe-chaleur`,
          title: 'Entretien pompe à chaleur',
          metadata: { 
            description: 'Entretien de pompe à chaleur',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartierId}-entretien-chauffage`,
          title: 'Entretien chauffage',
          metadata: { 
            description: 'Entretien de système de chauffage',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartierId}-entretien-climatisation`,
          title: 'Entretien climatisation',
          metadata: { 
            description: 'Entretien de système de climatisation',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartierId}-entretien-adoucisseur`,
          title: 'Entretien adoucisseur',
          metadata: { 
            description: 'Entretien d&apos;adoucisseur d&apos;eau',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartierId}-entretien-canalisation`,
          title: 'Entretien canalisation',
          metadata: { 
            description: 'Entretien préventif des canalisations',
            category: 'Entretien'
          }
        }
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
  const { quartierId } = params;
  
  try {
    const services = await getQuartierServices(quartierId);
    const capitalizedQuartier = quartierId.charAt(0).toUpperCase() + quartierId.slice(1);

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
                  const serviceSlug = service.slug.replace(`${quartierId}-`, '');
                  return (
                    <Link
                      key={service.slug}
                      href={`/quartiers/${quartierId}/${serviceSlug}`}
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
