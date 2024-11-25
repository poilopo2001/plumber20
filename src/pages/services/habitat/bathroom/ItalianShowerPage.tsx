import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Design & Esthétique',
    items: [
      'Design moderne et élégant',
      'Style minimaliste',
      'Intégration parfaite',
      'Solutions sur mesure'
    ]
  },
  {
    title: 'Avantages Pratiques',
    items: [
      'Accès de plain-pied',
      'Gain de place optimal',
      'Entretien facilité',
      'Plus-value immobilière'
    ]
  },
  {
    title: 'Aspects Techniques',
    items: [
      'Étanchéité garantie',
      'Pente optimale',
      'Évacuation efficace',
      'Installation aux normes'
    ]
  }
];

const materials = [
  {
    title: 'Receveurs',
    items: [
      'Extra-plat sur mesure',
      'Receveur à carreler',
      'Système prêt à poser',
      'Solutions encastrées'
    ]
  },
  {
    title: 'Revêtements',
    items: [
      'Grès cérame antidérapant',
      'Mosaïque décorative',
      'Pierre naturelle',
      'Carrelage grand format'
    ]
  },
  {
    title: 'Équipements',
    items: [
      'Parois en verre',
      'Caniveau de douche',
      'Colonne hydromassante',
      'Siphon de sol design'
    ]
  }
];

const technicalDetails = [
  {
    title: 'Étanchéité',
    description: "Système d'étanchéité certifié avec membrane imperméable et joints spéciaux garantissant une protection optimale contre les infiltrations.",
    image: 'https://images.unsplash.com/photo-1620626011940-427366bb2909'
  },
  {
    title: 'Système de Pente',
    description: "Pente réglementaire parfaitement calculée pour une évacuation efficace de l'eau, avec un minimum de 1 à 2% selon les normes en vigueur.",
    image: 'https://images.unsplash.com/photo-1620626011525-5f3dd87b3f23'
  },
  {
    title: 'Solutions Antidérapantes',
    description: "Revêtements spécialement traités pour garantir une sécurité maximale, conformes aux normes antidérapantes les plus strictes.",
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a'
  }
];

const faqItems = [
  {
    question: "Quelle est la durée d'installation d'une douche à l'italienne ?",
    answer: "La durée moyenne d'installation est de 5 à 7 jours ouvrés, incluant la préparation, l'installation et les finitions. Ce délai peut varier selon la configuration de votre salle de bain et l'ampleur des travaux préparatoires nécessaires."
  },
  {
    question: "Quel est le coût d'une douche à l'italienne ?",
    answer: "Le prix varie selon les dimensions, les matériaux choisis et la complexité de l'installation. Nous établissons un devis détaillé gratuit après une visite technique pour évaluer précisément vos besoins."
  },
  {
    question: "Quelle est la pente nécessaire pour une douche à l'italienne ?",
    answer: "La norme exige une pente minimale de 1 à 2% pour assurer une évacuation efficace de l'eau. Nos installations respectent scrupuleusement ces normes pour un fonctionnement optimal."
  },
  {
    question: "Quel entretien pour une douche à l'italienne ?",
    answer: "L'entretien est simple : un nettoyage régulier avec des produits adaptés au type de revêtement choisi. Nous fournissons un guide d'entretien complet avec nos installations."
  }
];

const ItalianShowerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Installation Douche à l'Italienne Luxembourg | Expert Douche Plain-Pied | Rénov & Habitat</title>
        <meta 
          name="description" 
          content="Expert en installation de douche à l'italienne au Luxembourg. Douche plain-pied, sans seuil, walk-in shower. Installation professionnelle, étanchéité garantie. Devis gratuit." 
        />
        <meta 
          name="keywords" 
          content="douche italienne, douche plain-pied, douche sans seuil, walk-in shower, bodengleiche dusche, installation douche italienne, pose douche italienne, rénovation salle de bain, Luxembourg" 
        />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden pt-14">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-100/30" />
            <img
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101"
              alt="Douche à l'italienne moderne"
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
                Expert en Installation de Douches à l'Italienne
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Transformez votre salle de bain avec une douche à l'italienne moderne et élégante. 
                Design épuré, confort maximal et installation professionnelle garantie.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/contact"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-500 shadow-sm hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Devis gratuit
                </Link>
                <Link to="/realisations" className="text-sm font-semibold leading-6 text-white">
                  Voir nos réalisations <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Caractéristiques & Avantages
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Découvrez tous les bénéfices d'une douche à l'italienne
              </p>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
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

        {/* Technical Details */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Aspects Techniques
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Une installation dans les règles de l'art
              </p>
            </motion.div>

            {technicalDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex gap-8 items-center max-lg:flex-col ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } mb-16`}
              >
                <div className="flex flex-col w-full lg:w-[45%]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{detail.title}</h3>
                  <p className="text-lg leading-8 text-gray-600">{detail.description}</p>
                </div>
                <div className="w-full lg:w-[55%]">
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="rounded-2xl object-cover h-[300px] w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Materials Grid */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Matériaux & Options
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Des solutions adaptées à vos envies
              </p>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {materials.map((material, index) => (
                <motion.div
                  key={material.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{material.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {material.items.map((item) => (
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

        {/* FAQ Section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Questions Fréquentes
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Tout ce que vous devez savoir
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-16 max-w-3xl space-y-8"
            >
              {faqItems.map((item, index) => (
                <div key={index} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  <p className="mt-4 text-sm text-gray-600">{item.answer}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-500">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Prêt à Transformer Votre Salle de Bain ?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
                Contactez-nous pour une visite technique gratuite. Nos experts sont à votre écoute 
                pour réaliser votre projet de douche à l'italienne.
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

export default ItalianShowerPage;
