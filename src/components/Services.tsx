import * as React from 'react';
import { ServicesLayout } from './ServicesLayout';
import { ServicesSection } from './ServicesSection';
import { ServiceItem } from './types';

const serviceItems: ServiceItem[] = [
  { 
    text: "Analyse du besoin, des envies, de la faisabilité et conseils",
    icon: "📋"
  },
  { 
    text: "Conception, design et réalisation de plans 2D et 3D", 
    indent: true,
    icon: "✏️"
  },
  { 
    text: "Sélection d'artisans de qualité pour la réalisation des travaux et<br />négociations tarifaires", 
    indent: true, 
    multiline: true,
    icon: "👥"
  },
  { 
    text: "Etablissement d'un devis global intégrant tous les corps de métiers,<br />ainsi que d'un planning prévisionnel", 
    indent: true, 
    multiline: true,
    icon: "📊"
  },
  { 
    text: "Coordination des différents corps de métiers sur le chantier de<br />rénovation", 
    indent: true, 
    multiline: true,
    icon: "🔄"
  },
  { 
    text: "Pilotage et contrôle de la bonne exécution des travaux", 
    indent: true,
    icon: "🎯"
  },
  { 
    text: "Livraison clés en main", 
    indent: true,
    icon: "🔑"
  },
  { 
    text: "Service après-vente", 
    indent: true,
    icon: "🛠️"
  }
];

export const Services: React.FC = () => {
  return (
    <ServicesLayout>
      <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
        <figure className="group relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] max-md:mt-8 max-md:max-w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b65cc8e71fc7be0676a8c5fde17e0f26889e67afe9b602976e8e87ad7a200ebf?placeholderIfAbsent=true&apiKey=8e3eec33f1de45b4aa64d6845394587e"
            alt="Services illustration"
            className="w-full object-cover aspect-[1.5] transform transition-transform duration-700 group-hover:scale-105"
          />
        </figure>
      </div>
      <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
        <ServicesSection
          title="Nos services"
          subtitle="Nous vous accompagnons de A à Z"
          services={serviceItems}
          ctaText="DÉCOUVREZ nos services"
        />
      </div>
    </ServicesLayout>
  );
};
