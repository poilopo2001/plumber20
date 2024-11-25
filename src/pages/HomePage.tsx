import React from 'react'
import { Helmet } from 'react-helmet-async'
import { RenovationHero } from '../components/RenovationHero'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { RecentProjects } from '../components/RecentProjects'
import { ContactForm } from '../components/ContactForm'

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>REMAKE.lu - Expert en Rénovation d'Habitat | Luxembourg</title>
        <meta name="description" content="REMAKE.lu, votre expert en rénovation d'habitat, rénovation énergétique et extensions bois au Luxembourg. Transformez votre espace avec nos solutions sur-mesure." />
        <meta name="keywords" content="rénovation habitat, rénovation énergétique, extension bois, Luxembourg, maison, appartement" />
        <link rel="canonical" href="https://remake.lu" />
      </Helmet>

      <RenovationHero />
      <Hero />
      <Services />
      <RecentProjects />
      <ContactForm />
    </>
  )
}
