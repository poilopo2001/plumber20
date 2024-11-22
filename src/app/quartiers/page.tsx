import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import connectDB from '@/lib/mongodb';
import Breadcrumbs from '@/components/Breadcrumbs';
import FloatingContact from '@/components/FloatingContact';
import EmergencyBanner from '@/components/EmergencyBanner';

interface Quartier {
  id: string;
  name: string;
}

export const metadata: Metadata = {
  title: 'Quartiers de Luxembourg | PlombierPro - Services de Plomberie',
  description: 'Services de plomberie professionnels dans tous les quartiers de Luxembourg. Intervention rapide 24/7, devis gratuit.',
  keywords: ['plombier', 'Luxembourg', 'quartiers', 'urgence', 'dépannage'],
};

async function getQuartiers(): Promise<Quartier[]> {
  try {
    await connectDB();
    const db = (await import('mongoose')).connection.db;
    const quartiers = await db.collection('quartiers').find({}).toArray();
    
    if (!quartiers || quartiers.length === 0) {
      return [
        { id: 'beggen', name: 'Beggen' },
        { id: 'belair', name: 'Belair' },
        { id: 'bonnevoie-nord', name: 'Bonnevoie Nord' },
        { id: 'bonnevoie-sud', name: 'Bonnevoie Sud' },
        { id: 'cents', name: 'Cents' },
        { id: 'cessange', name: 'Cessange' },
        { id: 'clausen', name: 'Clausen' },
        { id: 'dommeldange', name: 'Dommeldange' },
        { id: 'eich', name: 'Eich' },
        { id: 'gare', name: 'Gare' },
        { id: 'gasperich', name: 'Gasperich' },
        { id: 'grund', name: 'Grund' },
        { id: 'hamm', name: 'Hamm' },
        { id: 'hollerich', name: 'Hollerich' },
        { id: 'kirchberg', name: 'Kirchberg' },
        { id: 'limpertsberg', name: 'Limpertsberg' },
        { id: 'merl', name: 'Merl' },
        { id: 'muhlenbach', name: 'Muhlenbach' },
        { id: 'neudorf', name: 'Neudorf' },
        { id: 'pfaffenthal', name: 'Pfaffenthal' },
        { id: 'pulvermuhl', name: 'Pulvermuhl' },
        { id: 'rollingergrund', name: 'Rollingergrund' },
        { id: 'ville-haute', name: 'Ville Haute' },
        { id: 'weimerskirch', name: 'Weimerskirch' }
      ];
    }

    return quartiers as Quartier[];
  } catch (error) {
    console.error('Error fetching quartiers:', error);
    throw error;
  }
}

export default async function QuartiersPage() {
  const quartiers = await getQuartiers();

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Emergency Banner */}
        <EmergencyBanner />

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Services de Plomberie à Luxembourg
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Intervention rapide dans tous les quartiers de Luxembourg 24h/24 et 7j/7
              </p>
              <div className="inline-flex space-x-4">
                <Link
                  href="tel:+352661297770"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Appeler Maintenant
                </Link>
                <Link
                  href="/contact"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
                >
                  Devis Gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choisissez Votre Quartier
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sélectionnez votre quartier pour découvrir nos services de plomberie disponibles dans votre zone. Nous intervenons rapidement pour tout type de dépannage.
            </p>
          </div>

          {/* Quartiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quartiers.map((quartier) => (
              <div
                key={quartier.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <Link
                  href={`/quartiers/${quartier.id}`}
                  className="block hover:text-blue-600 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {quartier.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Services de plomberie à {quartier.name}
                  </p>
                </Link>
                <div className="space-y-2">
                  <Link
                    href={`/${quartier.id}/debouchage-urgent`}
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    Débouchage Urgent 24/7
                  </Link>
                  <Link
                    href={`/${quartier.id}/fuite-eau`}
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    Fuite d'Eau
                  </Link>
                  <Link
                    href={`/${quartier.id}/debouchage-canalisation`}
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    Débouchage Canalisation
                  </Link>
                  <Link
                    href={`/${quartier.id}/installation-wc`}
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    Installation WC
                  </Link>
                  <Link
                    href={`/${quartier.id}/remplacement-chauffe-eau`}
                    className="block text-blue-600 hover:text-blue-700"
                  >
                    Remplacement Chauffe-eau
                  </Link>
                  <Link
                    href={`/quartiers/${quartier.id}`}
                    className="block mt-4 text-sm text-gray-500 hover:text-blue-600"
                  >
                    Voir tous les services →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi Choisir PlombierPro?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Intervention Rapide</h3>
                <p className="text-gray-600">Service disponible 24/7 pour les urgences dans tous les quartiers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Qualité Garantie</h3>
                <p className="text-gray-600">Travail soigné et professionnel avec garantie satisfaction</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Prix Compétitifs</h3>
                <p className="text-gray-600">Devis gratuit et tarifs transparents sans surprise</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Contact Button */}
        <FloatingContact />
      </div>
    </>
  );
}
