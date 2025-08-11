import { ChevronRight, Home } from 'lucide-react';
import { SEOLink } from './SEOLink';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
  keywords?: string[];
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className,
  showHome = true,
}) => {
  const allItems = showHome 
    ? [{ label: 'Home', href: '/', keywords: ['recruitment services', 'staffing solutions'] }, ...items]
    : items;

  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className={cn('flex items-center space-x-2 text-sm text-muted-foreground', className)}
    >
      <ol className="flex items-center space-x-2">
        {allItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/60" aria-hidden="true" />
            )}
            
            {item.current || !item.href ? (
              <span 
                className="font-medium text-foreground"
                aria-current={item.current ? 'page' : undefined}
              >
                {index === 0 && showHome ? (
                  <span className="flex items-center">
                    <Home className="w-4 h-4 mr-1" aria-hidden="true" />
                    {item.label}
                  </span>
                ) : (
                  item.label
                )}
              </span>
            ) : (
              <SEOLink
                to={item.href}
                keywords={item.keywords}
                className="hover:text-primary transition-colors"
                aria-label={`Navigate to ${item.label}`}
              >
                {index === 0 && showHome ? (
                  <span className="flex items-center">
                    <Home className="w-4 h-4 mr-1" aria-hidden="true" />
                    {item.label}
                  </span>
                ) : (
                  item.label
                )}
              </SEOLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Predefined breadcrumb configurations for common pages
export const BreadcrumbConfigs = {
  services: [
    { label: 'Professional Recruitment & Staffing Services', current: true }
  ],
  
  about: [
    { label: 'About Talent Fino - Expert Recruitment Solutions', current: true }
  ],
  
  caseStudies: [
    { label: 'Recruitment Success Stories & Case Studies', current: true }
  ],
  
  learnMore: [
    { 
      label: 'Services', 
      href: '/services', 
      keywords: ['recruitment services', 'staffing solutions'] 
    },
    { label: 'Learn More About Our Recruitment Services', current: true }
  ],
  
  // Industry-specific breadcrumbs
  manufacturingServices: [
    { 
      label: 'Services', 
      href: '/services', 
      keywords: ['recruitment services', 'staffing solutions'] 
    },
    { label: 'Manufacturing Recruitment & Industrial Staffing', current: true }
  ],
  
  healthcareServices: [
    { 
      label: 'Services', 
      href: '/services', 
      keywords: ['recruitment services', 'staffing solutions'] 
    },
    { label: 'Healthcare Staffing & Medical Recruitment', current: true }
  ],
  
  automotiveServices: [
    { 
      label: 'Services', 
      href: '/services', 
      keywords: ['recruitment services', 'staffing solutions'] 
    },
    { label: 'Automotive Recruitment & Industry Staffing', current: true }
  ],
  
  aerospaceServices: [
    { 
      label: 'Services', 
      href: '/services', 
      keywords: ['recruitment services', 'staffing solutions'] 
    },
    { label: 'Aerospace Staffing & Aviation Recruitment', current: true }
  ],
  
  // Service-specific breadcrumbs
  executiveSearch: [
    { 
      label: 'Services', 
      href: '/services', 
      keywords: ['recruitment services', 'staffing solutions'] 
    },
    { label: 'Executive Search & Leadership Recruitment', current: true }
  ],
  
  directStaffing: [
    { 
      label: 'Services', 
      href: '/services', 
      keywords: ['recruitment services', 'staffing solutions'] 
    },
    { label: 'Direct Staffing & Permanent Placement', current: true }
  ],
  
  contractStaffing: [
    { 
      label: 'Services', 
      href: '/services', 
      keywords: ['recruitment services', 'staffing solutions'] 
    },
    { label: 'Contract Staffing & Temporary Solutions', current: true }
  ],
};