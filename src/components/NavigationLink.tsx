import * as React from "react";
import { NavigationLinkProps } from "./types";

export function NavigationLink({ text, isScrolled }: NavigationLinkProps) {
  return (
    <a 
      href={`#${text.toLowerCase().replace(/\s+/g, '-')}`} 
      className={`
        relative
        ${text === "Contact" 
          ? `
            px-6 py-2.5
            text-white
            bg-gradient-to-r from-orange-400 to-orange-500
            hover:from-orange-500 hover:to-orange-600
            rounded-full shadow-md
            hover:shadow-lg
            transform hover:-translate-y-0.5
            transition-all duration-300
          `
          : `
            text-indigo-950
            hover:text-orange-400
            after:content-['']
            after:absolute
            after:w-0
            after:h-0.5
            after:bottom-[-3px]
            after:left-0
            after:bg-orange-400
            after:transition-all
            after:duration-300
            hover:after:w-full
            ${isScrolled ? 'after:bg-orange-400' : 'after:bg-orange-400'}
          `
        }
        transition-all duration-300
      `}
    >
      {text}
    </a>
  );
}
