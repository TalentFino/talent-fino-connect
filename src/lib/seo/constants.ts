import { PageSEO, KeywordStrategy } from './types';
import { 
  ORGANIZATION_SCHEMA as ORG_SCHEMA, 
  WEBSITE_SCHEMA, 
  LOCAL_BUSINESS_SCHEMA as LOCAL_SCHEMA,
  DIRECT_STAFFING_SERVICE,
  EXECUTIVE_SEARCH_SERVICE,
  CONTRACT_STAFFING_SERVICE,
  RESUME_SOURCING_SERVICE,
  MANUFACTURING_RECRUITMENT_SERVICE,
  HEALTHCARE_STAFFING_SERVICE,
  AUTOMOTIVE_RECRUITMENT_SERVICE,
  AEROSPACE_STAFFING_SERVICE,
  SCHEMA_UTILS
} from './schemas';

// Default SEO configuration
export const DEFAULT_SEO = {
  title: 'Talent Fino - Where Talent Meets Excellence',
  description: 'Global recruitment solutions and staffing services. Expert talent acquisition across manufacturing, healthcare, automotive, and aerospace industries.',
  keywords: ['recruitment services', 'staffing solutions', 'talent acquisition', 'global recruitment', 'executive search'],
  ogImage: '/og-images/default-og.jpg',
};

// Page-specific SEO configurations
export const PAGE_SEO_CONFIGS: Record<string, PageSEO> = {
  home: {
    page: 'home',
    title: 'Talent Fino - Global Recruitment Solutions | Where Talent Meets Excellence',
    description: 'Leading global recruitment and staffing solutions. Expert talent acquisition services across manufacturing, healthcare, automotive, and aerospace industries.',
    keywords: ['recruitment services', 'staffing solutions', 'executive search', 'talent acquisition', 'global recruitment'],
    h1: 'Where Talent Meets Excellence',
    h2s: ['Our Services', 'Industries We Serve', 'Why Choose Talent Fino'],
    focusKeywords: {
      primary: 'recruitment services',
      secondary: ['staffing solutions', 'talent acquisition', 'executive search'],
      longTail: ['global recruitment solutions', 'professional staffing services', 'executive search services']
    },
    ogImage: '/og-images/home-og.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        ORG_SCHEMA,
        WEBSITE_SCHEMA
      ]
    }
  },
  services: {
    page: 'services',
    title: 'Professional Recruitment & Staffing Services | Talent Fino',
    description: 'Comprehensive recruitment services including direct staffing, executive search, contract staffing, and headhunting solutions for businesses worldwide.',
    keywords: ['direct staffing', 'executive search', 'headhunting', 'contract staffing', 'resume sourcing'],
    h1: 'Professional Recruitment & Staffing Services',
    h2s: ['Direct Staffing', 'Executive Search', 'Contract Staffing', 'Resume Sourcing'],
    focusKeywords: {
      primary: 'recruitment services',
      secondary: ['executive search', 'direct staffing', 'contract staffing'],
      longTail: ['professional headhunting services', 'executive search services', 'contract staffing solutions']
    },
    ogImage: '/og-images/services-og.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        ORG_SCHEMA,
        DIRECT_STAFFING_SERVICE,
        EXECUTIVE_SEARCH_SERVICE,
        CONTRACT_STAFFING_SERVICE,
        RESUME_SOURCING_SERVICE
      ]
    }
  },
  industries: {
    page: 'industries',
    title: 'Industry-Specific Recruitment | Manufacturing, Healthcare, Automotive | Talent Fino',
    description: 'Specialized recruitment services for manufacturing, healthcare, automotive, and aerospace industries. Expert talent acquisition tailored to your industry needs.',
    keywords: ['manufacturing recruitment', 'healthcare staffing', 'automotive recruitment', 'aerospace staffing'],
    h1: 'Industry-Specific Recruitment Solutions',
    h2s: ['Manufacturing', 'Healthcare', 'Automotive', 'Aerospace & Defense'],
    focusKeywords: {
      primary: 'industry recruitment',
      secondary: ['manufacturing recruitment', 'healthcare staffing', 'automotive recruitment'],
      longTail: ['manufacturing recruitment services', 'healthcare staffing solutions', 'automotive industry recruitment']
    },
    ogImage: '/og-images/industries-og.jpg'
  },
  about: {
    page: 'about',
    title: 'About Talent Fino - Expert Recruitment & Staffing Solutions',
    description: 'Learn about Talent Fino\'s expertise in global recruitment and staffing. Our team delivers exceptional talent acquisition services across multiple industries.',
    keywords: ['talent fino', 'recruitment expertise', 'staffing company', 'talent acquisition experts'],
    h1: 'About Talent Fino',
    h2s: ['Our Mission', 'Our Expertise', 'Our Team'],
    focusKeywords: {
      primary: 'recruitment expertise',
      secondary: ['staffing company', 'talent acquisition experts'],
      longTail: ['expert recruitment services', 'professional staffing company', 'talent acquisition specialists']
    },
    ogImage: '/og-images/about-og.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        ORG_SCHEMA,
        LOCAL_SCHEMA
      ]
    }
  },
  'case-studies': {
    page: 'case-studies',
    title: 'Recruitment Success Stories & Case Studies | Talent Fino',
    description: 'Explore our successful recruitment case studies and client success stories. See how Talent Fino delivers exceptional staffing solutions across industries.',
    keywords: ['recruitment case studies', 'staffing success stories', 'client testimonials', 'recruitment results'],
    h1: 'Success Stories & Case Studies',
    h2s: ['Client Success Stories', 'Industry Case Studies', 'Recruitment Results'],
    focusKeywords: {
      primary: 'recruitment case studies',
      secondary: ['staffing success stories', 'client testimonials'],
      longTail: ['successful recruitment case studies', 'staffing solution success stories']
    },
    ogImage: '/og-images/case-studies-og.jpg'
  },
  'learn-more': {
    page: 'learn-more',
    title: 'Learn More About Our Recruitment Services | Talent Fino',
    description: 'Discover more about Talent Fino\'s comprehensive recruitment and staffing services. Get detailed information about our processes and expertise.',
    keywords: ['recruitment information', 'staffing services details', 'talent acquisition process'],
    h1: 'Learn More About Our Services',
    h2s: ['Our Process', 'Service Details', 'Get Started'],
    focusKeywords: {
      primary: 'recruitment services',
      secondary: ['staffing services', 'talent acquisition process'],
      longTail: ['comprehensive recruitment services', 'detailed staffing solutions']
    },
    ogImage: '/og-images/learn-more-og.jpg'
  },
  careers: {
    page: 'careers',
    title: 'Careers - Join Our Team | Talent Fino',
    description: 'Explore exciting career opportunities at Talent Fino. Upload your CV and join our team of talented professionals across tech and business roles.',
    keywords: ['careers', 'jobs', 'recruitment careers', 'consulting jobs', 'tech careers', 'employment opportunities'],
    h1: 'Join Our Team',
    h2s: ['Submit Your Application', 'Career Opportunities', 'Work With Us'],
    focusKeywords: {
      primary: 'careers',
      secondary: ['jobs', 'consulting careers', 'employment opportunities'],
      longTail: ['consulting company careers', 'recruitment consulting jobs', 'career opportunities']
    },
    ogImage: '/og-images/careers-og.jpg'
  },
  'job-opportunities': {
    page: 'job-opportunities',
    title: 'Job Opportunities - Find Your Next Role | Talent Fino',
    description: 'Explore exciting job opportunities across multiple locations and industries. Upload your resume and let Talent Fino connect you with top employers.',
    keywords: ['job opportunities', 'employment', 'job placement', 'career opportunities', 'job openings', 'job search', 'resume submission'],
    h1: 'Find Your Next Opportunity',
    h2s: ['Featured Positions', 'Submit Your Resume', 'Open Positions'],
    focusKeywords: {
      primary: 'job opportunities',
      secondary: ['employment', 'job placement', 'career opportunities'],
      longTail: ['job opportunities multiple locations', 'career placement services', 'submit resume for jobs']
    },
    ogImage: '/og-images/job-opportunities-og.jpg'
  }
};

// Industry-specific SEO configurations for landing page optimization
export const INDUSTRY_SEO_CONFIGS: Record<string, PageSEO> = {
  manufacturing: {
    page: 'manufacturing',
    title: 'Manufacturing Recruitment Services | Industrial Staffing Solutions | Talent Fino',
    description: 'Expert manufacturing recruitment and industrial staffing solutions. We source skilled production workers, manufacturing engineers, and quality control specialists for lean manufacturing environments.',
    keywords: ['manufacturing recruitment', 'industrial staffing', 'production workers', 'manufacturing engineers', 'quality control jobs'],
    h1: 'Manufacturing Recruitment & Industrial Staffing Solutions',
    h2s: ['Production Staff Recruitment', 'Manufacturing Engineering Talent', 'Quality Control Specialists', 'Lean Manufacturing Staffing'],
    focusKeywords: {
      primary: 'manufacturing recruitment',
      secondary: ['industrial staffing', 'production workers', 'manufacturing engineers'],
      longTail: ['manufacturing recruitment services', 'industrial staffing solutions', 'lean manufacturing recruitment']
    },
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        ORG_SCHEMA,
        MANUFACTURING_RECRUITMENT_SERVICE
      ]
    }
  },
  healthcare: {
    page: 'healthcare',
    title: 'Healthcare Staffing Solutions | Medical Recruitment Services | Talent Fino',
    description: 'Comprehensive healthcare staffing and medical recruitment services. We place registered nurses, medical technicians, and clinical professionals with regulatory expertise.',
    keywords: ['healthcare staffing', 'medical recruitment', 'nursing jobs', 'clinical positions', 'healthcare professionals'],
    h1: 'Healthcare Staffing & Medical Recruitment Solutions',
    h2s: ['Nursing Staff Placement', 'Medical Technology Recruitment', 'Clinical Professional Staffing', 'Healthcare Compliance Specialists'],
    focusKeywords: {
      primary: 'healthcare staffing',
      secondary: ['medical recruitment', 'nursing jobs', 'clinical positions'],
      longTail: ['healthcare staffing solutions', 'medical recruitment services', 'nursing staff placement']
    },
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        ORG_SCHEMA,
        HEALTHCARE_STAFFING_SERVICE
      ]
    }
  },
  automotive: {
    page: 'automotive',
    title: 'Automotive Recruitment Services | Auto Industry Staffing | Talent Fino',
    description: 'Specialized automotive recruitment services for engineers, designers, technicians, and manufacturing professionals. Expert electric vehicle and automotive supply chain staffing.',
    keywords: ['automotive recruitment', 'automotive staffing', 'automotive engineers', 'electric vehicle recruitment', 'auto industry jobs'],
    h1: 'Automotive Industry Recruitment & Staffing Solutions',
    h2s: ['Automotive Engineering Recruitment', 'Electric Vehicle Staffing', 'Auto Manufacturing Jobs', 'Automotive Supply Chain Talent'],
    focusKeywords: {
      primary: 'automotive recruitment',
      secondary: ['automotive staffing', 'automotive engineers', 'electric vehicle recruitment'],
      longTail: ['automotive recruitment services', 'automotive industry staffing', 'electric vehicle recruitment services']
    },
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        ORG_SCHEMA,
        AUTOMOTIVE_RECRUITMENT_SERVICE
      ]
    }
  },
  aerospace: {
    page: 'aerospace',
    title: 'Aerospace Staffing Solutions | Aviation Recruitment Services | Talent Fino',
    description: 'Expert aerospace staffing and aviation recruitment for high-security, mission-critical roles. Specialized placement of aerospace engineers and defense contractors.',
    keywords: ['aerospace staffing', 'aviation recruitment', 'defense jobs', 'aerospace engineers', 'aviation professionals'],
    h1: 'Aerospace & Defense Recruitment Solutions',
    h2s: ['Aerospace Engineering Staffing', 'Aviation Professional Recruitment', 'Defense Contractor Placement', 'Flight Test Engineer Jobs'],
    focusKeywords: {
      primary: 'aerospace staffing',
      secondary: ['aviation recruitment', 'defense jobs', 'aerospace engineers'],
      longTail: ['aerospace staffing solutions', 'aviation recruitment services', 'defense contractor recruitment']
    },
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        ORG_SCHEMA,
        AEROSPACE_STAFFING_SERVICE
      ]
    }
  },
  finance: {
    page: 'finance',
    title: 'Financial Services Recruitment | Banking Staffing Solutions | Talent Fino',
    description: 'Expert finance recruitment and banking staffing solutions. We place financial analysts, investment professionals, compliance officers, and financial advisors.',
    keywords: ['finance recruitment', 'banking staffing', 'financial analysts', 'investment professionals', 'compliance officers'],
    h1: 'Financial Services Recruitment & Banking Staffing',
    h2s: ['Investment Banking Recruitment', 'Financial Analysis Staffing', 'Compliance Officer Placement', 'Banking Professional Jobs'],
    focusKeywords: {
      primary: 'finance recruitment',
      secondary: ['banking staffing', 'financial analysts', 'investment professionals'],
      longTail: ['finance recruitment services', 'banking staffing solutions', 'investment banking recruitment']
    },
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        ORG_SCHEMA,
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Financial Services Recruitment",
          "description": "Professional recruitment services for financial services and banking sectors",
          "provider": {
            "@type": "Organization",
            "name": "Talent Fino"
          },
          "serviceType": "Financial Services Recruitment",
          "areaServed": "Worldwide"
        }
      ]
    }
  }
};

// Industry-specific keyword strategies
export const INDUSTRY_KEYWORDS: Record<string, KeywordStrategy> = {
  manufacturing: {
    industry: 'manufacturing',
    primaryKeywords: ['manufacturing recruitment', 'industrial staffing', 'factory jobs', 'production recruitment'],
    secondaryKeywords: ['production staff', 'manufacturing talent', 'industrial workers', 'assembly line workers', 'quality control jobs'],
    longTailKeywords: [
      'manufacturing recruitment services',
      'industrial staffing solutions',
      'factory worker placement',
      'production line staffing',
      'manufacturing talent acquisition',
      'industrial recruitment specialists',
      'lean manufacturing recruitment'
    ],
    searchVolume: 8500,
    competition: 'medium'
  },
  healthcare: {
    industry: 'healthcare',
    primaryKeywords: ['healthcare staffing', 'medical recruitment', 'nursing jobs', 'healthcare jobs'],
    secondaryKeywords: ['healthcare professionals', 'medical staff', 'clinical positions', 'registered nurses', 'medical technicians'],
    longTailKeywords: [
      'healthcare staffing solutions',
      'medical recruitment services',
      'nursing staff placement',
      'healthcare talent acquisition',
      'clinical staffing services',
      'medical professional recruitment',
      'healthcare workforce solutions'
    ],
    searchVolume: 15200,
    competition: 'high'
  },
  automotive: {
    industry: 'automotive',
    primaryKeywords: ['automotive recruitment', 'automotive staffing', 'auto industry jobs', 'automotive careers'],
    secondaryKeywords: ['automotive engineers', 'auto technicians', 'automotive professionals', 'mechanical engineers', 'automotive designers'],
    longTailKeywords: [
      'automotive recruitment services',
      'automotive industry staffing',
      'auto sector talent acquisition',
      'automotive engineering recruitment',
      'automotive manufacturing jobs',
      'electric vehicle recruitment',
      'automotive supply chain staffing'
    ],
    searchVolume: 6800,
    competition: 'medium'
  },
  aerospace: {
    industry: 'aerospace',
    primaryKeywords: ['aerospace staffing', 'aviation recruitment', 'defense jobs', 'aerospace careers'],
    secondaryKeywords: ['aerospace engineers', 'aviation professionals', 'defense contractors', 'aircraft technicians', 'flight test engineers'],
    longTailKeywords: [
      'aerospace staffing solutions',
      'aviation recruitment services',
      'defense industry talent',
      'aerospace engineering recruitment',
      'aviation maintenance staffing',
      'defense contractor recruitment',
      'space industry careers'
    ],
    searchVolume: 3200,
    competition: 'low'
  },
  technology: {
    industry: 'technology',
    primaryKeywords: ['tech recruitment', 'IT staffing', 'software developer jobs', 'technology careers'],
    secondaryKeywords: ['software engineers', 'IT professionals', 'tech talent', 'developers', 'data scientists'],
    longTailKeywords: [
      'technology recruitment services',
      'IT staffing solutions',
      'software developer recruitment',
      'tech talent acquisition',
      'IT contractor staffing',
      'technology consulting recruitment'
    ],
    searchVolume: 12400,
    competition: 'high'
  },
  finance: {
    industry: 'finance',
    primaryKeywords: ['finance recruitment', 'financial services staffing', 'banking jobs', 'finance careers'],
    secondaryKeywords: ['financial analysts', 'accountants', 'investment professionals', 'banking professionals', 'financial advisors'],
    longTailKeywords: [
      'finance recruitment services',
      'financial services staffing solutions',
      'banking talent acquisition',
      'investment banking recruitment',
      'accounting staffing services',
      'financial planning recruitment'
    ],
    searchVolume: 9600,
    competition: 'medium'
  }
};

// Service-specific keyword strategies
export const SERVICE_KEYWORDS = {
  directStaffing: {
    primaryKeywords: ['direct staffing', 'permanent placement', 'direct hire', 'full-time recruitment'],
    secondaryKeywords: ['permanent staffing', 'direct placement services', 'full-time positions'],
    longTailKeywords: ['direct staffing solutions', 'permanent placement services', 'direct hire recruitment']
  },
  executiveSearch: {
    primaryKeywords: ['executive search', 'executive recruitment', 'headhunting', 'C-level recruitment'],
    secondaryKeywords: ['senior executive search', 'leadership recruitment', 'executive headhunting'],
    longTailKeywords: ['executive search services', 'senior leadership recruitment', 'C-suite headhunting']
  },
  contractStaffing: {
    primaryKeywords: ['contract staffing', 'temporary staffing', 'contract recruitment', 'interim staffing'],
    secondaryKeywords: ['contract workers', 'temporary employees', 'project-based staffing'],
    longTailKeywords: ['contract staffing solutions', 'temporary workforce management', 'project staffing services']
  },
  resumeSourcing: {
    primaryKeywords: ['resume sourcing', 'candidate sourcing', 'talent sourcing', 'recruitment sourcing'],
    secondaryKeywords: ['candidate database', 'talent pipeline', 'resume screening'],
    longTailKeywords: ['professional resume sourcing', 'candidate sourcing services', 'talent pipeline development']
  }
};

// Location-based keywords (if applicable)
export const LOCATION_KEYWORDS = {
  global: ['global recruitment', 'international staffing', 'worldwide talent acquisition'],
  northAmerica: ['North American recruitment', 'US staffing services', 'Canadian recruitment'],
  europe: ['European recruitment', 'EU staffing solutions', 'European talent acquisition'],
  asiaPacific: ['Asia Pacific recruitment', 'APAC staffing', 'Asian talent acquisition']
};

// Common structured data schemas
export const ORGANIZATION_SCHEMA = ORG_SCHEMA;

export const SERVICE_SCHEMA = DIRECT_STAFFING_SERVICE;

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Talent Fino",
  "description": "Professional recruitment and staffing services",
  "url": "https://talentfino.com",
  "telephone": "+1-800-TALENT",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-18:00",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "geoRadius": "50000"
  }
};

// SEO utility functions for keyword management
export const SEO_UTILS = {
  // Get keywords for a specific industry
  getIndustryKeywords: (industry: string): string[] => {
    const industryData = INDUSTRY_KEYWORDS[industry];
    if (!industryData) return [];
    
    return [
      ...industryData.primaryKeywords,
      ...industryData.secondaryKeywords,
      ...industryData.longTailKeywords.slice(0, 3) // Limit long-tail keywords
    ];
  },

  // Get keywords for a specific service
  getServiceKeywords: (service: keyof typeof SERVICE_KEYWORDS): string[] => {
    const serviceData = SERVICE_KEYWORDS[service];
    if (!serviceData) return [];
    
    return [
      ...serviceData.primaryKeywords,
      ...serviceData.secondaryKeywords,
      ...serviceData.longTailKeywords
    ];
  },

  // Combine keywords for industry + service pages
  getCombinedKeywords: (industry: string, service?: keyof typeof SERVICE_KEYWORDS): string[] => {
    const industryKeywords = SEO_UTILS.getIndustryKeywords(industry);
    const serviceKeywords = service ? SEO_UTILS.getServiceKeywords(service) : [];
    
    return [...new Set([...industryKeywords, ...serviceKeywords])]; // Remove duplicates
  },

  // Generate meta description with keywords
  generateMetaDescription: (basePage: string, industry?: string, service?: string): string => {
    const baseDescriptions = {
      home: "Leading global recruitment and staffing solutions. Expert talent acquisition services across multiple industries.",
      services: "Comprehensive recruitment services including direct staffing, executive search, and contract staffing solutions.",
      industries: "Specialized recruitment services tailored to your industry needs with expert talent acquisition.",
      about: "Learn about our expertise in global recruitment and staffing with proven results across industries."
    };

    let description = baseDescriptions[basePage as keyof typeof baseDescriptions] || baseDescriptions.home;
    
    if (industry && INDUSTRY_KEYWORDS[industry]) {
      description += ` Specializing in ${industry} recruitment and staffing solutions.`;
    }
    
    if (service && SERVICE_KEYWORDS[service]) {
      description += ` Expert ${service.replace(/([A-Z])/g, ' $1').toLowerCase()} services.`;
    }
    
    return description + " Where talent meets excellence.";
  },

  // Get industry-specific SEO configuration
  getIndustrySEOConfig: (industryId: string): PageSEO | null => {
    return INDUSTRY_SEO_CONFIGS[industryId] || null;
  },

  // Generate cross-linking keywords for related industries
  generateCrossLinkingKeywords: (primaryIndustry: string, relatedIndustries: string[]): string[] => {
    const crossLinkKeywords: string[] = [];
    
    relatedIndustries.forEach(relatedId => {
      const relatedConfig = INDUSTRY_SEO_CONFIGS[relatedId];
      if (relatedConfig) {
        // Add cross-linking keywords like "manufacturing and automotive recruitment"
        crossLinkKeywords.push(`${primaryIndustry} and ${relatedId} recruitment`);
        crossLinkKeywords.push(`${primaryIndustry} to ${relatedId} staffing solutions`);
      }
    });
    
    return crossLinkKeywords;
  },

  // Generate industry-specific structured data
  generateIndustryStructuredData: (industryId: string, additionalData?: object) => {
    const baseConfig = INDUSTRY_SEO_CONFIGS[industryId];
    if (!baseConfig || !baseConfig.structuredData) return null;

    return {
      ...baseConfig.structuredData,
      ...additionalData,
      "dateModified": new Date().toISOString(),
      "offers": {
        "@type": "Offer",
        "description": `Professional ${industryId} recruitment and staffing services`,
        "areaServed": "Worldwide"
      }
    };
  },

  // Generate page-specific structured data using comprehensive schemas
  generatePageStructuredData: (pageType: 'home' | 'services' | 'industries' | 'about', additionalSchemas: object[] = []) => {
    const baseSchemas = {
      home: [ORG_SCHEMA, WEBSITE_SCHEMA],
      services: [ORG_SCHEMA, DIRECT_STAFFING_SERVICE, EXECUTIVE_SEARCH_SERVICE, CONTRACT_STAFFING_SERVICE, RESUME_SOURCING_SERVICE],
      industries: [ORG_SCHEMA, MANUFACTURING_RECRUITMENT_SERVICE, HEALTHCARE_STAFFING_SERVICE, AUTOMOTIVE_RECRUITMENT_SERVICE, AEROSPACE_STAFFING_SERVICE],
      about: [ORG_SCHEMA, LOCAL_SCHEMA]
    };

    const schemas = baseSchemas[pageType] || [ORG_SCHEMA];
    return {
      "@context": "https://schema.org",
      "@graph": [...schemas, ...additionalSchemas]
    };
  },

  // Get service-specific structured data
  getServiceStructuredData: (serviceType: 'direct-staffing' | 'executive-search' | 'contract-staffing' | 'resume-sourcing') => {
    const schemas = {
      'direct-staffing': DIRECT_STAFFING_SERVICE,
      'executive-search': EXECUTIVE_SEARCH_SERVICE,
      'contract-staffing': CONTRACT_STAFFING_SERVICE,
      'resume-sourcing': RESUME_SOURCING_SERVICE
    };
    return schemas[serviceType];
  },

  // Get industry-specific structured data
  getIndustryStructuredData: (industryType: 'manufacturing' | 'healthcare' | 'automotive' | 'aerospace') => {
    const schemas = {
      'manufacturing': MANUFACTURING_RECRUITMENT_SERVICE,
      'healthcare': HEALTHCARE_STAFFING_SERVICE,
      'automotive': AUTOMOTIVE_RECRUITMENT_SERVICE,
      'aerospace': AEROSPACE_STAFFING_SERVICE
    };
    return schemas[industryType];
  }
};

// Meta tag validation constants
export const SEO_VALIDATION = {
  TITLE_MIN_LENGTH: 30,
  TITLE_MAX_LENGTH: 60,
  DESCRIPTION_MIN_LENGTH: 120,
  DESCRIPTION_MAX_LENGTH: 160,
  KEYWORDS_MAX_COUNT: 10,
  KEYWORDS_MIN_COUNT: 3
};

// Common meta tag patterns
export const META_PATTERNS = {
  TITLE_SUFFIX: " | Talent Fino",
  BRAND_TAGLINE: "Where Talent Meets Excellence",
  DEFAULT_SEPARATOR: " - ",
  KEYWORD_SEPARATOR: ", "
};
// Export comprehensive structured data schemas
export { 
  ORGANIZATION_SCHEMA as COMPREHENSIVE_ORG_SCHEMA,
  WEBSITE_SCHEMA,
  DIRECT_STAFFING_SERVICE,
  EXECUTIVE_SEARCH_SERVICE,
  CONTRACT_STAFFING_SERVICE,
  RESUME_SOURCING_SERVICE,
  MANUFACTURING_RECRUITMENT_SERVICE,
  HEALTHCARE_STAFFING_SERVICE,
  AUTOMOTIVE_RECRUITMENT_SERVICE,
  AEROSPACE_STAFFING_SERVICE,
  LOCAL_BUSINESS_SCHEMA as COMPREHENSIVE_LOCAL_BUSINESS_SCHEMA,
  CONTACT_POINT_SCHEMAS,
  generateBreadcrumbSchema,
  generateCombinedSchema,
  SCHEMA_UTILS as COMPREHENSIVE_SCHEMA_UTILS
} from './schemas';