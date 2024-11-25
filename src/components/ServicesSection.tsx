import * as React from 'react';
import { ServiceList } from './ServiceList';
import { ServiceSectionProps } from './types';

export const ServicesSection: React.FC<ServiceSectionProps> = ({
  title,
  subtitle,
  services,
  ctaText
}) => {
  return (
    <section className="flex flex-col grow items-start mt-10 max-md:mt-10 max-md:max-w-full">
      <h2 className="relative ml-16 text-base font-bold tracking-wider leading-none text-orange-400 uppercase max-md:ml-2.5 before:content-[''] before:absolute before:-left-16 before:top-1/2 before:-translate-y-1/2 before:w-12 before:h-[2px] before:bg-orange-400">
        {title}
      </h2>
      
      <div className="flex flex-col items-start self-stretch pl-16 mt-11 text-lg font-medium leading-none max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <h3 className="self-stretch mr-10 text-4xl font-bold leading-snug text-indigo-950 transition-colors duration-300 hover:text-indigo-900 max-md:mr-2.5 max-md:max-w-full">
          {subtitle}
        </h3>
        
        <ServiceList services={services} />
        
        <button className="group relative px-6 py-4 mt-14 text-sm font-bold leading-relaxed text-white uppercase bg-gradient-to-r from-orange-400 to-orange-500 tracking-[2px] overflow-hidden rounded shadow-lg transition-all duration-300 hover:shadow-orange-300/30 hover:shadow-xl max-md:mt-10">
          <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
            {ctaText}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
        </button>
      </div>
    </section>
  );
};
