import * as React from "react";
import { Link } from "react-router-dom";
import { NavigationItem } from "./types";
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const navigationItems: NavigationItem[] = [
  { 
    text: "Nos services",
    href: "/services",
    submenu: [
      {
        text: "Rénovation de l'habitat",
        href: "/renovation-habitat",
      },
      {
        text: "Rénovation énergétique",
        href: "/renovation-energetique",
      },
      {
        text: "Extension bois",
        href: "/extension-bois",
      }
    ]
  },
  { 
    text: "Rénovation habitat",
    href: "/renovation-habitat",
    submenu: [
      {
        text: "Salle de bain",
        href: "/renovation-habitat/salle-de-bain",
      },
      {
        text: "Appartements",
        href: "/renovation-habitat/appartements",
      },
      {
        text: "Cuisine",
        href: "/renovation-habitat/cuisine",
      },
      {
        text: "Combles",
        href: "/renovation-habitat/combles",
      },
      {
        text: "Maison",
        href: "/renovation-habitat/maison",
      }
    ]
  },
  { text: "Nos réalisations", href: "/realisations" },
  { text: "Blog", href: "/blog" },
  { text: "Contact", href: "/contact" }
];

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'py-4 bg-white/90 backdrop-blur-md shadow-lg' 
          : 'py-6 bg-white'}
      `}
    >
      <nav className="
        container mx-auto px-6 
        flex items-center justify-between
        max-w-7xl
      ">
        <Link 
          to="/" 
          className="
            relative group
            transition-transform duration-300 
            hover:scale-105
          "
        >
          <div className="
            absolute -inset-2 rounded-lg 
            bg-orange-100/50 opacity-0 
            group-hover:opacity-100 
            transition-opacity duration-300
          "/>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4202e4c47fe3ebc476b411f2fdcc940c014bb404ad211d7162c328eadb7759"
            alt="Remake Logo"
            className="relative h-10 w-auto object-contain"
          />
        </Link>

        <div className="
          flex items-center gap-8
          text-base font-medium
        ">
          {navigationItems.map((item, index) => (
            item.submenu ? (
              <Menu as="div" className="relative" key={index}>
                <Menu.Button className={`
                  flex items-center gap-1 px-1 py-2
                  text-gray-700 hover:text-orange-500
                  transition-colors duration-200
                  ${isScrolled ? 'text-gray-900' : ''}
                `}>
                  {item.text}
                  <ChevronDownIcon className="h-4 w-4" />
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="
                    absolute right-0 mt-2 w-56
                    origin-top-right rounded-lg
                    bg-white shadow-lg ring-1 ring-black ring-opacity-5
                    focus:outline-none
                    py-2
                  ">
                    {item.submenu.map((subItem, subIndex) => (
                      <Menu.Item key={subIndex}>
                        {({ active }) => (
                          <Link
                            to={subItem.href}
                            className={`
                              block px-4 py-2 text-sm
                              ${active ? 'bg-orange-50 text-orange-500' : 'text-gray-700'}
                            `}
                          >
                            {subItem.text}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link
                key={index}
                to={item.href || '#'}
                className={`
                  px-1 py-2
                  text-gray-700 hover:text-orange-500
                  transition-colors duration-200
                  ${isScrolled ? 'text-gray-900' : ''}
                `}
              >
                {item.text}
              </Link>
            )
          ))}
        </div>
      </nav>
    </header>
  );
}
