import Image from 'next/image';
import Link from 'next/link';
import FloatingContact from '@/components/FloatingContact';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

export const metadata = {
  title: 'Plombier Pro Luxembourg | Service Plomberie 24/7 | Intervention Rapide',
  description: 'Service de plomberie professionnel à Luxembourg-Ville. Intervention d\'urgence 24/7, débouchage, réparation et installation. Devis gratuit et intervention en 30 minutes.',
  keywords: ['plombier luxembourg', 'plombier urgence', 'débouchage luxembourg', 'dépannage plomberie', 'plombier 24/7'],
};

const quartiers = [
  'Beggen', 'Belair', 'Bonnevoie', 'Cents', 'Cessange',
  'Clausen', 'Gasperich', 'Gare', 'Grund', 'Hollerich',
  'Kirchberg', 'Limpertsberg', 'Merl', 'Neudorf', 'Pfaffenthal'
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen -mt-24">
      <main className="min-h-screen bg-gray-50">
        <FloatingContact />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-6 inline-block px-4 py-2 bg-blue-500/30 text-white rounded-full text-sm font-bold">
                ⚡ Intervention en 30 minutes
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
                Plombier Professionnel à Luxembourg-Ville
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Service d&apos;urgence 24/7. Intervention rapide garantie sur Luxembourg-Ville et environs.
                Devis gratuit immédiat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+352661297770" 
                   className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200 shadow-lg">
                  <FaPhoneAlt className="mr-2" />
                  +352 661 29 77 70
                </a>
                <Link href="/contact" 
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition-colors duration-200 shadow-lg">
                  Devis Gratuit
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
              <div className="mt-8 text-blue-100 font-medium">
                <span className="flex items-center justify-center">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="ml-2">4.9/5 basé sur 200+ avis</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Emergency Services Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Services d&apos;Urgence 24/7
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Intervention rapide pour tous vos problèmes de plomberie
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Débouchage Express',
                description: 'Débouchage professionnel de vos canalisations, WC, éviers. Intervention en urgence 24/7.',
                icon: '🚰',
                features: ['Débouchage WC', 'Débouchage évier', 'Débouchage canalisation']
              },
              {
                title: 'Réparation Fuite',
                description: 'Détection et réparation de fuites d&apos;eau. Intervention rapide pour éviter les dégâts.',
                icon: '💧',
                features: ['Fuite visible', 'Fuite cachée', 'Fuite canalisation']
              },
              {
                title: 'Installation & Réparation',
                description: 'Installation et réparation de tous types d&apos;équipements sanitaires.',
                icon: '🔧',
                features: ['Chauffe-eau', 'Robinetterie', 'Sanitaires']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {[
              {
                number: '30min',
                text: 'Temps d&apos;intervention moyen',
                icon: '⚡'
              },
              {
                number: '24/7',
                text: 'Service d&apos;urgence disponible',
                icon: '🕒'
              },
              {
                number: '15+',
                text: 'Années d&apos;expérience',
                icon: '🏆'
              },
              {
                number: '2000+',
                text: 'Clients satisfaits',
                icon: '😊'
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi Choisir PlombierPro?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expertise Professionnelle',
                  description: 'Équipe qualifiée avec plus de 15 ans d&apos;expérience en plomberie.',
                  icon: '👨‍🔧'
                },
                {
                  title: 'Prix Transparent',
                  description: 'Devis gratuit et détaillé avant intervention. Pas de frais cachés.',
                  icon: '💶'
                },
                {
                  title: 'Garantie Satisfaction',
                  description: 'Travail soigné et garanti. Service après-vente réactif.',
                  icon: '✅'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin d&apos;un plombier en urgence ?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible 24/7 pour tous vos besoins en plomberie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+352661297770" 
                 className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200 shadow-lg">
                <FaPhoneAlt className="mr-2" />
                Appeler Maintenant
              </a>
              <Link href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors duration-200">
                Devis Gratuit
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
