import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Sécurité',
    items: [
      'Barres d\'appui',
      'Sol antidérapant',
      'Éclairage adapté',
      'Accès sécurisé'
    ]
  },
  {
    title: 'Confort',
    items: [
      'Hauteurs adaptées',
      'Espace optimisé',
      'Accès facilité',
      'Ergonomie maximale'
    ]
  },
  {
    title: 'Conformité',
    items: [
      'Normes PMR',
      'Certification',
      'Réglementation',
      'Standards qualité'
    ]
  }
];

const materials = [
  {
    name: 'Équipements PMR',
    options: [
      'Douche à l\'italienne',
      'WC surélevé',
      'Lavabo adapté',
      'Siège de douche'
    ]
  },
  {
    name: 'Sécurité',
    options: [
      'Barres de maintien',
      'Revêtements antidérapants',
      'Systèmes d\'alarme',
      'Points d\'appui'
    ]
  },
  {
    name: 'Accessoires',
    options: [
      'Robinetterie adaptée',
      'Miroirs inclinables',
      'Rangements accessibles',
      'Éclairage automatique'
    ]
  }
];

const AccessibilityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Salle de Bain PMR | Accessibilité et Adaptation | Rénov & Habitat</title>
        <meta 
          name="description" 
          content="Aménagement de salles de bain PMR au Luxembourg. Solutions sur mesure pour l'accessibilité et le confort des personnes à mobilité réduite." 
        />
        <meta 
          name="keywords" 
          content="salle de bain PMR, accessibilité, mobilité réduite, adaptation salle de bain, Luxembourg" 
        />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden pt-14">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-100/30" />
            <img
              src="https://images.unsplash.com/photo-1586105251261-72a756497a11"
              alt="Salle de bain PMR"
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Salle de Bain PMR
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Solutions d'accessibilité sur mesure pour les personnes à mobilité réduite. 
                Confort et sécurité garantis.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Caractéristiques */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Caractéristiques
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Des solutions adaptées aux besoins spécifiques
              </p>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray-600">
                        <svg className="mr-2 h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Équipements */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Équipements & Solutions
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Des aménagements spécialisés pour votre confort
              </p>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {materials.map((material, index) => (
                <motion.div
                  key={material.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{material.name}</h3>
                  <ul className="mt-6 space-y-3">
                    {material.options.map((option) => (
                      <li key={option} className="flex items-center text-sm text-gray-600">
                        <svg className="mr-2 h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {option}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Garanties */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nos Garanties
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Un engagement qualité pour votre sécurité
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-16 max-w-2xl rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200"
            >
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="ml-4 text-lg text-gray-600">Conformité aux normes PMR</span>
                </li>
                <li className="flex items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="ml-4 text-lg text-gray-600">Installation certifiée</span>
                </li>
                <li className="flex items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="ml-4 text-lg text-gray-600">Équipements homologués</span>
                </li>
                <li className="flex items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="ml-4 text-lg text-gray-600">Assistance personnalisée</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-500">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Besoin d'adapter votre salle de bain ?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
                Contactez-nous pour une étude personnalisée de votre projet. Nos experts vous accompagnent dans l'aménagement de votre espace.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/contact"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-500 shadow-sm hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Demander un devis
                </Link>
                <Link to="/realisations" className="text-sm font-semibold leading-6 text-white">
                  Voir nos réalisations <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityPage;
