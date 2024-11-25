import * as React from "react";
import { ProjectCardProps } from "./types";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  location,
  title,
  description,
  onDiscover,
  image
}) => {
  return (
    <article className="group relative flex flex-col h-full min-h-[400px] text-white overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-950/20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
        style={{ backgroundImage: `url(${image || 'https://source.unsplash.com/random/800x600?renovation'})` }} 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-indigo-950/60 to-indigo-950/90 opacity-90 transition-opacity duration-300 group-hover:opacity-75" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8">
        <h3 className="flex items-center text-sm font-bold tracking-wider leading-none uppercase text-orange-400">
          <span className="w-8 h-[2px] bg-orange-400 mr-3 transition-all duration-300 group-hover:w-12" />
          {location}
        </h3>
        
        <h4 className="mt-4 text-2xl lg:text-3xl font-medium leading-tight transition-transform duration-300 group-hover:translate-x-2">
          {title.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h4>
        
        <div className="mt-4 space-y-2">
          {description.map((line, index) => (
            <p 
              key={index} 
              className="text-sm font-medium leading-relaxed text-white/80 transition-transform duration-300 group-hover:translate-x-2" 
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {line}
            </p>
          ))}
        </div>
        
        <button
          onClick={onDiscover}
          className="inline-flex items-center gap-3 mt-6 text-sm tracking-wider leading-relaxed text-orange-400 transition-all duration-300 group-hover:gap-5 focus:outline-none focus:text-orange-300"
          tabIndex={0}
        >
          <span className="font-bold uppercase">Découvrir le projet</span>
          <svg 
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
};
