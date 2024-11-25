import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    title: "Rénovation de salles de bain",
    description: "Transformez votre salle de bain en un espace moderne et fonctionnel. De la conception à la réalisation, nous prenons en charge l'intégralité de votre projet.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14",
    features: [
      "Design personnalisé",
      "Plomberie complète",
      "Carrelage et faïence",
      "Mobilier sur mesure"
    ],
    link: "/renovation-habitat/salle-de-bain"
  },
  {
    title: "Rénovation d'appartements",
    description: "Rénovation complète ou partielle de votre appartement. Nous optimisons l'espace et modernisons votre intérieur selon vos besoins.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    features: [
      "Réagencement des espaces",
      "Rénovation complète",
      "Mise aux normes",
      "Finitions haut de gamme"
    ]
  },
  {
    title: "Cuisine",
    description: "Création de cuisines fonctionnelles et esthétiques. Du plan de travail aux équipements, nous concevons la cuisine de vos rêves.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    features: [
      "Design ergonomique",
      "Équipements modernes",
      "Plan de travail sur mesure",
      "Solutions de rangement"
    ]
  },
  {
    title: "Aménagement combles",
    description: "Optimisez votre espace en transformant vos combles en pièce de vie. Nous créons des espaces confortables et lumineux sous les toits.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    features: [
      "Isolation performante",
      "Fenêtres de toit",
      "Aménagement sur mesure",
      "Optimisation de l'espace"
    ]
  },
  {
    title: "Rénovation maison",
    description: "Rénovation globale de votre maison, de la structure aux finitions. Nous donnons une nouvelle vie à votre habitat.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    features: [
      "Rénovation structurelle",
      "Modernisation",
      "Extension possible",
      "Coordination complète"
    ]
  },
  {
    title: "Isolation intérieure",
    description: "Améliorez le confort thermique de votre habitat avec nos solutions d'isolation intérieure performantes.",
    image: "https://images.unsplash.com/photo-1600573472591-ee6981cf83cc",
    features: [
      "Isolation thermique",
      "Isolation phonique",
      "Matériaux écologiques",
      "Économies d'énergie"
    ]
  }
]

export const HabitatRenovationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Rénovation de l'Habitat Luxembourg | REMAKE.lu - Expert en Rénovation</title>
        <meta name="description" content="Découvrez nos services de rénovation d'habitat au Luxembourg : salle de bain, cuisine, appartement, maison. Solutions complètes et sur-mesure par des experts locaux." />
        <meta name="keywords" content="rénovation habitat Luxembourg, rénovation appartement Luxembourg, rénovation maison Luxembourg, rénovation salle de bain Luxembourg, rénovation cuisine Luxembourg" />
        <link rel="canonical" href="https://remake.lu/renovation-habitat" />
      </Helmet>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Rénovation de l'Habitat
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des solutions complètes pour transformer et valoriser votre espace de vie
            </p>
          </motion.div>

          <motion.div 
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div 
                  key={service.title}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="group relative h-64 overflow-hidden rounded-2xl">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <dt className="text-2xl font-bold text-white">{service.title}</dt>
                    </div>
                  </div>
                  <dd className="mt-4">
                    <p className="text-base text-gray-600">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li 
                          key={feature}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <svg className="mr-2 h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link || `#`}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-orange-500 hover:text-orange-600"
                    >
                      En savoir plus
                      <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </>
  )
}
