export interface NavItem {
  label: string;
  id: string;
}

export interface ServiceFeature {
  title: string;
  text: string;
}

export interface ServiceLevel {
  id: number;
  level: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string; // For the specific page
  price: string;
  image: string;
  features: string[]; // Short list for card
  
  // Detailed page content
  forWhom: string[];
  whatIsInside: ServiceFeature[];
  results: string[];
  ctaText: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  text: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  PROBLEMS = 'problems',
  SERVICES = 'services',
  REVIEWS = 'reviews',
  FAQ = 'faq',
  ARTICLES = 'articles',
  CONTACTS = 'contacts'
}

export interface ArticleSection {
  type: 'text' | 'quote' | 'list';
  content: string | string[];
}

export interface Article {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  readTime: string;
  content: ArticleSection[];
  cta: {
    text: string;
    action: string;
  };
}
