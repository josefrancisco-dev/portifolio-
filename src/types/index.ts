export interface Skill {
  icon: string;
  name: string;
  featured?: boolean;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  demoUrl: string;
  codeUrl: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  alignRight?: boolean;
}

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
}
