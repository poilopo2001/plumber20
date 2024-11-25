import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const renovationTypes = [
  {
    name: 'Studio & 1 Chambre',
    description: 'Solutions optimisées pour les petits espaces, maximisant chaque mètre carré avec style et fonctionnalité.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    features: [
      'Optimisation de l\'espace',
      'Mobilier multifonction',
      'Solutions de rangement',
      'Design contemporain'
    ]
  },
  {
    name: '2 Chambres et Plus',
    description: 'Rénovation complète d\'appartements familiaux avec une attention particulière à la circulation et aux espaces de vie.',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
    features: [
      'Réagencement optimal',
      'Espaces familiaux',
      'Isolation acoustique',
      'Finitions premium'
    ]
  },
  {
    name: 'Rénovation Complète',
    description: 'Transformation totale de votre appartement, de la conception à la réalisation, incluant tous les corps de métier.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    features: [
      'Gestion de projet',
      'Coordination travaux',
      'Respect des délais',
      'Garantie décennale'
    ]
  }
];

const services = [
  {
    title: 'Conception & Design',
    items: [
      'Plans 3D détaillés',
      'Conseils en décoration',
      'Choix des matériaux',
      'Optimisation des espaces'
    ]
  },
  {
    title: 'Travaux Structurels',
    items: [
      'Démolition contrôlée',
      'Modification cloisons',
      'Renforcement planchers',
      'Mise aux normes'
    ]
  },
  {
    title: 'Second Œuvre',
    items: [
      'Plâtrerie',
      'Électricité',
      'Plomberie',
      'Revêtements sols/murs'
    ]
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation Initiale',
    description: 'Visite sur site et évaluation de vos besoins spécifiques'
  },
  {
    number: '02',
    title: 'Conception & Devis',
    description: 'Élaboration des plans et proposition détaillée'
  },
  {
    number: '03',
    title: 'Planification',
    description: 'Organisation du chantier et des interventions'
  },
  {
    number: '04',
    title: 'Réalisation',
    description: 'Exécution des travaux par nos équipes qualifiées'
  },
  {
    number: '05',
    title: 'Contrôle Qualité',
    description: 'Vérification rigoureuse de chaque étape'
  },
  {
    number: '06',
    title: 'Livraison',
    description: 'Remise des clés et garanties'
  }
];

export const ApartmentRenovationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Rénovation d'Appartement Luxembourg | REMAKE.lu</title>
        <meta name="description" content="Expert en rénovation d'appartement au Luxembourg. Du studio à l'appartement familial, transformez votre espace avec nos solutions sur-mesure. Devis gratuit." />
        <meta name="keywords" content="rénovation appartement Luxembourg, rénovation studio, rénovation logement, transformation appartement, aménagement intérieur Luxembourg" />
        <link rel="canonical" href="https://remake.lu/renovation-habitat/appartements" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden pt-14">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-100/30" />
            <img
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498b"
              alt="Rénovation d'appartement"
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
                Rénovation d'Appartement
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Transformez votre espace de vie avec notre expertise en rénovation d'appartement au Luxembourg. 
                Des solutions personnalisées pour tous les styles et budgets.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Types de Rénovation */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Types de Rénovation
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Découvrez nos solutions adaptées à chaque type d'appartement
              </p>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {renovationTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden rounded-2xl">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="h-full w-full object-cover transition duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75" />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl font-semibold text-white">{type.name}</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm leading-6 text-gray-600">{type.description}</p>
                    <ul className="mt-4 space-y-2">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <svg className="mr-2 h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Nos Services */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nos Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Une approche complète de la rénovation d'appartement
              </p>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {service.items.map((item) => (
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

        {/* Processus */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Notre Processus
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Une méthodologie éprouvée pour votre projet de rénovation
              </p>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                    <span className="text-xl font-semibold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-500">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Prêt à transformer votre appartement ?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
                Contactez-nous pour un devis personnalisé et gratuit. Nos experts sont à votre écoute pour réaliser votre projet.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-500 shadow-sm hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Demander un devis
                </a>
                <a href="/realisations" className="text-sm font-semibold leading-6 text-white">
                  Voir nos réalisations <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartmentRenovationPage;
