import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SEOLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  'aria-label'?: string;
  keywords?: string[];
  external?: boolean;
}

export const SEOLink: React.FC<SEOLinkProps> = ({
  to,
  children,
  className,
  title,
  'aria-label': ariaLabel,
  keywords = [],
  external = false,
}) => {
  // Generate SEO-friendly title if not provided
  const seoTitle = title || (typeof children === 'string' ? children : '');
  
  // Add keywords to title for internal SEO value
  const enhancedTitle = keywords.length > 0 
    ? `${seoTitle} - ${keywords.slice(0, 2).join(', ')}`
    : seoTitle;

  const linkProps = {
    className: cn(
      'transition-colors duration-200 hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-sm',
      className
    ),
    title: enhancedTitle,
    'aria-label': ariaLabel || seoTitle,
  };

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} {...linkProps}>
      {children}
    </Link>
  );
};

// Predefined SEO-optimized links for common pages
export const SEOLinks = {
  Home: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/" 
      keywords={['recruitment services', 'staffing solutions', 'talent acquisition']}
      {...props}
    />
  ),
  
  Services: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/services" 
      keywords={['recruitment services', 'executive search', 'staffing solutions']}
      {...props}
    />
  ),
  
  About: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/about" 
      keywords={['recruitment expertise', 'staffing company', 'talent acquisition']}
      {...props}
    />
  ),
  
  CaseStudies: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/case-studies" 
      keywords={['recruitment success stories', 'staffing case studies', 'client testimonials']}
      {...props}
    />
  ),
  
  LearnMore: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/learn-more" 
      keywords={['recruitment information', 'staffing services', 'talent acquisition process']}
      {...props}
    />
  ),
};

// Industry-specific SEO links
export const IndustryLinks = {
  Manufacturing: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/services" 
      keywords={['manufacturing recruitment', 'industrial staffing', 'production workers']}
      {...props}
    />
  ),
  
  Healthcare: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/services" 
      keywords={['healthcare staffing', 'medical recruitment', 'nursing jobs']}
      {...props}
    />
  ),
  
  Automotive: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/services" 
      keywords={['automotive recruitment', 'automotive staffing', 'auto industry jobs']}
      {...props}
    />
  ),
  
  Aerospace: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/services" 
      keywords={['aerospace staffing', 'aviation recruitment', 'defense jobs']}
      {...props}
    />
  ),
};

// Service-specific SEO links
export const ServiceLinks = {
  ExecutiveSearch: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/services" 
      keywords={['executive search', 'executive recruitment', 'headhunting']}
      {...props}
    />
  ),
  
  DirectStaffing: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/services" 
      keywords={['direct staffing', 'permanent placement', 'direct hire']}
      {...props}
    />
  ),
  
  ContractStaffing: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/services" 
      keywords={['contract staffing', 'temporary staffing', 'contract recruitment']}
      {...props}
    />
  ),
  
  ResumeSourcing: (props: Omit<SEOLinkProps, 'to' | 'keywords'>) => (
    <SEOLink 
      to="/services" 
      keywords={['resume sourcing', 'candidate sourcing', 'talent sourcing']}
      {...props}
    />
  ),
};