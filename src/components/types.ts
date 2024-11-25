export interface HeroTextProps {
  title: string;
  subtitle: string;
  description: string[];
  ctaText: string;
}

export interface ServiceItem {
  text: string;
  indent?: boolean;
  multiline?: boolean;
  icon?: string;
}

export interface ServiceSectionProps {
  title: string;
  subtitle: string;
  services: ServiceItem[];
  ctaText: string;
}

export interface ProjectsData {
  location: string;
  title: string[];
  description: string[];
  image?: string;
}

export interface ProjectCardProps extends ProjectsData {
  onDiscover: () => void;
}

export interface InputFieldProps {
  placeholder: string;
  type?: string;
  id: string;
  required?: boolean;
}

export interface FileUploadProps {
  maxFiles: number;
}

export interface CheckboxProps {
  label: string;
  required?: boolean;
  id: string;
}

export interface FooterLinkProps {
  text: string;
}

export interface CompanyInfoProps {
  companyName: string;
  groupName: string;
}

export interface FooterProps {
  copyright: string;
  links: FooterLinkProps[];
  companyInfo: CompanyInfoProps;
  logoSrc: string;
}

export interface NavigationItem {
  text: string;
  href?: string;
  submenu?: {
    text: string;
    href: string;
  }[];
}
