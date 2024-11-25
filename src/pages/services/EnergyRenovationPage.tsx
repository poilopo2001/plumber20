import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Audit Énergétique',
    description: 'Analyse complète de votre habitation pour identifier les pertes d\'énergie et proposer des solutions adaptées.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    )
  },
  {
    name: 'Isolation Thermique',
    description: 'Solutions d\'isolation performantes pour murs, toits et sols conformes aux normes luxembourgeoises.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  },
  {
    name: 'Ventilation',
    description: 'Installation de systèmes de ventilation double flux pour un air sain et une meilleure efficacité énergétique.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Chauffage Efficace',
    description: 'Installation et modernisation de systèmes de chauffage économes en énergie.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    )
  },
  {
    name: 'Énergies Renouvelables',
    description: 'Installation de panneaux solaires et autres solutions d\'énergie renouvelable adaptées au Luxembourg.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    )
  },
  {
    name: 'Certification Énergétique',
    description: 'Accompagnement pour l\'obtention des certifications énergétiques requises au Luxembourg.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
];

export const EnergyRenovationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Rénovation Énergétique Luxembourg | REMAKE.lu</title>
        <meta name="description" content="Expert en rénovation énergétique au Luxembourg. Isolation, ventilation, chauffage efficace et énergies renouvelables pour optimiser votre consommation énergétique." />
        <meta name="keywords" content="rénovation énergétique, isolation thermique, ventilation, chauffage, énergies renouvelables, Luxembourg" />
        <link rel="canonical" href="https://remake.lu/services/renovation-energetique" />
      </Helmet>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Rénovation Énergétique
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Optimisez la performance énergétique de votre habitat au Luxembourg. Nos solutions sur-mesure vous permettent de réduire votre consommation d'énergie tout en augmentant votre confort de vie.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-orange-500 text-white">
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24"
          >
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-xl font-semibold leading-7 text-gray-900">
                Pourquoi choisir REMAKE.lu pour votre rénovation énergétique ?
              </h2>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Expertise approfondie des normes énergétiques luxembourgeoises
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Solutions personnalisées adaptées à votre budget et vos besoins
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Accompagnement dans les démarches de subventions énergétiques
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Matériaux et équipements de haute qualité certifiés
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mt-16 max-w-2xl text-center sm:mt-20"
          >
            <div className="rounded-2xl bg-orange-500 px-6 py-8">
              <h2 className="text-xl font-semibold text-white">
                Prêt à optimiser la performance énergétique de votre habitat ?
              </h2>
              <p className="mt-4 text-lg text-orange-100">
                Contactez-nous pour un audit énergétique gratuit et découvrez comment réduire vos factures d'énergie.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-orange-500 shadow-sm hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Demander un devis gratuit
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default EnergyRenovationPage;
