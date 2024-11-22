import Link from 'next/link';

export default function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-red-600">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </span>
            <p className="ml-3 font-medium">
              Urgence plomberie? Nous intervenons 24/7!
            </p>
          </div>
          <Link
            href="tel:+352661297770"
            className="rounded-md bg-red-800 px-4 py-1 text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Appeler Maintenant
          </Link>
        </div>
      </div>
    </div>
  );
}
