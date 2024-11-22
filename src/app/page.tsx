import Image from 'next/image';
import Link from 'next/link';

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
      {/* Hero Section - Updated with better contrast */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-36 pb-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block px-4 py-2 bg-yellow-500 text-blue-900 rounded-full text-sm font-bold">
                ⚡ Intervention en 30 minutes
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Plombier Professionnel à Luxembourg-Ville
              </h1>
              <p className="text-xl mb-8 text-white">
                Service d&apos;urgence 24/7. Intervention rapide garantie sur Luxembourg-Ville et environs.
                Devis gratuit immédiat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+352691XXXXXX" 
                   className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 shadow-lg">
                  📞 +352 691 XX XX XX
                </a>
                <Link href="/contact" 
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-blue-900 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 shadow-lg">
                  Devis Gratuit →
                </Link>
              </div>
              <div className="mt-8 flex items-center text-white">
                <span className="flex items-center">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="ml-2 text-sm font-semibold">4.9/5 basé sur 200+ avis</span>
                </span>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/plumber-hero.jpg"
                alt="Plombier professionnel à Luxembourg"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Emergency Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Services d&apos;Urgence 24/7</h2>
            <p className="text-xl text-gray-700">Intervention rapide pour tous vos problèmes de plomberie</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-2 border-blue-100">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <div key={index} className="text-center p-6 rounded-xl bg-blue-800 border-2 border-blue-700">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quartiers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Nous Intervenons dans Tous les Quartiers</h2>
            <p className="text-xl text-gray-700">Service rapide partout à Luxembourg-Ville</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quartiers.map((quartier, index) => (
              <Link 
                key={index}
                href={`/quartiers/${quartier.toLowerCase()}`}
                className="p-4 text-center bg-blue-50 rounded-lg shadow hover:shadow-md transition-shadow duration-200 border-2 border-blue-100 text-blue-900 font-medium hover:bg-blue-100"
              >
                {quartier}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Pourquoi Nous Choisir ?</h2>
            <p className="text-xl text-gray-700">La qualité de service est notre priorité</p>
          </div>
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Besoin d&apos;un Plombier en Urgence ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Notre équipe de plombiers professionnels est disponible 24/7 pour résoudre tous vos problèmes de plomberie.
            Intervention rapide garantie sur Luxembourg-Ville.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+352691XXXXXX" 
               className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 shadow-lg">
              📞 Appeler Maintenant
            </a>
            <Link href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-blue-900 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 shadow-lg">
              Devis Gratuit →
            </Link>
          </div>
          <div className="mt-8 text-sm text-blue-100 font-medium">
            Réponse immédiate • Devis gratuit • Prix fixe
          </div>
        </div>
      </section>
    </div>
  );
}
