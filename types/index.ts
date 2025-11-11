export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  metric?: string;
}

export interface Package {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export interface IndustryCard {
  title: string;
  description: string;
  href: string;
  slug: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  category: string;
  tags: string[];
  readTime: number;
  content: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  businessName: string;
  message: string;
  honeypot?: string;
}

export interface NewsletterFormData {
  email: string;
  honeypot?: string;
}

// Analytics
export interface GAEvent {
  event: string;
  [key: string]: any;
}

// SEO Schema Types
export interface ServiceSchemaData {
  name: string;
  description: string;
  provider: string;
  areaServed: string[];
  priceRange?: string;
}

export interface OrganizationSchemaData {
  name: string;
  description: string;
  url: string;
  logo: string;
  telephone: string;
  email: string;
  address: {
    city: string;
    state: string;
    postalCode?: string;
  };
}

