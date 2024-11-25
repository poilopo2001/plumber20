import * as React from "react";

interface HeroContentProps {
  logoSrc: string;
  title: string;
  description: string;
}

export function HeroContent({ logoSrc, title, description }: HeroContentProps) {
  return (
    <article className="flex flex-col mb-0 max-w-full w-[614px] max-md:mb-2.5">
      <img
        loading="lazy"
        src={logoSrc}
        alt="Company Logo"
        className="object-contain self-center max-w-full aspect-[1.89] w-[168px]"
      />
      <h1 className="mt-7 text-4xl font-medium leading-none text-white max-md:max-w-full">
        {title}
      </h1>
      <p className="mt-2.5 mr-3 ml-3 text-base font-bold leading-7 text-white text-opacity-70 max-md:mr-2.5 max-md:max-w-full">
        {description}
      </p>
    </article>
  );
}
