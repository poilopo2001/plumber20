import * as React from "react";
import { Footer } from "./Footer";

export const FooterContainer: React.FC = () => {
  const footerData = {
    copyright: "© Remake 2023",
    links: [
      { text: "Politique de confidentialité\nMentions légales" }
    ],
    companyInfo: {
      companyName: "Remake est une société du groupe",
      groupName: "Reckinger Alfred"
    },
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/587fb6dc71840ac26fbdc7dc993b8a77cd97333a0ade72d428b226edd9b0ad2c?placeholderIfAbsent=true&apiKey=8e3eec33f1de45b4aa64d6845394587e"
  };

  return <Footer {...footerData} />;
};
