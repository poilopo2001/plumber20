import connectDB from '@/lib/mongodb';
import Link from 'next/link';
import { WrenchIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Services de Plomberie | PlombierPro Luxembourg',
  description: 'Découvrez nos services de plomberie professionnels à Luxembourg: débouchage, réparation, installation, urgence 24/7. Intervention rapide et devis gratuit.',
};

async function getServices() {
  await connectDB();
  const db = (await import('mongoose')).connection.db;
  const services = await db.collection('services').find({}).toArray();
  
  // Group services by category
  const groupedServices = services.reduce((acc: { [key: string]: any[] }, service: any) => {
    const category = service.category || 'autres';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {});

  return groupedServices;
}

const categoryIcons: { [key: string]: any } = {
  debouchage: WrenchIcon,
  fuite: ShieldCheckIcon,
  installation: ClockIcon,
  autres: WrenchIcon,
  // Add more icons for other categories
};

const categoryNames: { [key: string]: string } = {
  debouchage: 'Débouchage',
  fuite: 'Détection et Réparation de Fuites',
  installation: 'Installation et Rénovation',
  chauffage: 'Chauffage et Chauffe-eau',
  sanitaire: 'Équipements Sanitaires',
  urgence: 'Services d\'Urgence',
  autres: 'Autres Services',
};

const categoryDescriptions: { [key: string]: string } = {
  debouchage: 'Services professionnels de débouchage pour vos canalisations, WC, éviers et plus encore.',
  fuite: 'Détection et réparation rapide de fuites d\'eau pour éviter les dégâts des eaux.',
  installation: 'Installation et rénovation de systèmes de plomberie aux normes luxembourgeoises.',
  chauffage: 'Installation, entretien et réparation de systèmes de chauffage et chauffe-eau.',
  sanitaire: 'Installation et maintenance d\'équipements sanitaires pour salle de bain et cuisine.',
  urgence: 'Service d\'intervention rapide 24/7 pour tous vos problèmes de plomberie urgents.',
  autres: 'Autres services de plomberie professionnels.',
};

interface Service {
  id: string;
  name: string;
  description?: string;
  emergency?: boolean;
  category: string;
}

interface Benefit {
  name: string;
  description: string;
  icon: string;
}

export default async function ServicesPage() {
  const groupedServices = await getServices();

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Services de Plomberie
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Des solutions professionnelles pour tous vos besoins en plomberie. 
            Service d'urgence disponible 24/7 sur Luxembourg-Ville et environs.
          </p>
        </div>

        {/* Emergency Call Banner */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h2 className="text-lg font-semibold text-blue-800">Besoin d'une intervention urgente ?</h2>
              <p className="text-blue-600">Nos plombiers sont disponibles 24/7 pour les urgences</p>
            </div>
            <a
              href="tel:+352661297770"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {Object.entries(groupedServices).map(([category, services]: [string, Service[]]) => {
            const categoryName = categoryNames[category] || category;
            return (
              <div key={category} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <span className="text-gray-500">
                    {services.length} services disponibles
                  </span>
                  {services.some((s: Service) => s.emergency) && (
                    <span className="text-red-500">
                      • Urgence 24/7
                    </span>
                  )}
                </div>
                <div className="relative">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                    {categoryName}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {categoryDescriptions[category] || ''}
                  </p>
                  <ul role="list" className="space-y-4">
                    {services.map((service: Service) => (
                      <li key={service.id} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <Link 
                            href={`/services/${service.id}`}
                            className="text-base font-medium text-gray-900 hover:text-blue-600"
                          >
                            {service.name}
                          </Link>
                          {service.description && (
                            <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/services/${category}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Voir tous les services de {categoryName} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            Pourquoi Choisir Nos Services ?
          </h2>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Expertise Professionnelle',
                description: 'Nos plombiers sont certifiés et expérimentés, garantissant un travail de qualité.',
                icon: '🏆'
              },
              {
                name: 'Intervention Rapide',
                description: 'Service d\'urgence disponible 24/7 avec intervention en moins de 30 minutes.',
                icon: '⚡'
              },
              {
                name: 'Prix Transparents',
                description: 'Devis gratuit et prix fixés avant intervention. Pas de surprises sur la facture.',
                icon: '💶'
              }
            ].map((benefit: Benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  {benefit.name}
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
              Contactez-nous pour obtenir un devis personnalisé pour vos travaux de plomberie.
              Réponse garantie sous 30 minutes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Demander un Devis
              </Link>
              <a href="tel:+352661297770" className="text-sm font-semibold leading-6 text-white">
                Appeler Maintenant <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
