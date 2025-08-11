// Schema.org structured data types
interface SchemaBase {
  "@context": string;
  "@type": string;
}

interface Organization extends SchemaBase {
  "@type": "Organization";
  name: string;
  alternateName?: string;
  legalName?: string;
  description: string;
  url: string;
  logo?: ImageObject | string;
  image?: string;
  slogan?: string;
  foundingDate?: string;
  numberOfEmployees?: QuantitativeValue;
  knowsAbout?: string[];
  serviceArea?: Place;
  areaServed?: string;
  contactPoint?: ContactPoint[];
  sameAs?: string[];
  address?: PostalAddress;
  hasOfferCatalog?: OfferCatalog;
}

interface Service extends SchemaBase {
  "@type": "Service";
  name: string;
  alternateName?: string;
  description: string;
  provider: Organization;
  serviceType: string;
  category?: string;
  audience?: Audience;
  areaServed: string;
  availableChannel?: ServiceChannel;
  offers?: Offer;
  hasOfferCatalog?: OfferCatalog;
}

interface ContactPoint extends SchemaBase {
  "@type": "ContactPoint";
  contactType: string;
  telephone?: string;
  email?: string;
  availableLanguage?: string[];
  areaServed?: string;
  hoursAvailable?: OpeningHoursSpecification;
}

interface LocalBusiness extends SchemaBase {
  "@type": "ProfessionalService";
  name: string;
  description: string;
  url: string;
  telephone?: string;
  email?: string;
  priceRange?: string;
  currenciesAccepted?: string;
  paymentAccepted?: string;
  openingHours?: string[];
  serviceArea?: GeoCircle;
  address?: PostalAddress;
  geo?: GeoCoordinates;
  hasMap?: string;
  isAccessibleForFree?: boolean;
  knowsAbout?: string[];
  makesOffer?: Offer[];
}

interface WebSite extends SchemaBase {
  "@type": "WebSite";
  name: string;
  alternateName?: string;
  url: string;
  description: string;
  publisher?: Organization;
  potentialAction?: SearchAction;
  mainEntity?: Organization;
}

interface BreadcrumbList extends SchemaBase {
  "@type": "BreadcrumbList";
  itemListElement: ListItem[];
}

// Supporting interfaces
interface ImageObject {
  "@type": "ImageObject";
  url: string;
  width?: number;
  height?: number;
}

interface QuantitativeValue {
  "@type": "QuantitativeValue";
  value: string;
}

interface Place {
  "@type": "Place";
  name: string;
}

interface PostalAddress {
  "@type": "PostalAddress";
  addressCountry: string;
  addressRegion: string;
}

interface OfferCatalog {
  "@type": "OfferCatalog";
  name: string;
  itemListElement?: OfferCatalog[] | Offer[];
}

interface ServiceChannel {
  "@type": "ServiceChannel";
  serviceUrl: string;
  servicePhone?: string;
  availableLanguage: string;
}

interface Offer {
  "@type": "Offer";
  description?: string;
  areaServed?: string;
  businessFunction?: string;
  itemOffered?: Service;
}

interface Audience {
  "@type": "Audience";
  audienceType: string;
}

interface OpeningHoursSpecification {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string[];
  opens: string;
  closes: string;
  validFrom?: string;
  validThrough?: string;
}

interface GeoCircle {
  "@type": "GeoCircle";
  geoMidpoint: GeoCoordinates;
  geoRadius: number;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

interface SearchAction {
  "@type": "SearchAction";
  target: EntryPoint;
  "query-input": string;
}

interface EntryPoint {
  "@type": "EntryPoint";
  urlTemplate: string;
}

interface ListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

// Base organization schema with comprehensive company details
export const ORGANIZATION_SCHEMA: Organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Talent Fino",
  "alternateName": "Talent Fino Recruitment",
  "legalName": "Talent Fino LLC",
  "description": "Global recruitment and staffing solutions company specializing in talent acquisition across manufacturing, healthcare, automotive, aerospace, and technology industries. Where talent meets excellence.",
  "url": "https://talentfino.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://talentfino.com/logo.png",
    "width": 300,
    "height": 100
  },
  "image": "https://talentfino.com/og-images/default-og.jpg",
  "slogan": "Where talent meets excellence",
  "foundingDate": "2020",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "50-100"
  },
  "knowsAbout": [
    "Recruitment Services",
    "Staffing Solutions",
    "Executive Search",
    "Talent Acquisition",
    "Human Resources",
    "Manufacturing Recruitment",
    "Healthcare Staffing",
    "Automotive Recruitment",
    "Aerospace Staffing",
    "Technology Recruitment"
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "areaServed": "Worldwide",
  "contactPoint": [
    {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+1-800-TALENT",
      "email": "info@talentfino.com",
      "availableLanguage": ["English"],
      "areaServed": "Worldwide",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
        "validFrom": "2020-01-01",
        "validThrough": "2030-12-31"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+1-800-TALENT",
      "email": "sales@talentfino.com",
      "availableLanguage": ["English"],
      "areaServed": "Worldwide"
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "contactType": "technical support",
      "email": "support@talentfino.com",
      "availableLanguage": ["English"],
      "areaServed": "Worldwide"
    }
  ],
  "sameAs": [
    "https://linkedin.com/company/talentfino",
    "https://twitter.com/talentfino",
    "https://facebook.com/talentfino",
    "https://instagram.com/talentfino"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "Global Operations"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Recruitment and Staffing Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Direct Staffing Services"
      },
      {
        "@type": "OfferCatalog", 
        "name": "Executive Search Services"
      },
      {
        "@type": "OfferCatalog",
        "name": "Contract Staffing Services"
      },
      {
        "@type": "OfferCatalog",
        "name": "Resume Sourcing Services"
      }
    ]
  }
};

// Website schema for homepage
export const WEBSITE_SCHEMA: WebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Talent Fino",
  "alternateName": "Talent Fino Recruitment",
  "url": "https://talentfino.com",
  "description": "Global recruitment and staffing solutions - Where talent meets excellence",
  "publisher": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talent Fino",
    "description": "Global recruitment and staffing solutions company",
    "url": "https://talentfino.com"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://talentfino.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talent Fino",
    "description": "Global recruitment and staffing solutions company",
    "url": "https://talentfino.com"
  }
};

// Service schemas for different recruitment services
export const DIRECT_STAFFING_SERVICE: Service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Direct Staffing Services",
  "alternateName": "Permanent Placement Services",
  "description": "Professional direct staffing and permanent placement services for full-time positions across multiple industries including manufacturing, healthcare, automotive, and aerospace.",
  "provider": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talent Fino",
    "description": "Global recruitment and staffing solutions company",
    "url": "https://talentfino.com"
  },
  "serviceType": "Direct Staffing",
  "category": "Human Resources",
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://talentfino.com/services",
    "servicePhone": "+1-800-TALENT",
    "availableLanguage": "English"
  },
  "offers": {
    "@type": "Offer",
    "description": "Professional direct staffing solutions for permanent positions",
    "areaServed": "Worldwide",
    "businessFunction": "http://purl.org/goodrelations/v1#Sell"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Direct Staffing Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Manufacturing Direct Staffing",
          "description": "Direct staffing services for manufacturing industry",
          "provider": {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Talent Fino",
            "description": "Global recruitment and staffing solutions company",
            "url": "https://talentfino.com"
          },
          "serviceType": "Direct Staffing",
          "areaServed": "Worldwide"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@context": "https://schema.org",
          "@type": "Service", 
          "name": "Healthcare Direct Staffing",
          "description": "Direct staffing services for healthcare industry",
          "provider": {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Talent Fino",
            "description": "Global recruitment and staffing solutions company",
            "url": "https://talentfino.com"
          },
          "serviceType": "Direct Staffing",
          "areaServed": "Worldwide"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Automotive Direct Staffing",
          "description": "Direct staffing services for automotive industry",
          "provider": {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Talent Fino",
            "description": "Global recruitment and staffing solutions company",
            "url": "https://talentfino.com"
          },
          "serviceType": "Direct Staffing",
          "areaServed": "Worldwide"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Aerospace Direct Staffing",
          "description": "Direct staffing services for aerospace industry",
          "provider": {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Talent Fino",
            "description": "Global recruitment and staffing solutions company",
            "url": "https://talentfino.com"
          },
          "serviceType": "Direct Staffing",
          "areaServed": "Worldwide"
        }
      }
    ]
  }
};

export const EXECUTIVE_SEARCH_SERVICE: Service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Executive Search Services",
  "alternateName": "Executive Recruitment Services",
  "description": "Professional executive search and headhunting services for C-level executives, senior management, and leadership positions across industries.",
  "provider": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talent Fino",
    "description": "Global recruitment and staffing solutions company",
    "url": "https://talentfino.com"
  },
  "serviceType": "Executive Search",
  "category": "Human Resources",
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://talentfino.com/services",
    "servicePhone": "+1-800-TALENT",
    "availableLanguage": "English"
  },
  "offers": {
    "@type": "Offer",
    "description": "Executive search and headhunting services for senior leadership positions",
    "areaServed": "Worldwide",
    "businessFunction": "http://purl.org/goodrelations/v1#Sell"
  }
};

export const CONTRACT_STAFFING_SERVICE: Service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Contract Staffing Services",
  "alternateName": "Temporary Staffing Services",
  "description": "Professional contract and temporary staffing solutions for project-based work, interim positions, and flexible workforce management.",
  "provider": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talent Fino",
    "description": "Global recruitment and staffing solutions company",
    "url": "https://talentfino.com"
  },
  "serviceType": "Contract Staffing",
  "category": "Human Resources",
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://talentfino.com/services",
    "servicePhone": "+1-800-TALENT",
    "availableLanguage": "English"
  },
  "offers": {
    "@type": "Offer",
    "description": "Contract and temporary staffing solutions for flexible workforce needs",
    "areaServed": "Worldwide",
    "businessFunction": "http://purl.org/goodrelations/v1#Sell"
  }
};

export const RESUME_SOURCING_SERVICE: Service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Resume Sourcing Services",
  "alternateName": "Candidate Sourcing Services",
  "description": "Professional resume sourcing and candidate identification services to build talent pipelines and identify qualified candidates for recruitment needs.",
  "provider": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talent Fino",
    "description": "Global recruitment and staffing solutions company",
    "url": "https://talentfino.com"
  },
  "serviceType": "Resume Sourcing",
  "category": "Human Resources",
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://talentfino.com/services",
    "servicePhone": "+1-800-TALENT",
    "availableLanguage": "English"
  },
  "offers": {
    "@type": "Offer",
    "description": "Resume sourcing and candidate identification services",
    "areaServed": "Worldwide",
    "businessFunction": "http://purl.org/goodrelations/v1#Sell"
  }
};

// Industry-specific service schemas
export const MANUFACTURING_RECRUITMENT_SERVICE: Service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Manufacturing Recruitment Services",
  "description": "Specialized recruitment and staffing services for manufacturing industry including production workers, manufacturing engineers, quality control specialists, and lean manufacturing professionals.",
  "provider": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talent Fino",
    "description": "Global recruitment and staffing solutions company",
    "url": "https://talentfino.com"
  },
  "serviceType": "Manufacturing Recruitment",
  "category": "Human Resources",
  "audience": {
    "@type": "Audience",
    "audienceType": "Manufacturing Companies"
  },
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://talentfino.com/industries",
    "servicePhone": "+1-800-TALENT",
    "availableLanguage": "English"
  },
  "offers": {
    "@type": "Offer",
    "description": "Manufacturing recruitment and industrial staffing solutions",
    "areaServed": "Worldwide",
    "businessFunction": "http://purl.org/goodrelations/v1#Sell"
  }
};

export const HEALTHCARE_STAFFING_SERVICE: Service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Healthcare Staffing Services",
  "description": "Professional healthcare staffing and medical recruitment services for registered nurses, medical technicians, clinical professionals, and healthcare compliance specialists.",
  "provider": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talent Fino",
    "description": "Global recruitment and staffing solutions company",
    "url": "https://talentfino.com"
  },
  "serviceType": "Healthcare Staffing",
  "category": "Human Resources",
  "audience": {
    "@type": "Audience",
    "audienceType": "Healthcare Organizations"
  },
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://talentfino.com/industries",
    "servicePhone": "+1-800-TALENT",
    "availableLanguage": "English"
  },
  "offers": {
    "@type": "Offer",
    "description": "Healthcare staffing and medical recruitment solutions",
    "areaServed": "Worldwide",
    "businessFunction": "http://purl.org/goodrelations/v1#Sell"
  }
};

export const AUTOMOTIVE_RECRUITMENT_SERVICE: Service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automotive Recruitment Services",
  "description": "Specialized automotive recruitment services for engineers, designers, technicians, manufacturing professionals, and electric vehicle industry talent.",
  "provider": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talent Fino",
    "description": "Global recruitment and staffing solutions company",
    "url": "https://talentfino.com"
  },
  "serviceType": "Automotive Recruitment",
  "category": "Human Resources",
  "audience": {
    "@type": "Audience",
    "audienceType": "Automotive Companies"
  },
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://talentfino.com/industries",
    "servicePhone": "+1-800-TALENT",
    "availableLanguage": "English"
  },
  "offers": {
    "@type": "Offer",
    "description": "Automotive recruitment and staffing solutions",
    "areaServed": "Worldwide",
    "businessFunction": "http://purl.org/goodrelations/v1#Sell"
  }
};

export const AEROSPACE_STAFFING_SERVICE: Service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Aerospace & Defense Staffing Services",
  "description": "Expert aerospace and defense staffing services for high-security, mission-critical roles including aerospace engineers, aviation professionals, and defense contractors.",
  "provider": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talent Fino",
    "description": "Global recruitment and staffing solutions company",
    "url": "https://talentfino.com"
  },
  "serviceType": "Aerospace Staffing",
  "category": "Human Resources",
  "audience": {
    "@type": "Audience",
    "audienceType": "Aerospace & Defense Companies"
  },
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://talentfino.com/industries",
    "servicePhone": "+1-800-TALENT",
    "availableLanguage": "English"
  },
  "offers": {
    "@type": "Offer",
    "description": "Aerospace and defense staffing solutions",
    "areaServed": "Worldwide",
    "businessFunction": "http://purl.org/goodrelations/v1#Sell"
  }
};

// LocalBusiness schema for location-specific services
export const LOCAL_BUSINESS_SCHEMA: LocalBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Talent Fino",
  "description": "Professional recruitment and staffing services company providing global talent acquisition solutions",
  "url": "https://talentfino.com",
  "telephone": "+1-800-TALENT",
  "email": "info@talentfino.com",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check, Invoice",
  "openingHours": [
    "Mo-Fr 09:00-18:00"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "geoRadius": 50000
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "Global Operations"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "hasMap": "https://maps.google.com/?q=Talent+Fino",
  "isAccessibleForFree": false,
  "knowsAbout": [
    "Recruitment",
    "Staffing",
    "Executive Search",
    "Talent Acquisition",
    "Human Resources"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Direct Staffing Services",
        "description": "Professional direct staffing and permanent placement services",
        "provider": {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Talent Fino",
          "description": "Global recruitment and staffing solutions company",
          "url": "https://talentfino.com"
        },
        "serviceType": "Direct Staffing",
        "areaServed": "Worldwide"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Executive Search Services",
        "description": "Professional executive search and headhunting services",
        "provider": {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Talent Fino",
          "description": "Global recruitment and staffing solutions company",
          "url": "https://talentfino.com"
        },
        "serviceType": "Executive Search",
        "areaServed": "Worldwide"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Contract Staffing Services",
        "description": "Professional contract and temporary staffing solutions",
        "provider": {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Talent Fino",
          "description": "Global recruitment and staffing solutions company",
          "url": "https://talentfino.com"
        },
        "serviceType": "Contract Staffing",
        "areaServed": "Worldwide"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Resume Sourcing Services",
        "description": "Professional resume sourcing and candidate identification services",
        "provider": {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Talent Fino",
          "description": "Global recruitment and staffing solutions company",
          "url": "https://talentfino.com"
        },
        "serviceType": "Resume Sourcing",
        "areaServed": "Worldwide"
      }
    }
  ]
};

// Contact point schemas for business contact information
export const CONTACT_POINT_SCHEMAS = {
  customerService: {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+1-800-TALENT",
    "email": "info@talentfino.com",
    "availableLanguage": ["English"],
    "areaServed": "Worldwide",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  },
  sales: {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": "sales",
    "telephone": "+1-800-TALENT",
    "email": "sales@talentfino.com",
    "availableLanguage": ["English"],
    "areaServed": "Worldwide"
  },
  support: {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": "technical support",
    "email": "support@talentfino.com",
    "availableLanguage": ["English"],
    "areaServed": "Worldwide"
  }
} as const;

// Breadcrumb schema generator
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>): BreadcrumbList => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Combined schema generator for pages that need multiple schemas
export const generateCombinedSchema = (schemas: object[]): object => {
  return {
    "@context": "https://schema.org",
    "@graph": schemas
  };
};

// Schema utility functions
export const SCHEMA_UTILS = {
  // Get service schema by service type
  getServiceSchema: (serviceType: 'direct-staffing' | 'executive-search' | 'contract-staffing' | 'resume-sourcing') => {
    const schemas = {
      'direct-staffing': DIRECT_STAFFING_SERVICE,
      'executive-search': EXECUTIVE_SEARCH_SERVICE,
      'contract-staffing': CONTRACT_STAFFING_SERVICE,
      'resume-sourcing': RESUME_SOURCING_SERVICE
    };
    return schemas[serviceType];
  },

  // Get industry schema by industry type
  getIndustrySchema: (industryType: 'manufacturing' | 'healthcare' | 'automotive' | 'aerospace') => {
    const schemas = {
      'manufacturing': MANUFACTURING_RECRUITMENT_SERVICE,
      'healthcare': HEALTHCARE_STAFFING_SERVICE,
      'automotive': AUTOMOTIVE_RECRUITMENT_SERVICE,
      'aerospace': AEROSPACE_STAFFING_SERVICE
    };
    return schemas[industryType];
  },

  // Generate page-specific combined schema
  generatePageSchema: (pageType: 'home' | 'services' | 'industries' | 'about', additionalSchemas: object[] = []) => {
    const baseSchemas = {
      home: [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA],
      services: [ORGANIZATION_SCHEMA, DIRECT_STAFFING_SERVICE, EXECUTIVE_SEARCH_SERVICE, CONTRACT_STAFFING_SERVICE, RESUME_SOURCING_SERVICE],
      industries: [ORGANIZATION_SCHEMA, MANUFACTURING_RECRUITMENT_SERVICE, HEALTHCARE_STAFFING_SERVICE, AUTOMOTIVE_RECRUITMENT_SERVICE, AEROSPACE_STAFFING_SERVICE],
      about: [ORGANIZATION_SCHEMA, LOCAL_BUSINESS_SCHEMA]
    };

    const schemas = baseSchemas[pageType] || [ORGANIZATION_SCHEMA];
    return generateCombinedSchema([...schemas, ...additionalSchemas]);
  }
};