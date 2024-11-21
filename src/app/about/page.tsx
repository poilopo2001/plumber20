import Image from 'next/image';

export const metadata = {
  title: 'À Propos | Plombier Professionnel Luxembourg',
  description: 'Découvrez PlombierPro, votre expert en plomberie à Luxembourg. Plus de 15 ans d\'expérience, service d\'urgence 24/7, et satisfaction client garantie.',
};

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Votre Expert Plombier à Luxembourg</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depuis plus de 15 ans, nous fournissons des services de plomberie de qualité
            aux résidents et entreprises de Luxembourg-Ville et ses environs.
          </p>
        </div>

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
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Années d\'Expérience' },
              { number: '10K+', label: 'Clients Satisfaits' },
              { number: '24/7', label: 'Service d\'Urgence' },
              { number: '30min', label: 'Temps de Réponse' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe d'Experts</h2>
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications et Agréments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Certifications Professionnelles</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Agrément Plomberie Luxembourg
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Certification Sécurité Gaz
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Certification Eco-Plomberie
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Assurances et Garanties</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Assurance Responsabilité Civile
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Garantie sur tous les travaux
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Protection client complète
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
