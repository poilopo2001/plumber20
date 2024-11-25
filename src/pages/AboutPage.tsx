import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>À Propos de REMAKE.lu | Votre Expert en Rénovation au Luxembourg</title>
        <meta name="description" content="Découvrez REMAKE.lu, votre partenaire de confiance pour tous vos projets de rénovation au Luxembourg. Expertise, qualité et satisfaction client garanties." />
        <meta name="keywords" content="REMAKE.lu, entreprise rénovation, expert rénovation, Luxembourg" />
        <link rel="canonical" href="https://remake.lu/a-propos" />
      </Helmet>

      <div className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Notre Histoire
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Depuis notre création, REMAKE s'est imposé comme un acteur majeur de la rénovation au Luxembourg. Notre expertise, notre savoir-faire et notre engagement envers l'excellence nous permettent de réaliser vos projets les plus ambitieux.
            </p>
          </motion.div>

          {/* Values Section */}
          <motion.div 
            className="mt-20 max-w-lg sm:mx-auto md:max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16">
              {[
                {
                  title: "Excellence",
                  description: "Nous nous engageons à fournir un travail de la plus haute qualité, en utilisant les meilleurs matériaux et techniques.",
                  icon: "🏆"
                },
                {
                  title: "Innovation",
                  description: "Nous restons à la pointe des dernières technologies et méthodes de rénovation pour vous offrir les meilleures solutions.",
                  icon: "💡"
                },
                {
                  title: "Durabilité",
                  description: "Nous privilégions des solutions écologiques et durables pour minimiser notre impact environnemental.",
                  icon: "🌱"
                }
              ].map((value) => (
                <div key={value.title} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-white sm:shrink-0">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-900">{value.title}</p>
                    <p className="mt-2 text-base leading-7 text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div 
            className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notre Équipe</h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Basés au Luxembourg, nous intervenons dans tout le pays pour transformer vos espaces de vie. Notre équipe passionnée combine expertise technique et créativité pour donner vie à vos projets de rénovation.
              </p>
            </div>
            <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: "Jean Dupont",
                  role: "Directeur Général",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Marie Martin",
                  role: "Architecte d'Intérieur",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Pierre Dubois",
                  role: "Chef de Projets",
                  image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                }
              ].map((person) => (
                <li key={person.name}>
                  <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.image} alt={person.name} />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  )
}
