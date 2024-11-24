import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { HiMail, HiOfficeBuilding, HiClock } from 'react-icons/hi';

export const metadata = {
  title: 'Contact | Plombier Professionnel Luxembourg',
  description: 'Contactez notre service de plomberie à Luxembourg. Disponible 24/7 pour urgences. Devis gratuit sous 30 minutes.',
};

export default function Contact() {
  return (
    <div className="-mt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-block px-4 py-2 bg-blue-500/30 text-white rounded-full text-sm font-bold">
              ⚡ Réponse en 30 minutes
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Notre équipe est disponible 24/7 pour répondre à vos besoins en plomberie.
              Intervention rapide garantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+352661297770" 
                 className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200 shadow-lg">
                <FaPhoneAlt className="mr-2" />
                +352 661 29 77 70
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Contact Direct */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Direct</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white">
                      <FaPhoneAlt className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Téléphone Urgence</p>
                      <a href="tel:+352661297770" className="text-blue-600 hover:text-blue-500">
                        +352 661 29 77 70
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white">
                      <HiMail className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:contact@depannage-luxembourg.com" className="text-blue-600 hover:text-blue-500">
                        contact@depannage-luxembourg.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white">
                      <HiOfficeBuilding className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Adresse</p>
                      <p className="text-gray-600">38 Grand-Rue, 1660 Ville-Haute Luxembourg</p>
                      <p className="text-gray-600">Lux Grand-Rue Business Center</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white">
                      <HiClock className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Horaires</p>
                      <p className="text-gray-600">24/7 pour les urgences</p>
                      <p className="text-gray-600">Lun-Ven: 8h-18h (standard)</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Formulaire */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Demande de Devis</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="debouchage">Débouchage</option>
                      <option value="fuite">Fuite d'eau</option>
                      <option value="chauffe-eau">Chauffe-eau</option>
                      <option value="installation">Installation sanitaire</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition-colors duration-200"
                    >
                      Envoyer la demande
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Zone d'Intervention */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Zones d'Intervention</h2>
              <p className="text-gray-600 mb-8">
                Nous intervenons dans tout Luxembourg-Ville et ses environs. Service d'urgence disponible 24/7.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[/* eslint-disable-next-line */
                  'Beggen', 'Belair', 'Bonnevoie', 'Cents', 'Cessange',
                  'Clausen', 'Gasperich', 'Gare', 'Grund', 'Hollerich',
                  'Kirchberg', 'Limpertsberg', 'Merl', 'Neudorf', 'Pfaffenthal'
                ].map((quartier) => (
                  <a
                    key={quartier}
                    href={`/quartiers/${quartier.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 hover:underline"
                  >
                    {quartier}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
