import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { PAGE_SEO_CONFIGS } from "@/lib/seo/constants";

const LearnMorePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const service = searchParams.get('service') || 'general';
  
  const learnMoreSEO = PAGE_SEO_CONFIGS['learn-more'];
  
  const serviceDetails = {
    'direct-staffing': {
      title: 'Direct Staffing (Permanent Placement)',
      subtitle: 'Building Long-Term Success Through Strategic Permanent Recruitment Placements',
      description: 'Our direct staffing service goes beyond traditional recruitment solutions. We partner with you to understand your organizational culture, growth objectives, and long-term vision to place exceptional professionals through our comprehensive talent acquisition process who will contribute to your success for years to come.',
      benefits: [
        'Comprehensive cultural fit assessment',
        'Technical competency validation',
        'Long-term career alignment',
        'Thorough background verification',
        'Onboarding and integration support',
        '90-day placement guarantee'
      ],
      process: [
        {
          step: 'Discovery & Planning',
          description: 'We conduct in-depth consultations to understand your role requirements, company culture, and growth objectives.'
        },
        {
          step: 'Targeted Sourcing',
          description: 'Using our extensive network and advanced sourcing techniques, we identify candidates who match your specific criteria.'
        },
        {
          step: 'Rigorous Screening',
          description: 'Multi-stage interviews, technical assessments, and cultural fit evaluations ensure only the best candidates proceed.'
        },
        {
          step: 'Seamless Integration',
          description: 'We support both client and candidate through the offer process and initial integration period.'
        }
      ]
    },
    'executive-search': {
      title: 'Executive Search',
      subtitle: 'Securing Visionary Leaders Who Drive Transformation',
      description: 'Our executive search practice identifies and attracts top-tier leadership talent who can navigate complex business challenges and drive organizational transformation. We focus on leaders with proven track records and the vision to take your company to the next level.',
      benefits: [
        'C-suite and senior leadership expertise',
        'Confidential search capabilities',
        'Global executive network access',
        'Leadership assessment and validation',
        'Strategic vision alignment',
        'Executive coaching and transition support'
      ],
      process: [
        {
          step: 'Strategic Consultation',
          description: 'We work with your board and senior leadership to define the ideal leader profile and success criteria.'
        },
        {
          step: 'Market Intelligence',
          description: 'Comprehensive market mapping and competitive analysis to identify the best available talent.'
        },
        {
          step: 'Executive Identification',
          description: 'Discrete outreach to passive executives who match your leadership requirements.'
        },
        {
          step: 'Leadership Assessment',
          description: 'Thorough evaluation of leadership capabilities, cultural fit, and strategic vision alignment.'
        }
      ]
    },
    'headhunting': {
      title: 'Headhunting',
      subtitle: 'Accessing Hidden Talent Through Strategic Outreach',
      description: 'Our headhunting service targets passive candidates who are not actively seeking new opportunities but represent the ideal fit for your organization. We use discrete, professional approaches to engage top performers who can bring exceptional value to your team.',
      benefits: [
        'Access to passive candidate market',
        'Discrete and confidential approach',
        'Market intelligence and insights',
        'Competitive landscape analysis',
        'Long-term talent relationship building',
        'Exclusive candidate access'
      ],
      process: [
        {
          step: 'Target Profile Development',
          description: 'Creating detailed profiles of ideal candidates based on your specific requirements and market conditions.'
        },
        {
          step: 'Market Research',
          description: 'Comprehensive mapping of target companies and identification of key talent within your industry.'
        },
        {
          step: 'Strategic Outreach',
          description: 'Professional, discrete contact with passive candidates to gauge interest and assess fit.'
        },
        {
          step: 'Relationship Development',
          description: 'Building trust and understanding with candidates to facilitate successful transitions.'
        }
      ]
    },
    'contract-staffing': {
      title: 'Contract Staffing',
      subtitle: 'Flexible Workforce Solutions for Dynamic Business Needs',
      description: 'Our contract staffing service provides the flexibility you need to respond to changing business demands. Whether you need specialized expertise for a specific project, temporary coverage, or seasonal support, we deliver qualified professionals quickly and efficiently.',
      benefits: [
        'Rapid deployment capabilities',
        'Flexible contract terms',
        'Project-based specialists',
        'Seasonal workforce management',
        'Compliance and legal support',
        'Performance monitoring'
      ],
      process: [
        {
          step: 'Immediate Assessment',
          description: 'Quick evaluation of your staffing needs, timeline, and specific skill requirements.'
        },
        {
          step: 'Candidate Mobilization',
          description: 'Rapid identification and vetting of qualified contractors from our talent network.'
        },
        {
          step: 'Contract Deployment',
          description: 'Swift onboarding and deployment of contractors with all necessary documentation and compliance.'
        },
        {
          step: 'Ongoing Management',
          description: 'Continuous support, performance monitoring, and relationship management throughout the contract period.'
        }
      ]
    },
    'resume-sourcing': {
      title: 'Resume Sourcing',
      subtitle: 'Pre-Qualified Talent Pipeline for Faster Hiring',
      description: 'Our resume sourcing service provides access to a continuously updated database of pre-qualified candidates, dramatically reducing your time-to-hire. Using advanced AI-powered matching and our industry expertise, we deliver ranked candidate lists that meet your exact requirements.',
      benefits: [
        'Pre-qualified candidate database',
        'AI-powered candidate matching',
        'Significantly reduced time-to-hire',
        'Skills-based ranking system',
        'Continuous database updates',
        'Quality score assessments'
      ],
      process: [
        {
          step: 'Database Search',
          description: 'Advanced filtering and search of our comprehensive candidate database using your specific criteria.'
        },
        {
          step: 'AI-Powered Matching',
          description: 'Intelligent matching algorithms that rank candidates based on skills, experience, and cultural fit indicators.'
        },
        {
          step: 'Quality Assessment',
          description: 'Rapid review and quality scoring of matched candidates to ensure they meet your standards.'
        },
        {
          step: 'Ranked Presentation',
          description: 'Delivery of prioritized candidate lists with detailed profiles and fit assessments.'
        }
      ]
    },
    'general': {
      title: 'Our Comprehensive Services',
      subtitle: 'Complete Recruitment Solutions Tailored to Your Needs',
      description: 'Talent Fino offers a full spectrum of recruitment and staffing services designed to meet every aspect of your talent acquisition needs. From permanent placements to flexible staffing solutions, we have the expertise and resources to deliver exceptional results.',
      benefits: [
        'Full-spectrum recruitment services',
        'Industry-specific expertise',
        'Global reach with local knowledge',
        'Customized solutions approach',
        'Technology-enhanced processes',
        'Dedicated account management'
      ],
      process: [
        {
          step: 'Consultation & Strategy',
          description: 'We begin every engagement with a thorough consultation to understand your unique needs and develop a tailored strategy.'
        },
        {
          step: 'Service Selection',
          description: 'Based on your requirements, we recommend the optimal combination of our services to achieve your goals.'
        },
        {
          step: 'Implementation',
          description: 'Our expert teams execute the agreed strategy using proven methodologies and advanced technologies.'
        },
        {
          step: 'Results & Partnership',
          description: 'We deliver measurable results and build long-term partnerships to support your ongoing talent needs.'
        }
      ]
    }
  };
  
  const currentService = serviceDetails[service] || serviceDetails.general;
  
  // Generate dynamic SEO based on service parameter
  const dynamicTitle = service !== 'general' 
    ? `${currentService.title} - Learn More | Talent Fino`
    : learnMoreSEO.title;
    
  const dynamicDescription = service !== 'general'
    ? `Learn more about our ${currentService.title.toLowerCase()} services. ${currentService.description.substring(0, 100)}...`
    : learnMoreSEO.description;
    
  const dynamicKeywords = service !== 'general'
    ? [...learnMoreSEO.keywords, service.replace('-', ' '), currentService.title.toLowerCase()]
    : learnMoreSEO.keywords;

  // Structured data for service details
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": currentService.title,
    "description": currentService.description,
    "provider": {
      "@type": "Organization",
      "name": "Talent Fino"
    },
    "serviceType": "Recruitment and Staffing",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Recruitment Services",
      "itemListElement": currentService.benefits.map((benefit, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": benefit
        }
      }))
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={dynamicTitle}
        description={dynamicDescription}
        keywords={dynamicKeywords}
        path={`/learn-more${service !== 'general' ? `?service=${service}` : ''}`}
        structuredData={serviceStructuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {currentService.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              {currentService.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Service Overview */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div className="animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Recruitment Service Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {currentService.description}
                </p>
                
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Key Recruitment Benefits & Staffing Features
                </h3>
                <ul className="space-y-4">
                  {currentService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Card className="p-8 shadow-elegant animate-scale-in">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Our Proven Recruitment Process
                </h3>
                <div className="space-y-6">
                  {currentService.process.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{step.step}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">
                Why Choose Talent Fino for Recruitment Services?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Proven Results</h4>
                  <p className="text-sm text-muted-foreground">95% client satisfaction rate with measurable ROI</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Fast Delivery</h4>
                  <p className="text-sm text-muted-foreground">24-hour response time with rapid deployment</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🌍</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Global Expertise</h4>
                  <p className="text-sm text-muted-foreground">International network with local market knowledge</p>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Ready to Get Started with Our Recruitment Services?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Let's discuss how our {currentService.title.toLowerCase()} service can help you 
                achieve your talent acquisition and staffing goals to drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" size="lg">
                  Download Service Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LearnMorePage;