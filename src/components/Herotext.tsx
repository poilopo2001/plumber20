import * as React from "react";
import { HeroTextProps } from "./types";

export const HeroText: React.FC<HeroTextProps> = ({ title, subtitle, description, ctaText }) => {
  return (
    <section className="flex flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">
      <h2 className="ml-16 text-base font-bold tracking-wider leading-none text-orange-400 uppercase max-md:ml-2.5">
        {subtitle}
      </h2>
      <div className="flex shrink-0 mt-9 border-t-2 border-orange-400 h-[3px] w-[210px]" />
      <div className="flex flex-col items-start self-stretch pl-16 mt-5 font-medium max-md:pl-5 max-md:max-w-full">
        <h1 className="text-6xl leading-[67px] text-indigo-950 max-md:text-4xl max-md:leading-[54px]">
          {title}
        </h1>
        <p className="self-stretch mt-4 text-lg leading-8 text-indigo-950 text-opacity-70 max-md:max-w-full">
          {description.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <button className="px-4 py-4 mt-11 text-sm font-bold leading-relaxed text-white uppercase bg-orange-400 tracking-[2px] max-md:mt-10">
          {ctaText}
        </button>
      </div>
    </section>
  );
};