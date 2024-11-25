import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Conception Sur-Mesure',
    description: 'Création d\'extensions personnalisées qui s\'intègrent harmonieusement à votre habitat existant.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    )
  },
  {
    name: 'Construction Durable',
    description: 'Utilisation de bois certifiés et de matériaux écologiques conformes aux normes luxembourgeoises.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    )
  },
  {
    name: 'Isolation Performante',
    description: 'Solutions d\'isolation thermique et acoustique optimales pour un confort maximal.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  },
  {
    name: 'Rapidité d\'Exécution',
    description: 'Construction rapide et efficace grâce à la préfabrication en atelier.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Gestion Administrative',
    description: 'Accompagnement complet dans les démarches administratives et permis de construire.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    )
  },
  {
    name: 'Finitions Soignées',
    description: 'Travail de qualité jusque dans les moindres détails pour un résultat impeccable.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  },
];

export const WoodExtensionPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Extension Bois Luxembourg | REMAKE.lu</title>
        <meta name="description" content="Spécialiste des extensions en bois au Luxembourg. Solutions durables et personnalisées pour agrandir votre espace de vie tout en respectant l'environnement." />
        <meta name="keywords" content="extension bois, agrandissement maison, construction bois, Luxembourg" />
        <link rel="canonical" href="https://remake.lu/services/extension-bois" />
      </Helmet>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Extension Bois
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Agrandissez votre espace de vie avec une extension en bois élégante et écologique. Nos solutions sur-mesure s'adaptent parfaitement à votre habitat existant tout en respectant l'environnement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-orange-500 text-white">
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24"
          >
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-xl font-semibold leading-7 text-gray-900">
                Les avantages de l'extension en bois
              </h2>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Matériau naturel et écologique
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Excellentes propriétés isolantes
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Chantier propre et rapide
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Solution durable et pérenne
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mt-16 max-w-2xl text-center sm:mt-20"
          >
            <div className="rounded-2xl bg-orange-500 px-6 py-8">
              <h2 className="text-xl font-semibold text-white">
                Envie d'agrandir votre espace de vie ?
              </h2>
              <p className="mt-4 text-lg text-orange-100">
                Contactez-nous pour une étude personnalisée de votre projet d'extension en bois.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-orange-500 shadow-sm hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Demander un devis gratuit
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WoodExtensionPage;
