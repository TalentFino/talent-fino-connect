import { Card } from '@/components/ui/card';
import { SEOLink, ServiceLinks, IndustryLinks } from './SEOLink';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RelatedLink {
  title: string;
  description: string;
  href: string;
  keywords: string[];
  category?: 'service' | 'industry' | 'page';
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
  className?: string;
  variant?: 'card' | 'list' | 'inline';
  showDescription?: boolean;
}

export const RelatedLinks: React.FC<RelatedLinksProps> = ({
  title = 'Related Services & Industries',
  links,
  className,
  variant = 'card',
  showDescription = true,
}) => {
  if (variant === 'inline') {
    return (
      <div className={cn('flex flex-wrap gap-2', className)}>
        {links.map((link, index) => (
          <SEOLink
            key={index}
            to={link.href}
            keywords={link.keywords}
            className="inline-flex items-center px-3 py-1 bg-secondary/50 hover:bg-secondary rounded-full text-sm transition-colors"
          >
            {link.title}
            <ArrowRight className="w-3 h-3 ml-1" />
          </SEOLink>
        ))}
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className={cn('space-y-4', className)}>
        {title && (
          <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
        )}
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index} className="flex items-start">
              <ArrowRight className="w-4 h-4 mt-0.5 mr-2 text-primary flex-shrink-0" />
              <div>
                <SEOLink
                  to={link.href}
                  keywords={link.keywords}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {link.title}
                </SEOLink>
                {showDescription && (
                  <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      {title && (
        <h3 className="text-2xl font-bold text-foreground text-center">{title}</h3>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <SEOLink
              to={link.href}
              keywords={link.keywords}
              className="block group"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.title}
                </h4>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
              </div>
              {showDescription && (
                <p className="text-sm text-muted-foreground">{link.description}</p>
              )}
            </SEOLink>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Predefined related links for different page types
export const RelatedLinksData = {
  // For Services page - show related industries
  servicesPageLinks: [
    {
      title: 'Manufacturing Recruitment Services',
      description: 'Specialized recruitment for manufacturing, production, and industrial roles.',
      href: '/services',
      keywords: ['manufacturing recruitment', 'industrial staffing', 'production workers'],
      category: 'industry' as const,
    },
    {
      title: 'Healthcare Staffing Solutions',
      description: 'Medical recruitment and healthcare staffing for clinical professionals.',
      href: '/services',
      keywords: ['healthcare staffing', 'medical recruitment', 'nursing jobs'],
      category: 'industry' as const,
    },
    {
      title: 'Automotive Industry Recruitment',
      description: 'Automotive recruitment for engineers, technicians, and manufacturing roles.',
      href: '/services',
      keywords: ['automotive recruitment', 'automotive staffing', 'auto industry jobs'],
      category: 'industry' as const,
    },
    {
      title: 'Aerospace & Defense Staffing',
      description: 'Specialized aerospace recruitment for high-security, mission-critical roles.',
      href: '/services',
      keywords: ['aerospace staffing', 'aviation recruitment', 'defense jobs'],
      category: 'industry' as const,
    },
  ],

  // For About page - show services and case studies
  aboutPageLinks: [
    {
      title: 'Our Recruitment Services',
      description: 'Comprehensive staffing solutions including executive search and direct placement.',
      href: '/services',
      keywords: ['recruitment services', 'staffing solutions', 'executive search'],
      category: 'service' as const,
    },
    {
      title: 'Client Success Stories',
      description: 'Real recruitment case studies and client testimonials from our partnerships.',
      href: '/case-studies',
      keywords: ['recruitment case studies', 'client success stories', 'staffing testimonials'],
      category: 'page' as const,
    },
    {
      title: 'Learn About Our Process',
      description: 'Detailed information about our recruitment methodology and approach.',
      href: '/learn-more',
      keywords: ['recruitment process', 'staffing methodology', 'talent acquisition'],
      category: 'page' as const,
    },
  ],

  // For Case Studies page - show services and industries
  caseStudiesPageLinks: [
    {
      title: 'Executive Search Services',
      description: 'C-level recruitment and senior leadership placement solutions.',
      href: '/services',
      keywords: ['executive search', 'executive recruitment', 'leadership placement'],
      category: 'service' as const,
    },
    {
      title: 'Direct Staffing Solutions',
      description: 'Permanent placement and direct hire recruitment services.',
      href: '/services',
      keywords: ['direct staffing', 'permanent placement', 'direct hire'],
      category: 'service' as const,
    },
    {
      title: 'About Our Expertise',
      description: 'Learn about our team\'s recruitment expertise and industry knowledge.',
      href: '/about',
      keywords: ['recruitment expertise', 'staffing company', 'talent acquisition'],
      category: 'page' as const,
    },
  ],

  // For Learn More page - show all services
  learnMorePageLinks: [
    {
      title: 'Executive Search & Leadership Recruitment',
      description: 'Specialized C-suite and senior executive placement services.',
      href: '/services',
      keywords: ['executive search', 'leadership recruitment', 'C-suite placement'],
      category: 'service' as const,
    },
    {
      title: 'Contract Staffing & Temporary Solutions',
      description: 'Flexible workforce solutions for project-based and temporary needs.',
      href: '/services',
      keywords: ['contract staffing', 'temporary staffing', 'flexible workforce'],
      category: 'service' as const,
    },
    {
      title: 'Professional Headhunting Services',
      description: 'Proactive candidate sourcing for specialized and hard-to-fill positions.',
      href: '/services',
      keywords: ['headhunting services', 'candidate sourcing', 'passive recruitment'],
      category: 'service' as const,
    },
  ],

  // Cross-industry links for manufacturing page
  manufacturingCrossLinks: [
    {
      title: 'Automotive Manufacturing Recruitment',
      description: 'Specialized recruitment for automotive manufacturing and assembly roles.',
      href: '/services',
      keywords: ['automotive manufacturing', 'automotive recruitment', 'assembly line staffing'],
      category: 'industry' as const,
    },
    {
      title: 'Aerospace Manufacturing Staffing',
      description: 'High-precision aerospace manufacturing and defense contractor recruitment.',
      href: '/services',
      keywords: ['aerospace manufacturing', 'defense contractors', 'precision manufacturing'],
      category: 'industry' as const,
    },
  ],

  // Cross-industry links for healthcare page
  healthcareCrossLinks: [
    {
      title: 'Healthcare Technology Recruitment',
      description: 'Recruitment for healthcare IT, medical device, and health tech professionals.',
      href: '/services',
      keywords: ['healthcare technology', 'medical device recruitment', 'health tech staffing'],
      category: 'industry' as const,
    },
    {
      title: 'Manufacturing Healthcare Products',
      description: 'Recruitment for pharmaceutical and medical device manufacturing roles.',
      href: '/services',
      keywords: ['pharmaceutical manufacturing', 'medical device manufacturing', 'healthcare production'],
      category: 'industry' as const,
    },
  ],
};

// Component for footer internal links
export const FooterInternalLinks: React.FC<{ className?: string }> = ({ className }) => {
  const footerLinks = [
    {
      title: 'Recruitment Services',
      links: [
        { title: 'Executive Search Services', href: '/services', keywords: ['executive search', 'leadership recruitment'] },
        { title: 'Direct Staffing Solutions', href: '/services', keywords: ['direct staffing', 'permanent placement'] },
        { title: 'Contract Staffing Services', href: '/services', keywords: ['contract staffing', 'temporary solutions'] },
        { title: 'Professional Headhunting', href: '/services', keywords: ['headhunting services', 'candidate sourcing'] },
      ]
    },
    {
      title: 'Industry Expertise',
      links: [
        { title: 'Manufacturing Recruitment', href: '/services', keywords: ['manufacturing recruitment', 'industrial staffing'] },
        { title: 'Healthcare Staffing', href: '/services', keywords: ['healthcare staffing', 'medical recruitment'] },
        { title: 'Automotive Recruitment', href: '/services', keywords: ['automotive recruitment', 'auto industry staffing'] },
        { title: 'Aerospace Staffing', href: '/services', keywords: ['aerospace staffing', 'aviation recruitment'] },
      ]
    }
  ];

  return (
    <div className={cn('grid md:grid-cols-2 gap-8', className)}>
      {footerLinks.map((section, index) => (
        <div key={index}>
          <h4 className="text-lg font-semibold mb-4 text-primary-foreground">{section.title}</h4>
          <ul className="space-y-2">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <SEOLink
                  to={link.href}
                  keywords={link.keywords}
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {link.title}
                </SEOLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};