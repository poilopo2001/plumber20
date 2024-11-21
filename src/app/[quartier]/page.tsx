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

    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Services de Plomberie à {quartier}
          </h1>
          
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const serviceSlug = service.slug.replace(`${quartier}-`, '');
              return (
                <Link
                  key={service.slug}
                  href={`/${quartier}/${serviceSlug}`}
                  className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
                >
                  <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                  <p className="text-gray-600">{service.metadata.description}</p>
                </Link>
              );
            })}
          </div>

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
