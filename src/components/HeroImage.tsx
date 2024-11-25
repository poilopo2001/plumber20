import * as React from "react";

interface HeroImageProps {
  src: string;
  alt: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return (
    <div className="flex flex-col items-stretch max-md:max-w-full">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="w-full aspect-[1.23] max-md:max-w-full"
      />
    </div>
  );
};