import { useState, useEffect } from 'react';
import { SEOConfig, UseSEOReturn, PageSEO } from './types';
import { DEFAULT_SEO, PAGE_SEO_CONFIGS, SEO_VALIDATION, META_PATTERNS } from './constants';

export const useSEO = (initialConfig?: Partial<SEOConfig>): UseSEOReturn => {
  const [currentSEO, setCurrentSEO] = useState<SEOConfig>({
    ...DEFAULT_SEO,
    ...initialConfig,
  });

  const updateSEO = (config: Partial<SEOConfig>) => {
    setCurrentSEO(prev => ({
      ...prev,
      ...config,
    }));
  };

  return {
    updateSEO,
    currentSEO,
  };
};

// Hook for page-specific SEO configuration
export const usePageSEO = (pageName: string): UseSEOReturn => {
  const pageConfig = PAGE_SEO_CONFIGS[pageName];
  
  const initialConfig: SEOConfig = pageConfig ? {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    ogImage: pageConfig.ogImage,
    structuredData: pageConfig.structuredData,
  } : DEFAULT_SEO;

  return useSEO(initialConfig);
};

// Utility function to generate canonical URL
export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : 'https://talentfino.com';
  
  // Clean up the path
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Remove trailing slash except for root
  const finalPath = cleanPath === '/' ? cleanPath : cleanPath.replace(/\/$/, '');
  
  return `${baseUrl}${finalPath}`;
};

// Utility function to get current page path for canonical URL
export const getCurrentPagePath = (): string => {
  if (typeof window === 'undefined') return '/';
  return window.location.pathname;
};

// Utility function to validate meta description length
export const validateMetaDescription = (description: string): boolean => {
  return description.length >= SEO_VALIDATION.DESCRIPTION_MIN_LENGTH && 
         description.length <= SEO_VALIDATION.DESCRIPTION_MAX_LENGTH;
};

// Utility function to validate title length
export const validateTitle = (title: string): boolean => {
  return title.length >= SEO_VALIDATION.TITLE_MIN_LENGTH && 
         title.length <= SEO_VALIDATION.TITLE_MAX_LENGTH;
};

// Utility function to validate keywords count
export const validateKeywords = (keywords: string[]): boolean => {
  return keywords.length >= SEO_VALIDATION.KEYWORDS_MIN_COUNT && 
         keywords.length <= SEO_VALIDATION.KEYWORDS_MAX_COUNT;
};

// Utility function to format page title with brand
export const formatPageTitle = (title: string, includeBrand: boolean = true): string => {
  if (includeBrand && !title.includes('Talent Fino')) {
    return title + META_PATTERNS.TITLE_SUFFIX;
  }
  return title;
};

// Utility function to get page SEO config
export const getPageSEOConfig = (pageName: string): PageSEO | null => {
  return PAGE_SEO_CONFIGS[pageName] || null;
};

// Utility function to generate absolute URL for Open Graph images
export const generateAbsoluteImageUrl = (imagePath: string): string => {
  const baseUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : 'https://talentfino.com';
  
  if (imagePath.startsWith('http')) {
    return imagePath; // Already absolute
  }
  
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${baseUrl}${cleanPath}`;
};

// Utility function to validate Open Graph image requirements
export const validateOpenGraphImage = (imageUrl: string): boolean => {
  // Basic validation - in production, you might want to check actual image dimensions
  return imageUrl.length > 0 && (
    imageUrl.includes('.jpg') || 
    imageUrl.includes('.jpeg') || 
    imageUrl.includes('.png') || 
    imageUrl.includes('.webp')
  );
};

// Utility function to get page-specific Open Graph image
export const getPageOpenGraphImage = (pageName: string): string => {
  const pageConfig = getPageSEOConfig(pageName);
  if (pageConfig?.ogImage) {
    return generateAbsoluteImageUrl(pageConfig.ogImage);
  }
  return generateAbsoluteImageUrl(DEFAULT_SEO.ogImage);
};