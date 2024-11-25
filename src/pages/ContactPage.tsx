import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ContactForm } from '../components/ContactForm'

export const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contactez REMAKE.lu | Expert en Rénovation au Luxembourg</title>
        <meta name="description" content="Contactez REMAKE.lu pour vos projets de rénovation au Luxembourg. Devis gratuit, conseil personnalisé et accompagnement sur-mesure pour tous vos travaux." />
        <meta name="keywords" content="contact REMAKE.lu, devis rénovation, conseil rénovation, Luxembourg" />
        <link rel="canonical" href="https://remake.lu/contact" />
      </Helmet>

      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div 
            className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Contactez-nous</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets de rénovation.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Adresse</span>
                    <svg className="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                  </dt>
                  <dd>123 Route d'Esch<br />L-1470 Luxembourg</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Téléphone</span>
                    <svg className="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </dt>
                  <dd><a href="tel:+352123456" className="hover:text-orange-500">+352 12 34 56</a></dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <svg className="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </dt>
                  <dd><a href="mailto:contact@remake.lu" className="hover:text-orange-500">contact@remake.lu</a></dd>
                </div>
              </dl>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
