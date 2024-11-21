import { Metadata } from 'next';
import Link from 'next/link';
import connectDB from '@/lib/mongodb';
import { Content } from '@/models/Content';

interface PageProps {
  params: {
    quartier: string;
  };
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

async function getQuartierServices(quartier: string) {
  try {
    await connectDB();
    
    // Find all services for this quartier
    const services = await Content.find({
      slug: { $regex: new RegExp(`^${quartier}-`) },
      type: 'service'
    }).sort({ title: 1 });

    if (!services || services.length === 0) {
      // Return default services if none found in DB
      const defaultServices = [
        // Urgences
        { 
          slug: `${quartier}-fuite-eau`,
          title: 'Fuite d\'eau',
          metadata: { 
            description: 'Service d\'urgence pour fuite d\'eau disponible 24/7',
            category: 'Urgences'
          }
        },
        { 
          slug: `${quartier}-debouchage-urgent`,
          title: 'Débouchage urgent',
          metadata: { 
            description: 'Débouchage en urgence de vos canalisations',
            category: 'Urgences'
          }
        },
        { 
          slug: `${quartier}-reparation-urgente`,
          title: 'Réparation urgente',
          metadata: { 
            description: 'Service de réparation d\'urgence 24/7',
            category: 'Urgences'
          }
        },
        
        // Installation
        { 
          slug: `${quartier}-installation-chauffe-eau`,
          title: 'Installation chauffe-eau',
          metadata: { 
            description: 'Installation professionnelle de chauffe-eau',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-wc`,
          title: 'Installation WC',
          metadata: { 
            description: 'Installation de WC et sanitaires',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-douche`,
          title: 'Installation douche',
          metadata: { 
            description: 'Installation complète de douche',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-baignoire`,
          title: 'Installation baignoire',
          metadata: { 
            description: 'Installation de baignoire sur mesure',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-lavabo`,
          title: 'Installation lavabo',
          metadata: { 
            description: 'Installation de lavabo et robinetterie',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-robinet`,
          title: 'Installation robinet',
          metadata: { 
            description: 'Installation et remplacement de robinetterie',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-evier`,
          title: 'Installation évier',
          metadata: { 
            description: 'Installation d\'évier de cuisine ou salle de bain',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-lave-vaisselle`,
          title: 'Installation lave-vaisselle',
          metadata: { 
            description: 'Installation et raccordement de lave-vaisselle',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-lave-linge`,
          title: 'Installation lave-linge',
          metadata: { 
            description: 'Installation et raccordement de machine à laver',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-cumulus`,
          title: 'Installation cumulus',
          metadata: { 
            description: 'Installation de chauffe-eau électrique',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-ballon-eau-chaude`,
          title: 'Installation ballon eau chaude',
          metadata: { 
            description: 'Installation de ballon d\'eau chaude',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-pompe-chaleur`,
          title: 'Installation pompe à chaleur',
          metadata: { 
            description: 'Installation de pompe à chaleur',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-chauffage`,
          title: 'Installation chauffage',
          metadata: { 
            description: 'Installation de système de chauffage',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-climatisation`,
          title: 'Installation climatisation',
          metadata: { 
            description: 'Installation de système de climatisation',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-adoucisseur`,
          title: 'Installation adoucisseur',
          metadata: { 
            description: 'Installation d\'adoucisseur d\'eau',
            category: 'Installation'
          }
        },
        { 
          slug: `${quartier}-installation-compteur-eau`,
          title: 'Installation compteur d\'eau',
          metadata: { 
            description: 'Installation et remplacement de compteur d\'eau',
            category: 'Installation'
          }
        },
        
        // Réparation
        { 
          slug: `${quartier}-reparation-fuite`,
          title: 'Réparation fuite',
          metadata: { 
            description: 'Réparation de tout type de fuite d\'eau',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartier}-reparation-chauffe-eau`,
          title: 'Réparation chauffe-eau',
          metadata: { 
            description: 'Réparation de chauffe-eau toutes marques',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartier}-reparation-wc`,
          title: 'Réparation WC',
          metadata: { 
            description: 'Réparation de toilettes et WC',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartier}-reparation-douche`,
          title: 'Réparation douche',
          metadata: { 
            description: 'Réparation de douche et cabine de douche',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartier}-reparation-robinet`,
          title: 'Réparation robinet',
          metadata: { 
            description: 'Réparation de robinetterie',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartier}-reparation-cumulus`,
          title: 'Réparation cumulus',
          metadata: { 
            description: 'Réparation de chauffe-eau électrique',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartier}-reparation-ballon-eau-chaude`,
          title: 'Réparation ballon eau chaude',
          metadata: { 
            description: 'Réparation de ballon d\'eau chaude',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartier}-reparation-pompe-chaleur`,
          title: 'Réparation pompe à chaleur',
          metadata: { 
            description: 'Réparation de pompe à chaleur',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartier}-reparation-chauffage`,
          title: 'Réparation chauffage',
          metadata: { 
            description: 'Réparation de système de chauffage',
            category: 'Réparation'
          }
        },
        { 
          slug: `${quartier}-reparation-climatisation`,
          title: 'Réparation climatisation',
          metadata: { 
            description: 'Réparation de système de climatisation',
            category: 'Réparation'
          }
        },
        
        // Débouchage
        { 
          slug: `${quartier}-debouchage-wc`,
          title: 'Débouchage WC',
          metadata: { 
            description: 'Débouchage de toilettes et WC',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartier}-debouchage-evier`,
          title: 'Débouchage évier',
          metadata: { 
            description: 'Débouchage d\'évier et lavabo',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartier}-debouchage-douche`,
          title: 'Débouchage douche',
          metadata: { 
            description: 'Débouchage de douche et siphon',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartier}-debouchage-baignoire`,
          title: 'Débouchage baignoire',
          metadata: { 
            description: 'Débouchage de baignoire et évacuation',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartier}-debouchage-lavabo`,
          title: 'Débouchage lavabo',
          metadata: { 
            description: 'Débouchage de lavabo et siphon',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartier}-debouchage-canalisation`,
          title: 'Débouchage canalisation',
          metadata: { 
            description: 'Débouchage de canalisation et égout',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartier}-debouchage-toilette`,
          title: 'Débouchage toilette',
          metadata: { 
            description: 'Débouchage de toilettes bouchées',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartier}-debouchage-egout`,
          title: 'Débouchage égout',
          metadata: { 
            description: 'Débouchage de canalisation d\'égout',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartier}-debouchage-colonne`,
          title: 'Débouchage colonne',
          metadata: { 
            description: 'Débouchage de colonne d\'immeuble',
            category: 'Débouchage'
          }
        },
        { 
          slug: `${quartier}-debouchage-siphon`,
          title: 'Débouchage siphon',
          metadata: { 
            description: 'Débouchage de siphon bouché',
            category: 'Débouchage'
          }
        },
        
        // Détection
        { 
          slug: `${quartier}-detection-fuite`,
          title: 'Détection fuite',
          metadata: { 
            description: 'Détection de fuite d\'eau non visible',
            category: 'Détection'
          }
        },
        { 
          slug: `${quartier}-detection-canalisation`,
          title: 'Détection canalisation',
          metadata: { 
            description: 'Détection et localisation de canalisation',
            category: 'Détection'
          }
        },
        { 
          slug: `${quartier}-camera-inspection`,
          title: 'Caméra inspection',
          metadata: { 
            description: 'Inspection vidéo des canalisations',
            category: 'Détection'
          }
        },
        { 
          slug: `${quartier}-detection-fuite-eau`,
          title: 'Détection fuite eau',
          metadata: { 
            description: 'Localisation précise des fuites d\'eau',
            category: 'Détection'
          }
        },
        { 
          slug: `${quartier}-detection-fuite-gaz`,
          title: 'Détection fuite gaz',
          metadata: { 
            description: 'Détection des fuites de gaz',
            category: 'Détection'
          }
        },
        
        // Entretien
        { 
          slug: `${quartier}-entretien-plomberie`,
          title: 'Entretien plomberie',
          metadata: { 
            description: 'Entretien régulier de vos installations',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartier}-entretien-chauffe-eau`,
          title: 'Entretien chauffe-eau',
          metadata: { 
            description: 'Entretien et maintenance de chauffe-eau',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartier}-detartrage`,
          title: 'Détartrage',
          metadata: { 
            description: 'Détartrage de vos installations',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartier}-entretien-pompe-chaleur`,
          title: 'Entretien pompe à chaleur',
          metadata: { 
            description: 'Entretien de pompe à chaleur',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartier}-entretien-chauffage`,
          title: 'Entretien chauffage',
          metadata: { 
            description: 'Entretien de système de chauffage',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartier}-entretien-climatisation`,
          title: 'Entretien climatisation',
          metadata: { 
            description: 'Entretien de système de climatisation',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartier}-entretien-adoucisseur`,
          title: 'Entretien adoucisseur',
          metadata: { 
            description: 'Entretien d\'adoucisseur d\'eau',
            category: 'Entretien'
          }
        },
        { 
          slug: `${quartier}-entretien-canalisation`,
          title: 'Entretien canalisation',
          metadata: { 
            description: 'Entretien préventif des canalisations',
            category: 'Entretien'
          }
        }
      ];

      return defaultServices;
    }

    return services;
  } catch (error) {
    console.error('Error fetching quartier services:', error);
    throw error;
  }
}

export default async function QuartierPage({ params }: PageProps) {
  const { quartier } = params;
  
  try {
    const services = await getQuartierServices(quartier);

    // Group services by category
    const servicesByCategory = services.reduce((acc, service) => {
      const category = service.metadata.category || 'Autres';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    }, {} as Record<string, any[]>);

    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Services de Plomberie à {quartier}
          </h1>
          
          {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{category}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service) => {
                  const serviceSlug = service.slug.replace(`${quartier}-`, '');
                  return (
                    <Link
                      key={service.slug}
                      href={`/${quartier}/${serviceSlug}`}
                      className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
                    >
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.metadata.description}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {services.length === 0 && (
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">
                Aucun service n'est actuellement disponible dans ce quartier.
                Veuillez nous contacter directement pour plus d'informations.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering quartier page:', error);
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
