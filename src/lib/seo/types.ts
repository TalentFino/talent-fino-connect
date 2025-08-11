export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export interface PageSEO {
  page: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  h2s: string[];
  focusKeywords: {
    primary: string;
    secondary: string[];
    longTail: string[];
  };
  ogImage?: string;
  structuredData?: {
    "@context": string;
    "@type": string;
    [key: string]: any;
  };
}

export interface KeywordStrategy {
  industry: string;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  longTailKeywords: string[];
  searchVolume?: number;
  competition?: 'low' | 'medium' | 'high';
}

export interface ServiceKeywordStrategy {
  primaryKeywords: string[];
  secondaryKeywords: string[];
  longTailKeywords: string[];
}

export interface UseSEOReturn {
  updateSEO: (config: SEOConfig) => void;
  currentSEO: SEOConfig;
}