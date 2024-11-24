'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaChevronRight } from 'react-icons/fa';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean);
    return paths.map((path, index) => {
      const label = path
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
      const url = `/${paths.slice(0, index + 1).join('/')}`;
      return { label, path: url };
    });
  };

  const breadcrumbs = generateBreadcrumbs();

  // Generate Schema.org BreadcrumbList markup
  const generateSchemaMarkup = () => {
    const itemListElement = [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://depannage-luxembourg.com",
          "name": "Accueil"
        }
      },
      ...breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "item": {
          "@id": `https://depannage-luxembourg.com${item.path}`,
          "name": item.label
        }
      }))
    ];

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    };
  };

  return (
    <>
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchemaMarkup()) }}
      />

      {/* Visual breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-100 py-2 px-4 mb-6">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          <li>
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <FaHome className="h-4 w-4" />
              <span>Accueil</span>
            </Link>
          </li>

          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              <FaChevronRight className="h-3 w-3 text-gray-400" />
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-600" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
