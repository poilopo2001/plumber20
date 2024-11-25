'use client';

import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Devis', href: '/devis' },
    { name: 'À Propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  quartiers: [
    { name: 'Beggen', href: '/quartiers/beggen' },
    { name: 'Belair', href: '/quartiers/belair' },
    { name: 'Bonnevoie', href: '/quartiers/bonnevoie' },
    { name: 'Cents', href: '/quartiers/cents' },
    { name: 'Cessange', href: '/quartiers/cessange' },
    { name: 'Clausen', href: '/quartiers/clausen' },
    { name: 'Gasperich', href: '/quartiers/gasperich' },
    { name: 'Gare', href: '/quartiers/gare' },
    { name: 'Grund', href: '/quartiers/grund' },
    { name: 'Hollerich', href: '/quartiers/hollerich' },
    { name: 'Kirchberg', href: '/quartiers/kirchberg' },
    { name: 'Limpertsberg', href: '/quartiers/limpertsberg' },
    { name: 'Merl', href: '/quartiers/merl' },
    { name: 'Neudorf', href: '/quartiers/neudorf' },
    { name: 'Pfaffenthal', href: '/quartiers/pfaffenthal' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold text-white">Dépannage Plombier</span>
              <p className="text-sm text-red-400 mt-2">Intervention en 30 minutes 24/7</p>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Service de plomberie d'urgence à Luxembourg. Intervention rapide et professionnelle 24h/24 et 7j/7.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-16 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li className="flex">
                <div className="text-sm leading-6 text-gray-300">
                  <strong className="text-white">Téléphone:</strong>
                  <br />
                  <a href="tel:+352661297770" className="hover:text-white">
                    +352 661 29 77 70
                  </a>
                </div>
              </li>
              <li className="flex">
                <div className="text-sm leading-6 text-gray-300">
                  <strong className="text-white">Email:</strong>
                  <br />
                  <a href="mailto:contact@depannage-luxembourg.com" className="hover:text-white">
                    contact@depannage-luxembourg.com
                  </a>
                </div>
              </li>
              <li className="flex">
                <div className="text-sm leading-6 text-gray-300">
                  <strong className="text-white">Adresse:</strong>
                  <br />
                  38 Grand-Rue, 1660 Ville-Haute Luxembourg
                  <br />
                  Lux Grand-Rue Business Center
                </div>
              </li>
            </ul>
          </div>

          {/* Quartiers */}
          <div className="mt-16 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white mb-6">Zones d'intervention</h3>
            <div className="grid grid-cols-2 gap-4">
              {navigation.quartiers.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-sm leading-6 text-gray-300 hover:text-white hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Dépannage Plombier Luxembourg. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
