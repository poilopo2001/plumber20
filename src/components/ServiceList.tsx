import * as React from 'react';
import { ServiceItem } from './types';

interface ServiceListProps {
  services: ServiceItem[];
}

export const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="space-y-6 mt-8">
      {services.map((service, index) => (
        <div
          key={index}
          className={`group flex items-start gap-4 transition-all duration-300 hover:translate-x-2 ${
            service.indent ? 'ml-5' : ''
          }`}
        >
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl bg-orange-100 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-200">
            {service.icon}
          </span>
          <p className="text-indigo-950/70 leading-7 pt-1">
            {service.multiline ? (
              <>
                {service.text.split('<br />').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < service.text.split('<br />').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </>
            ) : (
              service.text
            )}
          </p>
        </div>
      ))}
    </div>
  );
};
