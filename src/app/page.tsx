import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Plombier Luxembourg | Dépannage Urgent 24/7',
  description: 'Service de plomberie professionnel à Luxembourg. Intervention d\'urgence 24/7, débouchage, réparation et installation. Devis gratuit sous 30 minutes.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Plombier Professionnel à Luxembourg
              </h1>
              <p className="text-xl mb-8">
                Service d'urgence 24/7. Intervention rapide en 30 minutes sur Luxembourg-Ville et environs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+352123456" 
                   className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
                  Appeler Maintenant
                </a>
                <Link href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800">
                  Devis Gratuit
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/plumber-hero.jpg"
                alt="Plombier professionnel à Luxembourg"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services d'Urgence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Débouchage',
                description: 'Débouchage rapide de vos canalisations, WC, éviers. Intervention en urgence 24/7.',
                icon: '🚰'
              },
              {
                title: 'Fuite d\'eau',
                description: 'Détection et réparation de fuites d\'eau. Intervention rapide pour éviter les dégâts.',
                icon: '💧'
              },
              {
                title: 'Chauffe-eau',
                description: 'Réparation et installation de chauffe-eau. Service disponible 7j/7.',
                icon: '🔥'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Nous Choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Disponible 24/7',
                description: 'Service d\'urgence disponible jour et nuit, weekend et jours fériés.',
                icon: '⏰'
              },
              {
                title: 'Intervention Rapide',
                description: 'Intervention en moins de 30 minutes sur Luxembourg-Ville.',
                icon: '🚗'
              },
              {
                title: 'Prix Transparent',
                description: 'Devis gratuit et prix fixe avant intervention. Pas de surprises.',
                icon: '💶'
              },
              {
                title: 'Garantie Satisfaction',
                description: 'Travail soigné et garanti. Satisfaction client assurée.',
                icon: '✅'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Besoin d'un Plombier en Urgence ?</h2>
          <p className="text-xl mb-8">
            Notre équipe de plombiers professionnels est disponible 24/7 pour vous aider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+352123456" 
               className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
              Appeler Maintenant
            </a>
            <Link href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800">
              Demander un Devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
