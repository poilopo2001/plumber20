import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "./projectsData";

export const RecentProjects: React.FC = () => {
  const handleDiscover = () => {
    // Handle discover action
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-indigo-950">
        <div className="absolute inset-0 opacity-5" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
             }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Header */}
        <div className="flex flex-col items-start mb-16 max-w-3xl">
          <h2 className="relative text-base font-bold tracking-wider leading-none uppercase text-orange-400 pl-16 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-12 before:h-[2px] before:bg-orange-400">
            Réalisations récentes
          </h2>
          <h3 className="mt-6 text-4xl font-medium text-white leading-tight">
            Nos projets de rénovation
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`
                ${index === projectsData.length - 1 && projectsData.length % 3 === 1 ? 'md:col-span-2 lg:col-span-1 lg:mx-auto lg:w-full' : ''}
                transform transition-all duration-500 hover:z-10 hover:scale-105
              `}
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <ProjectCard {...project} onDiscover={handleDiscover} />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-16">
          <button className="group relative px-8 py-4 text-sm font-bold leading-relaxed text-white uppercase bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-lg transition-all duration-300 hover:shadow-orange-400/20 hover:shadow-2xl">
            <span className="relative z-10 flex items-center gap-3 transition-transform duration-300 group-hover:gap-5">
              Voir tous nos projets
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </button>
        </div>
      </div>
    </section>
  );
};
