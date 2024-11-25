import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export const LegalPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | REMAKE</title>
        <meta name="description" content="Mentions légales de REMAKE, entreprise de rénovation en Île-de-France. Informations légales, conditions d'utilisation et politique de confidentialité." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://remake.fr/mentions-legales" />
      </Helmet>

      <div className="bg-white px-6 py-32 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-base leading-7 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mentions Légales
          </h1>
          <div className="mt-10 space-y-8">
            <section>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                1. Informations légales
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  REMAKE est une société par actions simplifiée (SAS) au capital de 50 000 euros,
                  immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro XXX XXX XXX.
                </p>
                <p>
                  <strong>Siège social :</strong><br />
                  123 Avenue de la Rénovation<br />
                  75000 Paris<br />
                  France
                </p>
                <p>
                  <strong>Numéro de TVA intracommunautaire :</strong> FR XX XXX XXX XXX
                </p>
                <p>
                  <strong>Directeur de la publication :</strong> [Nom du directeur]
                </p>
              </div>
            </section>

            <section>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                2. Hébergement
              </h2>
              <p className="mt-4">
                Ce site est hébergé par [Nom de l'hébergeur], [Adresse de l'hébergeur],
                [Téléphone de l'hébergeur].
              </p>
            </section>

            <section>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                3. Propriété intellectuelle
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le
                  droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont
                  réservés, y compris pour les documents téléchargeables et les représentations
                  iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il
                  soit est formellement interdite sauf autorisation expresse de REMAKE.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                4. Protection des données personnelles
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Les informations personnelles collectées par REMAKE sont uniquement destinées à un
                  usage interne. En aucun cas ces informations ne seront cédées ou vendues à des
                  tiers.
                </p>
                <p>
                  Conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux
                  fichiers et aux libertés, vous disposez d'un droit d'accès, de rectification et de
                  suppression des informations personnelles vous concernant que vous pouvez exercer
                  en nous écrivant par mail à : [adresse email] ou par courrier à l'adresse du siège
                  social.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                5. Cookies
              </h2>
              <p className="mt-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous
                pouvez paramétrer votre navigateur pour refuser les cookies, cependant, certaines
                fonctionnalités du site pourraient ne plus être accessibles.
              </p>
            </section>

            <section>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                6. Limitation de responsabilité
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  REMAKE s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à
                  jour des informations diffusées sur ce site, dont elle se réserve le droit de
                  corriger, à tout moment et sans préavis, le contenu.
                </p>
                <p>
                  REMAKE décline toute responsabilité pour les éventuelles erreurs ou omissions dans
                  les informations diffusées sur ce site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                7. Droit applicable
              </h2>
              <p className="mt-4">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les
                tribunaux français seront seuls compétents.
              </p>
            </section>

            <div className="mt-10 text-sm text-gray-500">
              <p>
                Dernière mise à jour : Mars 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
