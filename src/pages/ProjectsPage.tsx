import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Rénovation Complète d'Appartement Haussmannien",
    category: "Rénovation de l'habitat",
    location: "Luxembourg-Ville",
    description: "Rénovation totale d'un appartement de 120m² avec conservation des éléments d'époque",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    details: {
      surface: "120m²",
      duration: "4 mois",
      year: "2023"
    }
  },
  {
    title: "Extension Bois Contemporaine",
    category: "Extensions bois",
    location: "Strassen",
    description: "Création d'une extension en bois de 45m² pour agrandir l'espace de vie",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    details: {
      surface: "45m²",
      duration: "3 mois",
      year: "2023"
    }
  },
  {
    title: "Rénovation Énergétique Maison Individuelle",
    category: "Rénovation énergétique",
    location: "Bertrange",
    description: "Amélioration de la performance énergétique d'une maison de 180m²",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    details: {
      surface: "180m²",
      duration: "2 mois",
      year: "2023"
    }
  },
  {
    title: "Réaménagement Cuisine Design",
    category: "Rénovation de l'habitat",
    location: "Howald",
    description: "Création d'une cuisine moderne et fonctionnelle de 25m²",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    details: {
      surface: "25m²",
      duration: "6 semaines",
      year: "2023"
    }
  },
  {
    title: "Isolation Thermique par l'Extérieur",
    category: "Rénovation énergétique",
    location: "Hesperange",
    description: "Isolation complète d'une maison avec finition enduit",
    image: "https://images.unsplash.com/photo-1600573472591-ee6981cf83cc",
    details: {
      surface: "150m²",
      duration: "6 semaines",
      year: "2023"
    }
  },
  {
    title: "Extension Véranda Bioclimatique",
    category: "Extensions bois",
    location: "Sandweiler",
    description: "Création d'une véranda bioclimatique de 35m² en bois et verre",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
    details: {
      surface: "35m²",
      duration: "2 mois",
      year: "2023"
    }
  }
]

export const ProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nos Réalisations | REMAKE.lu - Projets de Rénovation au Luxembourg</title>
        <meta name="description" content="Découvrez nos projets de rénovation réussis au Luxembourg : rénovation d'appartements, extensions bois, rénovation énergétique. Expertise et savoir-faire." />
        <meta name="keywords" content="projets rénovation, réalisations rénovation, portfolio rénovation, Luxembourg" />
        <link rel="canonical" href="https://remake.lu/projets" />
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
              Nos Réalisations
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Découvrez nos projets de rénovation réalisés avec passion et expertise
            </p>
          </motion.div>

          <motion.div 
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.article 
                key={project.title}
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="relative w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">{project.details.year}</span>
                    <span className="text-gray-500">{project.location}</span>
                    <span
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span>
                        <span className="absolute inset-0" />
                        {project.title}
                      </span>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
                  </div>
                  <div className="mt-4 flex gap-x-4 text-sm text-gray-500">
                    <span>Surface: {project.details.surface}</span>
                    <span>•</span>
                    <span>Durée: {project.details.duration}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}
