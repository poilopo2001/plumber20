import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

export const metadata = {
  title: 'À Propos | Plombier Professionnel Luxembourg',
  description: 'Découvrez PlombierPro, votre expert en plomberie à Luxembourg. Plus de 15 ans d\'expérience, service d\'urgence 24/7, et satisfaction client garantie.',
};

export default function About() {
  return (
    <div className="-mt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-block px-4 py-2 bg-blue-500/30 text-white rounded-full text-sm font-bold">
              🛠️ Plus de 15 ans d'expérience
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Votre Expert Plombier à Luxembourg
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Service professionnel de plomberie disponible 24/7 pour tous vos besoins.
              Une équipe qualifiée à votre service.
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
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Notre Mission',
                description: 'Fournir des services de plomberie rapides, fiables et professionnels 24/7 pour assurer votre confort et votre sécurité.',
                icon: '🎯'
              },
              {
                title: 'Notre Vision',
                description: 'Devenir le service de plomberie le plus fiable et le plus respecté du Luxembourg, reconnu pour notre excellence et notre réactivité.',
                icon: '👀'
              },
              {
                title: 'Nos Valeurs',
                description: 'Professionnalisme, honnêteté, transparence et satisfaction client sont au cœur de notre approche quotidienne.',
                icon: '💫'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '15+', label: 'Années d\'Expérience', icon: '🏆' },
                { number: '2000+', label: 'Clients Satisfaits', icon: '😊' },
                { number: '24/7', label: 'Service d\'Urgence', icon: '🕒' },
                { number: '30min', label: 'Temps de Réponse', icon: '⚡' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe d'Experts</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une équipe qualifiée et expérimentée à votre service
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Jean Dupont',
                  role: 'Maître Plombier',
                  description: '20 ans d\'expérience en plomberie résidentielle et commerciale.',
                  image: '/images/plumber1.jpg'
                },
                {
                  name: 'Marc Weber',
                  role: 'Spécialiste Urgences',
                  description: 'Expert en intervention rapide et résolution de problèmes complexes.',
                  image: '/images/plumber2.jpg'
                },
                {
                  name: 'Sophie Muller',
                  role: 'Technicienne Sanitaire',
                  description: 'Spécialiste des installations sanitaires modernes et écologiques.',
                  image: '/images/plumber3.jpg'
                }
              ].map((member, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-white rounded-xl shadow-sm p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications et Agréments</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous sommes agréés et certifiés pour garantir la qualité de nos services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Certifications Professionnelles</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Agrément Plomberie Luxembourg
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Certification Sécurité Gaz
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Certification Eco-Plomberie
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Assurances et Garanties</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Assurance Responsabilité Civile
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Garantie sur tous les travaux
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Protection client complète
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
