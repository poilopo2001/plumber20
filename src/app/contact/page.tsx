export const metadata = {
  title: 'Contact | Plombier Professionnel Luxembourg',
  description: 'Contactez notre service de plomberie à Luxembourg. Disponible 24/7 pour urgences. Devis gratuit sous 30 minutes.',
};

export default function Contact() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contactez-nous</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Notre équipe est disponible 24/7 pour répondre à vos besoins en plomberie.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Contact Direct</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <p className="font-semibold">Téléphone Urgence</p>
                    <a href="tel:+352123456" className="text-blue-600 hover:underline">
                      +352 123 456
                    </a>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:contact@plombierpro.lu" className="text-blue-600 hover:underline">
                      contact@plombierpro.lu
                    </a>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-4">🏢</span>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p>Luxembourg-Ville</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-4">⏰</span>
                  <div>
                    <p className="font-semibold">Horaires</p>
                    <p>24/7 pour les urgences</p>
                    <p>Lun-Ven: 8h-18h (standard)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Demande de Devis</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Envoyer la demande
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Zone d'Intervention</h2>
            <p className="text-gray-600 mb-4">
              Nous intervenons dans tout Luxembourg-Ville et ses environs. Service d'urgence disponible 24/7.
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <li className="text-gray-600">• Luxembourg-Ville</li>
              <li className="text-gray-600">• Kirchberg</li>
              <li className="text-gray-600">• Bonnevoie</li>
              <li className="text-gray-600">• Gasperich</li>
              <li className="text-gray-600">• Merl</li>
              <li className="text-gray-600">• Belair</li>
              <li className="text-gray-600">• Limpertsberg</li>
              <li className="text-gray-600">• Hollerich</li>
              <li className="text-gray-600">• Cents</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
