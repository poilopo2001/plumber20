import * as React from "react";
import { FooterLinkProps } from "./types";

export const FooterLink: React.FC<FooterLinkProps> = ({ text }) => (
  <p className="text-slate-500">{text}</p>
);
