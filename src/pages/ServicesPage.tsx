import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const services = [
  {
    category: "Rénovation de l'habitat",
    path: "/renovation-habitat",
    description: "Solutions complètes pour la rénovation de votre maison ou appartement",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    services: [
      "Rénovation de salles de bain",
      "Rénovation d'appartements",
      "Cuisine",
      "Aménagement combles",
      "Rénovation maison",
      "Isolation intérieure"
    ]
  },
  {
    category: "Rénovation énergétique",
    path: "/renovation-energetique",
    description: "Optimisez la performance énergétique de votre habitat",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    services: [
      "Chauffage",
      "Isolation extérieure",
      "Ventilation",
      "Menuiseries"
    ]
  },
  {
    category: "Extensions bois",
    path: "/extension-bois",
    description: "Agrandissez votre espace avec des solutions écologiques",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    services: [
      "Types d'extensions",
      "Matériaux et techniques",
      "Réglementations"
    ]
  }
]

export const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nos Services de Rénovation | REMAKE.lu</title>
        <meta name="description" content="Découvrez nos services de rénovation : habitat, rénovation énergétique et extensions bois. Solutions sur-mesure pour tous vos projets au Luxembourg." />
        <meta name="keywords" content="services rénovation, rénovation habitat, rénovation énergétique, extension bois, Luxembourg" />
        <link rel="canonical" href="https://remake.lu/services" />
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
              Nos Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des solutions complètes et sur-mesure pour tous vos projets de rénovation
            </p>
          </motion.div>

          <motion.div 
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <motion.div 
                  key={service.category}
                  className="group relative flex flex-col"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={service.path} className="block">
                    <div className="relative h-64 overflow-hidden rounded-2xl">
                      <img 
                        src={service.image} 
                        alt={service.category}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <dt className="text-2xl font-bold text-white">{service.category}</dt>
                        <dd className="mt-2 text-sm text-gray-100">{service.description}</dd>
                      </div>
                    </div>
                  </Link>
                  <dd className="mt-6 flex flex-col gap-2">
                    {service.services.map((item) => (
                      <Link 
                        key={item}
                        to={`${service.path}/${item.toLowerCase().replace(/ /g, '-')}`}
                        className="text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    ))}
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
