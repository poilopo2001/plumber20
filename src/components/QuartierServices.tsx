'use client';

import React from 'react';
import { FaWrench, FaShower, FaTools, FaSearch, FaBroom } from 'react-icons/fa';
import { GiWaterDrop, GiHeatHaze } from 'react-icons/gi';
import ServiceLink from '@/components/ServiceLink';

interface ServiceMetadata {
  description: string;
  category: string;
}

interface Service {
  slug: string;
  title: string;
  metadata: ServiceMetadata;
}

interface ServicesByCategory {
  [key: string]: Service[];
}

interface QuartierServicesProps {
  quartierId: string;
  servicesByCategory: ServicesByCategory;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Urgences':
      return <GiWaterDrop className="w-6 h-6 text-red-500" />;
    case 'Installation':
      return <FaWrench className="w-6 h-6 text-blue-500" />;
    case 'Réparation':
      return <FaTools className="w-6 h-6 text-green-500" />;
    case 'Débouchage':
      return <FaShower className="w-6 h-6 text-purple-500" />;
    case 'Détection':
      return <FaSearch className="w-6 h-6 text-yellow-500" />;
    case 'Entretien':
      return <FaBroom className="w-6 h-6 text-orange-500" />;
    default:
      return <GiHeatHaze className="w-6 h-6 text-gray-500" />;
  }
};

export default function QuartierServices({ quartierId, servicesByCategory }: QuartierServicesProps) {
  return (
    <>
      {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
        <div key={category} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            {getCategoryIcon(category)}
            <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryServices.map((service) => {
              const serviceSlug = service.slug.replace(`${quartierId}-`, '');
              return (
                <ServiceLink
                  key={service.slug}
                  href={`/quartiers/${quartierId}/${serviceSlug}`}
                  className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.metadata.description}</p>
                    <div className="flex items-center text-blue-600 font-medium">
                      En savoir plus
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </ServiceLink>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
