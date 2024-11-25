import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const renovationTypes = [
  {
    name: 'Douche à l\'Italienne',
    description: 'Installation de douches à l\'italienne modernes et élégantes, parfaitement intégrées à votre espace.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101',
    features: [
      'Design épuré',
      'Accès facile',
      'Étanchéité parfaite',
      'Finitions soignées'
    ],
    path: '/renovation-habitat/salle-de-bain/douche-italienne'
  },
  {
    name: 'Baignoire Design',
    description: 'Large choix de baignoires contemporaines et classiques pour tous les styles d\'intérieur.',
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3',
    features: [
      'Modèles variés',
      'Installation pro',
      'Confort optimal',
      'Robinetterie design'
    ],
    path: '/renovation-habitat/salle-de-bain/baignoire'
  },
  {
    name: 'Double Vasque',
    description: 'Solutions de double vasque élégantes pour plus de confort et de fonctionnalité.',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c',
    features: [
      'Espace optimisé',
      'Style moderne',
      'Rangements intégrés',
      'Éclairage LED'
    ],
    path: '/renovation-habitat/salle-de-bain/double-vasque'
  },
  {
    name: 'WC Suspendus',
    description: 'Installation de WC suspendus modernes avec bâti-support intégré pour un design épuré.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
    features: [
      'Design moderne',
      'Facilité d\'entretien',
      'Installation pro',
      'Gain de place'
    ],
    path: '/renovation-habitat/salle-de-bain/wc-suspendus'
  },
  {
    name: 'Accessibilité PMR',
    description: 'Aménagements spéciaux pour personnes à mobilité réduite conformes aux normes.',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11',
    features: [
      'Normes respectées',
      'Sécurité maximale',
      'Confort adapté',
      'Solutions sur mesure'
    ],
    path: '/renovation-habitat/salle-de-bain/pmr-accessibilite'
  },
  {
    name: 'Guide Carrelage',
    description: 'Conseils experts pour le choix de votre carrelage : matériaux, formats, styles.',
    image: 'https://images.unsplash.com/photo-1584622781867-1c5fe959485b',
    features: [
      'Conseils experts',
      'Choix matériaux',
      'Tendances design',
      'Solutions durables'
    ],
    path: '/renovation-habitat/salle-de-bain/guide-carrelage'
  }
];

const services = [
  {
    title: 'Conception & Design',
    items: [
      'Plans 3D détaillés',
      'Conseils personnalisés',
      'Choix des matériaux',
      'Optimisation espace'
    ]
  },
  {
    title: 'Installation',
    items: [
      'Plomberie',
      'Électricité',
      'Carrelage',
      'Sanitaires'
    ]
  },
  {
    title: 'Finitions',
    items: [
      'Joints étanches',
      'Habillage mural',
      'Éclairage',
      'Accessoires'
    ]
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Visite sur site et évaluation de vos besoins'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Conception 3D et choix des matériaux'
  },
  {
    number: '03',
    title: 'Devis',
    description: 'Proposition détaillée et transparente'
  },
  {
    number: '04',
    title: 'Travaux',
    description: 'Réalisation par nos équipes qualifiées'
  },
  {
    number: '05',
    title: 'Contrôle',
    description: 'Vérification qualité et étanchéité'
  },
  {
    number: '06',
    title: 'Livraison',
    description: 'Remise des clés et garanties'
  }
];

export const BathroomRenovationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Rénovation Salle de Bain Luxembourg | REMAKE.lu</title>
        <meta 
          name="description" 
          content="Expert en rénovation de salle de bain au Luxembourg. Installation douche italienne, baignoire, double vasque et solutions PMR. Devis gratuit pour votre projet." 
        />
        <meta 
          name="keywords" 
          content="rénovation salle de bain, douche italienne, baignoire, double vasque, PMR, Luxembourg" 
        />
        <link rel="canonical" href="https://remake.lu/renovation-habitat/salle-de-bain" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden pt-14">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-100/30" />
            <img
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14"
              alt="Rénovation de salle de bain"
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
                Rénovation de Salle de Bain
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Transformez votre salle de bain en un espace de bien-être moderne et fonctionnel. 
                Des solutions sur-mesure adaptées à vos besoins et à votre style de vie.
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
                Nos Solutions
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Découvrez nos prestations adaptées à vos besoins
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
                  <Link to={type.path} className="group">
                    <div className="relative h-64 overflow-hidden rounded-2xl">
                      <img
                        src={type.image}
                        alt={type.name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
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
                  </Link>
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
                Une approche complète de la rénovation de salle de bain
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
                Prêt à transformer votre salle de bain ?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
                Contactez-nous pour un devis personnalisé et gratuit. Nos experts sont à votre écoute pour réaliser votre projet.
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

export default BathroomRenovationPage;
