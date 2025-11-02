import type { ReactElement } from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  icon: ReactElement;
  name: string;
  description: string;
  link: string;
}

export interface CaseStudy {
  client: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  label?: string;
  description: string;
  features: string[];
  cta: string;
  ctaPath: string;
  primary?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
    category: string;
    questions: {
        question: string;
        answer: string;
    }[];
}