import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Non Trouvée | Plombier Luxembourg',
  description: 'La page que vous recherchez n\'existe pas. Découvrez nos services de plomberie dans tous les quartiers de Luxembourg.',
  robots: 'noindex, nofollow', // Prevent indexing of 404 pages
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Non Trouvée</h1>
        <p className="text-gray-600 mb-8">La page que vous recherchez n&apos;existe pas.</p>
        <Link href="/" className="text-blue-600 hover:text-blue-700">
          Retour à l&apos;accueil →
        </Link>
      </div>
    </div>
  );
}
