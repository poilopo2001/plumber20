import * as React from "react";
import { FooterLink } from "./FooterLink";
import { CompanyInfo } from "./CompanyInfo";
import { FooterProps } from "./types";

export const Footer: React.FC<FooterProps> = ({ copyright, links, companyInfo, logoSrc }) => {
  return (
    <footer className="flex flex-col justify-center items-center px-16 py-3 w-full text-sm leading-6 bg-slate-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start max-w-full w-[975px]">
        <p className="grow shrink text-slate-500 w-[101px]">{copyright}</p>
        {links.map((link, index) => (
          <FooterLink key={index} text={link.text} />
        ))}
        <CompanyInfo 
          companyName={companyInfo.companyName} 
          groupName={companyInfo.groupName} 
        />
        <img
          loading="lazy"
          src={logoSrc}
          alt=""
          className="object-contain shrink-0 w-4 aspect-[0.84]"
        />
      </div>
    </footer>
  );
};
