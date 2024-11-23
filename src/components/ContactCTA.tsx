import Link from 'next/link';

interface ContactCTAProps {
  quartier: string;
  service: string;
}

export default function ContactCTA({ quartier, service }: ContactCTAProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-4">Besoin d'un Plombier à {quartier}?</h3>
      <ul className="space-y-3 mb-6">
        <li className="flex items-center gap-2">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Devis gratuit sous 30 minutes</span>
        </li>
        <li className="flex items-center gap-2">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Intervention rapide 24/7</span>
        </li>
        <li className="flex items-center gap-2">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Prix transparents</span>
        </li>
      </ul>
      
      <div className="space-y-3">
        <Link
          href="/contact"
          className="block w-full text-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Demander un Devis
        </Link>
        <Link
          href="tel:+352661297770"
          className="block w-full text-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
        >
          Appeler {quartier}
        </Link>
      </div>

      <p className="mt-4 text-sm text-blue-100 text-center">
        Expert en {service.toLowerCase()} à {quartier}
      </p>
    </div>
  );
}
