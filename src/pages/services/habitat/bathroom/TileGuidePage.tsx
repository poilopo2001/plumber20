import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Types de Carrelage',
    items: [
      'Grès cérame',
      'Faïence murale',
      'Mosaïque',
      'Pierre naturelle'
    ]
  },
  {
    title: 'Caractéristiques',
    items: [
      'Antidérapant',
      'Résistant à l\'eau',
      'Facile d\'entretien',
      'Durable'
    ]
  },
  {
    title: 'Esthétique',
    items: [
      'Designs variés',
      'Formats multiples',
      'Effets matière',
      'Harmonies colorées'
    ]
  }
];

const materials = [
  {
    name: 'Formats',
    options: [
      'Grand format',
      'Format standard',
      'Mosaïque',
      'Formats mixtes'
    ]
  },
  {
    name: 'Finitions',
    options: [
      'Mat',
      'Brillant',
      'Structuré',
      'Poli'
    ]
  },
  {
    name: 'Styles',
    options: [
      'Contemporain',
      'Classique',
      'Industriel',
      'Nature'
    ]
  }
];

const TileGuidePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Guide Choix Carrelage Salle de Bain | Conseils Expert | Rénov & Habitat</title>
        <meta 
          name="description" 
          content="Guide expert pour choisir le carrelage de votre salle de bain au Luxembourg. Conseils sur les matériaux, formats, styles et pose de carrelage." 
        />
        <meta 
          name="keywords" 
          content="carrelage salle de bain, guide carrelage, choix carrelage, conseils carrelage, Luxembourg" 
        />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden pt-14">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-100/30" />
            <img
              src="https://images.unsplash.com/photo-1584622781867-1c5fe959485b"
              alt="Carrelage salle de bain"
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
                Guide Carrelage
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Tout ce que vous devez savoir pour choisir le carrelage idéal 
                pour votre salle de bain.
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
                Guide de Choix
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Les critères essentiels pour bien choisir votre carrelage
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

        {/* Matériaux */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Options & Possibilités
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Découvrez toutes les possibilités pour votre projet
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

        {/* Conseils */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nos Conseils
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Les points clés pour une installation réussie
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
                  <span className="ml-4 text-lg text-gray-600">Évaluez la surface à carreler</span>
                </li>
                <li className="flex items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="ml-4 text-lg text-gray-600">Choisissez le format adapté</span>
                </li>
                <li className="flex items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="ml-4 text-lg text-gray-600">Vérifiez la qualité antidérapante</span>
                </li>
                <li className="flex items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="ml-4 text-lg text-gray-600">Faites appel à des professionnels</span>
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
                Besoin de conseils personnalisés ?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
                Contactez-nous pour bénéficier de l'expertise de nos spécialistes. Nous vous accompagnons dans le choix de votre carrelage.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/contact"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-500 shadow-sm hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Demander conseil
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

export default TileGuidePage;
