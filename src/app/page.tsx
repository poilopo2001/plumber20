import Image from 'next/image';
import Link from 'next/link';
import FloatingContact from '@/components/FloatingContact';
import { FaPhoneAlt, FaArrowRight, FaTools, FaShieldAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Script from 'next/script';

export const metadata = {
  title: 'Plombier Pro Luxembourg | Service Plomberie 24/7 | Intervention Rapide',
  description: 'Service de plomberie professionnel à Luxembourg-Ville. Intervention d\'urgence 24/7, débouchage, réparation et installation. Devis gratuit et intervention en 30 minutes.',
  keywords: [
    'plombier luxembourg',
    'plombier urgence luxembourg',
    'débouchage luxembourg',
    'dépannage plomberie luxembourg',
    'plombier 24/7 luxembourg',
    'installation sanitaire luxembourg',
    'réparation fuite eau luxembourg',
    'plombier pas cher luxembourg',
    'urgence plomberie luxembourg ville',
    'devis plombier luxembourg'
  ],
  alternates: {
    canonical: 'https://depannage-luxembourg.com'
  },
  openGraph: {
    title: 'Plombier Pro Luxembourg | Service Plomberie 24/7',
    description: 'Service de plomberie professionnel à Luxembourg-Ville. Intervention d\'urgence 24/7, débouchage, réparation et installation.',
    url: 'https://depannage-luxembourg.com',
    siteName: 'PlombierPro Luxembourg',
    images: [
      {
        url: 'https://depannage-luxembourg.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'PlombierPro Luxembourg'
      }
    ],
    locale: 'fr_LU',
    type: 'website'
  }
};

const quartiers = [
  'Beggen', 'Belair', 'Bonnevoie', 'Cents', 'Cessange',
  'Clausen', 'Gasperich', 'Gare', 'Grund', 'Hollerich',
  'Kirchberg', 'Limpertsberg', 'Merl', 'Neudorf', 'Pfaffenthal'
];

const services = [
  {
    icon: '🚰',
    title: 'Débouchage',
    description: 'Service professionnel de débouchage rapide pour éviers, toilettes et canalisations à Luxembourg',
    features: [
      'Intervention en 30 minutes garantie',
      'Débouchage haute pression professionnel',
      'Inspection par caméra haute définition',
      'Devis gratuit sans engagement',
      'Service disponible 24h/24 et 7j/7'
    ]
  },
  {
    icon: '🔧',
    title: 'Réparation',
    description: 'Réparation experte de fuites, robinets et installations sanitaires par des professionnels qualifiés',
    features: [
      'Détection de fuites avancée',
      'Réparation robinetterie garantie',
      'Remplacement joints professionnel',
      'Diagnostic précis et rapide',
      'Solutions durables'
    ]
  },
  {
    icon: '🛠️',
    title: 'Installation',
    description: 'Installation et remplacement d\'équipements sanitaires par des experts certifiés',
    features: [
      'Installation sanitaire complète',
      'Remplacement chauffe-eau professionnel',
      'Pose de robinetterie experte',
      'Conformité aux normes',
      'Garantie sur les travaux'
    ]
  }
];

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    'name': 'PlombierPro Luxembourg',
    'image': 'https://depannage-luxembourg.com/images/logo.png',
    'description': 'Service de plomberie professionnel à Luxembourg-Ville. Intervention d\'urgence 24/7, débouchage, réparation et installation.',
    '@id': 'https://depannage-luxembourg.com',
    'url': 'https://depannage-luxembourg.com',
    'telephone': '+352661297770',
    'priceRange': '€€',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Luxembourg-Ville',
      'addressLocality': 'Luxembourg',
      'postalCode': 'L-1111',
      'addressCountry': 'LU'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 49.6116,
      'longitude': 6.1319
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'sameAs': [
      'https://www.facebook.com/plombierpro',
      'https://www.instagram.com/plombierpro'
    ],
    'areaServed': {
      '@type': 'City',
      'name': 'Luxembourg-Ville'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Services de Plomberie',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Débouchage d\'urgence',
            'description': 'Service de débouchage professionnel disponible 24/7'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Réparation de fuite',
            'description': 'Réparation rapide de tout type de fuite d\'eau'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Installation sanitaire',
            'description': 'Installation professionnelle d\'équipements sanitaires'
          }
        }
      ]
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '200'
    }
  };

  return (
    <div className="flex flex-col min-h-screen -mt-24">
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
                Service d'urgence 24/7. Intervention rapide garantie sur Luxembourg-Ville et environs.
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
              Services d'Urgence 24/7
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Intervention rapide pour tous vos problèmes de plomberie
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
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
                icon: '⚡',
                number: '30min',
                text: 'Temps d\'intervention'
              },
              {
                icon: '🏆',
                number: '15+',
                text: 'Années d\'expérience'
              },
              {
                icon: '👥',
                number: '5000+',
                text: 'Clients satisfaits'
              },
              {
                icon: '⭐',
                number: '4.9/5',
                text: 'Note moyenne'
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
                  icon: '⚡',
                  title: 'Rapidité',
                  description: 'Intervention en 30 minutes sur Luxembourg-Ville'
                },
                {
                  icon: '💪',
                  title: 'Expertise',
                  description: 'Équipe qualifiée avec plus de 15 ans d\'expérience'
                },
                {
                  icon: '💰',
                  title: 'Prix Transparent',
                  description: 'Devis gratuit et prix fixe sans surprise'
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

          {/* FAQ Section for SEO */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Questions Fréquentes
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: 'Quel est le délai d\'intervention pour une urgence plomberie à Luxembourg ?',
                  answer: 'Nous garantissons une intervention en 30 minutes sur Luxembourg-Ville et ses environs pour toute urgence plomberie, 24h/24 et 7j/7.'
                },
                {
                  question: 'Quels sont vos tarifs pour un dépannage plomberie ?',
                  answer: 'Nos tarifs sont transparents et fixés à l\'avance. Nous proposons un devis gratuit avant toute intervention pour éviter les mauvaises surprises.'
                },
                {
                  question: 'Quelles zones couvrez-vous à Luxembourg ?',
                  answer: 'Nous intervenons dans tout Luxembourg-Ville et ses environs, notamment à Beggen, Belair, Bonnevoie, Cents, Cessange, et autres quartiers.'
                },
                {
                  question: 'Proposez-vous une garantie sur vos interventions ?',
                  answer: 'Oui, toutes nos interventions sont garanties. Nous utilisons des pièces de qualité et assurons un service professionnel conforme aux normes.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Service Areas Section */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Zones d'Intervention à Luxembourg
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {quartiers.map((quartier, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 text-center">
                    <FaMapMarkerAlt className="inline-block text-blue-600 mb-2" />
                    <p className="text-gray-700">{quartier}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Avis de Nos Clients
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: 'Marie L.',
                  rating: 5,
                  comment: 'Service rapide et professionnel. Intervention en moins de 30 minutes pour une fuite urgente.',
                  date: '2024-01-15'
                },
                {
                  name: 'Jean P.',
                  rating: 5,
                  comment: 'Excellent service de débouchage. Prix transparent et travail de qualité.',
                  date: '2024-01-10'
                },
                {
                  name: 'Sophie M.',
                  rating: 5,
                  comment: 'Très satisfaite de l\'installation de mon nouveau chauffe-eau. Équipe compétente et ponctuelle.',
                  date: '2024-01-05'
                }
              ].map((review, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-lg">{'⭐'.repeat(review.rating)}</div>
                  </div>
                  <p className="text-gray-600 mb-4">"{review.comment}"</p>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">{review.name}</span> - {review.date}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Besoin d'un plombier en urgence ?</h2>
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
        </div>
      </main>
    </div>
  );
}
