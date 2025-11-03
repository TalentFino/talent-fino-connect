import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PAGE_SEO_CONFIGS } from "@/lib/seo/constants";
import { Breadcrumb, BreadcrumbConfigs } from "@/components/Breadcrumb";
import { RelatedLinks, RelatedLinksData } from "@/components/RelatedLinks";
import { ServiceLinks, IndustryLinks } from "@/components/SEOLink";

const ServicesPage = () => {
  const servicesSEO = PAGE_SEO_CONFIGS.services;

  const services = [
    {
      title: "Direct Staffing & Permanent Placement Services",
      description: "Professional direct staffing solutions for permanent placement needs. We source, screen, and place full-time employees who bring lasting value to your business. Our comprehensive recruitment process ensures cultural alignment, technical competency, and long-term success for direct hire positions.",
      features: [
        "Comprehensive candidate screening and assessment",
        "Cultural fit evaluation and compatibility testing", 
        "Technical competency validation",
        "Reference verification and background checks",
        "Onboarding support and integration assistance",
        "90-day success guarantee for permanent placements"
      ],
      process: [
        "Role Analysis & Requirements Gathering",
        "Targeted Candidate Sourcing",
        "Multi-Stage Interview Process", 
        "Final Selection & Offer Negotiation"
      ],
      slug: "direct-staffing-permanent-placement"
    },
    {
      title: "Executive Search & Leadership Recruitment",
      description: "Specialized executive search services and C-level recruitment solutions. Our executive recruiters identify and secure top-tier leaders who can drive business transformation. We focus on leadership qualities, industry experience, and strategic vision for senior executive positions.",
      features: [
        "C-suite and senior leadership placement",
        "Confidential executive search capabilities",
        "Leadership assessment and evaluation",
        "Strategic vision alignment",
        "Industry expertise and network access",
        "Executive onboarding support"
      ],
      process: [
        "Strategic Role Definition",
        "Market Mapping & Research", 
        "Executive Identification & Approach",
        "Leadership Assessment & Placement"
      ],
      slug: "executive-search-leadership-recruitment"
    },
    {
      title: "Professional Headhunting Services",
      description: "Expert headhunting and candidate sourcing for hard-to-fill positions. We proactively reach out to passive candidates—professionals not actively seeking roles but who perfectly fit your specialized requirements and industry needs.",
      features: [
        "Passive candidate identification",
        "Discrete approach and engagement",
        "Market intelligence and insights",
        "Competitive landscape analysis",
        "Talent mapping and succession planning",
        "Long-term relationship building"
      ],
      process: [
        "Target Profile Development",
        "Market Research & Mapping",
        "Discrete Candidate Approach", 
        "Relationship Building & Placement"
      ],
      slug: "professional-headhunting-services"
    },
    {
      title: "Contract Staffing & Temporary Solutions",
      description: "Flexible contract staffing and temporary workforce solutions for short-term projects, seasonal needs, or specialized expertise. Our contract recruitment services are delivered quickly to keep your operations running smoothly with qualified temporary staff.",
      features: [
        "Rapid deployment capabilities",
        "Flexible contract terms",
        "Project-based specialists",
        "Seasonal workforce management",
        "Compliance and legal support",
        "Performance monitoring and support"
      ],
      process: [
        "Immediate Needs Assessment",
        "Rapid Candidate Mobilization",
        "Contract Setup & Deployment",
        "Ongoing Support & Management"
      ],
      slug: "contract-staffing-temporary-solutions"
    },
    {
      title: "Resume Sourcing & Talent Pipeline Development",
      description: "Professional resume sourcing and candidate database services. Access a pre-qualified talent pipeline that reduces your time-to-hire and ensures you're always ready to fill critical roles with top-quality candidates from our extensive recruitment network.",
      features: [
        "Pre-qualified talent database",
        "AI-powered candidate matching",
        "Reduced time-to-hire",
        "Talent pipeline development",
        "Skills-based candidate ranking",
        "Continuous database updates"
      ],
      process: [
        "Database Search & Filtering",
        "Candidate Pre-qualification",
        "Skills Assessment & Ranking",
        "Rapid Candidate Presentation"
      ],
      slug: "resume-sourcing-talent-pipeline"
    },
    {
      title: "Bulk Hiring & Global Workforce Solutions",
      description: "Fast-growing global IT & Non-IT staffing firm, specializing in mass hiring and workforce deployment across USA, India, Nigeria, Ghana, Kenya, and Brazil. We enable enterprises to build AI, Data, and LLM-driven teams at scale — connecting talent with opportunity worldwide.",
      features: [
        "Global reach across 6+ countries including USA, India, Nigeria, Ghana, Kenya, and Brazil",
        "Specialized in AI/ML & LLM engineering talent acquisition",
        "Mass hiring capabilities for enterprise-scale projects",
        "Industry-specific talent pools: Manufacturing, Healthcare, Automotive, Aerospace, Financial Services",
        "Pre-vetted candidates in emerging tech: Machine Learning Engineers, Data Scientists, LLM Prompt Engineers",
        "Scalable hiring for automation, NLP, data analytics & predictive modeling roles",
        "Strong presence in emerging AI innovation hubs across Africa and Latin America",
        "94% average retention rate for bulk placements"
      ],
      process: [
        "Global Talent Pool Assessment",
        "Regional Market Mapping & Sourcing",
        "Multi-Country Coordination & Screening",
        "Rapid Deployment & Onboarding Support"
      ],
      slug: "bulk-hiring-global-workforce"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={servicesSEO.title}
        description={servicesSEO.description}
        keywords={servicesSEO.keywords}
        path="/services"
        structuredData={servicesSEO.structuredData}
      />
      <Header />
      
      {/* Breadcrumb Navigation */}
      <section className="pt-24 pb-4 bg-background">
        <div className="container mx-auto px-6">
          <Breadcrumb items={BreadcrumbConfigs.services} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Recruitment & Staffing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Comprehensive recruitment solutions including executive search, direct staffing, and contract staffing services tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className={`mb-20 ${index !== services.length - 1 ? 'border-b border-border pb-20' : ''}`}>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="animate-fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      Key Features & Benefits:
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={() => window.location.href = `/learn-more?service=${service.slug}`}
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Get Started with {service.title.split(' ')[0]} {service.title.split(' ')[1]}
                    </Button>
                  </div>
                  
                  <Card className="p-8 shadow-elegant">
                    <h3 className="text-xl font-semibold mb-6 text-foreground">
                      Our Process
                    </h3>
                    <div className="space-y-4">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-sm font-bold text-primary-foreground">{stepIndex + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{step}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Quick Response:</span> We begin working on your requirements within 24 hours of receiving your brief.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Need Custom Recruitment Solutions?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              We understand that every organization has unique staffing requirements. Let's discuss 
              how we can create tailored recruitment and staffing solutions that meet your specific business needs across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.location.href = '/'}
                aria-label="Schedule a consultation for custom recruitment solutions"
              >
                Schedule Recruitment Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/about'}
                className="text-primary"
                aria-label="Learn more about our recruitment expertise"
              >
                Learn About Our Expertise
              </Button>
            </div>
            
            {/* SEO-optimized internal linking section */}
            <div className="mt-12 pt-8 border-t border-border">
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Explore Our Industry-Specific Recruitment Services
              </h4>
              <div className="flex flex-wrap gap-4 justify-center">
                <IndustryLinks.Manufacturing className="text-primary hover:text-primary/80 underline">
                  Manufacturing Recruitment Services
                </IndustryLinks.Manufacturing>
                <IndustryLinks.Healthcare className="text-primary hover:text-primary/80 underline">
                  Healthcare Staffing Solutions
                </IndustryLinks.Healthcare>
                <IndustryLinks.Automotive className="text-primary hover:text-primary/80 underline">
                  Automotive Industry Recruitment
                </IndustryLinks.Automotive>
                <IndustryLinks.Aerospace className="text-primary hover:text-primary/80 underline">
                  Aerospace & Defense Staffing
                </IndustryLinks.Aerospace>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <RelatedLinks 
            title="Explore Related Services & Industries"
            links={RelatedLinksData.servicesPageLinks}
            variant="card"
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;