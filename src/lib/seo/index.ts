// Types
export type { SEOConfig, PageSEO, KeywordStrategy, ServiceKeywordStrategy, UseSEOReturn } from './types';

// Constants
export { 
  DEFAULT_SEO, 
  PAGE_SEO_CONFIGS, 
  INDUSTRY_KEYWORDS,
  SERVICE_KEYWORDS,
  LOCATION_KEYWORDS,
  ORGANIZATION_SCHEMA, 
  SERVICE_SCHEMA,
  LOCAL_BUSINESS_SCHEMA,
  SEO_UTILS,
  SEO_VALIDATION,
  META_PATTERNS
} from './constants';

// Hooks and utilities
export { 
  useSEO, 
  usePageSEO, 
  generateCanonicalUrl, 
  validateMetaDescription, 
  validateTitle,
  validateKeywords,
  formatPageTitle,
  getPageSEOConfig 
} from './useSEO';

// Components
export { SEO } from '../../components/SEO';