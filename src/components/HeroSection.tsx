import * as React from "react";
import { HeroContent } from "./HeroContent";

interface HeroSectionProps {
  logoSrc: string;
  title: string;
  description: string;
}

export function HeroSection({ logoSrc, title, description }: HeroSectionProps) {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-48 w-full text-center bg-indigo-950 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <HeroContent 
        logoSrc={logoSrc}
        title={title}
        description={description}
      />
    </section>
  );
}
