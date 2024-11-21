import connectDB from '@/lib/mongodb';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Service {
  id: string;
  name: string;
  description: string;
  emergency?: boolean;
  category?: string;
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { serviceId: string } }) {
  const service = await getService(params.serviceId);
  
  if (!service) {
    return {
      title: 'Service Non Trouvé | PlombierPro Luxembourg',
      description: 'Le service demandé n\'existe pas.',
    };
  }

  return {
    title: `${service.name} | PlombierPro Luxembourg`,
    description: service.description || `Service professionnel de plomberie à Luxembourg. Intervention rapide 24/7, devis gratuit.`,
  };
}

async function getService(serviceId: string): Promise<Service | null> {
  try {
    await connectDB();
    const db = (await import('mongoose')).connection.db;
    const service = await db.collection('services').findOne({ id: serviceId });
    
    if (!service) {
      return null;
    }

    return service as Service;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

export default async function ServicePage({ params }: { params: { serviceId: string } }) {
  const service = await getService(params.serviceId);

  if (!service) {
    notFound();
  }

  const benefits = [
    {
      title: 'Intervention Rapide',
      description: 'Service disponible 24/7 avec intervention en moins de 30 minutes sur Luxembourg-Ville.',
      icon: '⚡'
    },
    {
      title: 'Prix Transparent',
      description: 'Devis gratuit et détaillé avant intervention. Pas de surprises sur la facture.',
      icon: '💶'
    },
    {
      title: 'Garantie Qualité',
      description: 'Travail soigné et garanti par nos plombiers professionnels certifiés.',
      icon: '✅'
    }
  ];

  const serviceName = service.name || 'plomberie';

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <Link href="/" className="text-gray-400 hover:text-gray-500">
                Accueil
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <Link href="/services" className="ml-4 text-gray-400 hover:text-gray-500">
                  Services
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <span className="ml-4 text-gray-500" aria-current="page">
                  {serviceName}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Service Header */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {serviceName}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {service.description || `Service professionnel de ${serviceName.toLowerCase()} à Luxembourg. Notre équipe d'experts est à votre disposition pour tous vos besoins en plomberie.`}
          </p>
        </div>

        {/* Emergency Call Banner */}
        {service.emergency && (
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <h2 className="text-lg font-semibold text-blue-800">Service d'Urgence Disponible</h2>
                <p className="text-blue-600">Intervention rapide 24/7 sur Luxembourg-Ville et environs</p>
              </div>
              <a
                href="tel:+352123456"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                ☎️ Appeler Maintenant
              </a>
            </div>
          </div>
        )}

        {/* Benefits */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-2xl text-white">{benefit.icon}</span>
                  </div>
                  {benefit.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Besoin d'un Devis Gratuit ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contactez-nous pour obtenir un devis personnalisé pour vos travaux de {serviceName.toLowerCase()}.
              Réponse garantie sous 30 minutes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Demander un Devis
              </Link>
              <a href="tel:+352123456" className="text-sm font-semibold leading-6 text-white">
                Appeler Maintenant <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
