import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | REMAKE</title>
        <meta name="description" content="Politique de confidentialité de REMAKE. Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://remake.fr/politique-de-confidentialite" />
      </Helmet>

      <div className="bg-white px-6 py-32 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-base leading-7 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Politique de Confidentialité
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Dernière mise à jour : Mars 2024
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                1. Introduction
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  REMAKE s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons,
                  utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web ou nos services.
                </p>
                <p>
                  En utilisant notre site web, vous acceptez les pratiques décrites dans cette politique de confidentialité.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                2. Données collectées
              </h2>
              <div className="mt-4 space-y-4">
                <p>Nous collectons les types de données suivants :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Informations d'identification (nom, prénom)</li>
                  <li>Coordonnées (adresse email, numéro de téléphone, adresse postale)</li>
                  <li>Informations techniques (adresse IP, cookies)</li>
                  <li>Données de navigation sur notre site</li>
                  <li>Informations relatives à vos projets de rénovation</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                3. Utilisation des données
              </h2>
              <div className="mt-4 space-y-4">
                <p>Nous utilisons vos données personnelles pour :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vous fournir nos services de rénovation</li>
                  <li>Répondre à vos demandes de devis</li>
                  <li>Communiquer avec vous concernant nos services</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                4. Protection des données
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger
                  vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
                </p>
                <p>
                  L'accès à vos données personnelles est strictement limité aux employés et prestataires qui ont besoin
                  d'y accéder pour fournir nos services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                5. Cookies et technologies similaires
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Nous utilisons des cookies et technologies similaires pour améliorer votre expérience sur notre site web.
                  Ces technologies nous permettent de :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mémoriser vos préférences</li>
                  <li>Analyser l'utilisation de notre site</li>
                  <li>Personnaliser votre expérience</li>
                  <li>Sécuriser votre navigation</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                6. Vos droits
              </h2>
              <div className="mt-4 space-y-4">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité de vos données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous à [adresse email] ou par courrier à notre siège social.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                7. Conservation des données
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services
                  et respecter nos obligations légales. La durée de conservation varie selon le type de données
                  et leur finalité.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                8. Modifications de la politique
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                  Les modifications entrent en vigueur dès leur publication sur notre site web.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé des éventuelles
                  modifications.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                9. Contact
              </h2>
              <div className="mt-4">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données,
                  contactez notre Délégué à la Protection des Données :
                </p>
                <div className="mt-4">
                  <p>Email : [adresse email DPO]</p>
                  <p>Téléphone : [numéro de téléphone]</p>
                  <p>Adresse : 123 Avenue de la Rénovation, 75000 Paris, France</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  )
}
