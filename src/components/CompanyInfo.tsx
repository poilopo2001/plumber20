import * as React from "react";
import { CompanyInfoProps } from "./types";

export const CompanyInfo: React.FC<CompanyInfoProps> = ({ companyName, groupName }) => (
  <div className="flex flex-col leading-relaxed">
    <p className="text-slate-500">{companyName}</p>
    <p className="self-start mt-1.5 font-bold text-neutral-400">{groupName}</p>
  </div>
);
