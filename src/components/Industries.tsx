import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { INDUSTRY_SEO_CONFIGS } from "@/lib/seo/constants";
import { Helmet } from "react-helmet-async";

const Industries = () => {
  const industries = [
    {
      id: "manufacturing",
      title: "Manufacturing Recruitment Services",
      description: "Expert manufacturing recruitment and industrial staffing solutions. We source skilled production workers, manufacturing engineers, quality control specialists, and operations leaders for lean manufacturing environments and factory operations.",
      icon: "⚙️",
      keywords: ["manufacturing recruitment", "industrial staffing", "production workers", "manufacturing engineers"],
      relatedIndustries: ["automotive", "aerospace"],
      cta: "Explore Manufacturing Recruitment"
    },
    {
      id: "automotive",
      title: "Automotive Industry Staffing",
      description: "Specialized automotive recruitment services for automotive engineers, designers, technicians, and manufacturing professionals. From electric vehicle development to automotive supply chain staffing solutions.",
      icon: "🚗",
      keywords: ["automotive recruitment", "automotive staffing", "automotive engineers", "electric vehicle recruitment"],
      relatedIndustries: ["manufacturing", "aerospace"],
      cta: "View Automotive Staffing Solutions"
    },
    {
      id: "healthcare",
      title: "Healthcare Staffing Solutions",
      description: "Comprehensive healthcare staffing and medical recruitment services. We place registered nurses, medical technicians, clinical professionals, and healthcare specialists with regulatory expertise across life sciences organizations.",
      icon: "🔬",
      keywords: ["healthcare staffing", "medical recruitment", "nursing jobs", "clinical positions"],
      relatedIndustries: ["finance"],
      cta: "Discover Healthcare Staffing"
    },
    {
      id: "aerospace",
      title: "Aerospace & Defense Recruitment",
      description: "Specialized aerospace staffing and aviation recruitment for high-security, mission-critical roles. Expert placement of aerospace engineers, defense contractors, flight test engineers, and aviation maintenance professionals.",
      icon: "✈️",
      keywords: ["aerospace staffing", "aviation recruitment", "defense jobs", "aerospace engineers"],
      relatedIndustries: ["manufacturing", "automotive"],
      cta: "Learn About Aerospace Recruitment"
    },
    {
      id: "construction",
      title: "Construction & Civil Engineering Staffing",
      description: "Professional construction recruitment and civil engineering staffing services. From project architects to site supervisors, we deliver qualified construction professionals for infrastructure projects and building development.",
      icon: "🏗️",
      keywords: ["construction recruitment", "civil engineering staffing", "construction professionals", "infrastructure projects"],
      relatedIndustries: ["environmental"],
      cta: "Explore Construction Staffing"
    },
    {
      id: "environmental",
      title: "Environmental & Architecture Recruitment",
      description: "Sustainable design talent acquisition and environmental management recruitment. We source professionals for green building projects, environmental consulting, sustainable architecture, and infrastructure development.",
      icon: "🌱",
      keywords: ["environmental recruitment", "architecture staffing", "sustainable design", "green building"],
      relatedIndustries: ["construction"],
      cta: "View Environmental Recruitment"
    },
    {
      id: "finance",
      title: "Financial Services Recruitment",
      description: "Expert finance recruitment and banking staffing solutions. We place financial analysts, investment professionals, compliance officers, accountants, and financial advisors to support growth and regulatory compliance.",
      icon: "💼",
      keywords: ["finance recruitment", "banking staffing", "financial analysts", "investment professionals"],
      relatedIndustries: ["healthcare"],
      cta: "Discover Financial Services Recruitment"
    }
  ];

  // Cross-linking function to get related industry titles
  const getRelatedIndustryTitle = (industryId: string) => {
    const industry = industries.find(ind => ind.id === industryId);
    return industry ? industry.title : '';
  };

  // Generate structured data for all industries
  const generateIndustriesStructuredData = () => {
    const industriesData = industries.map(industry => {
      const seoConfig = INDUSTRY_SEO_CONFIGS[industry.id];
      return seoConfig ? seoConfig.structuredData : null;
    }).filter(Boolean);

    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Industry-Specific Recruitment Services",
      "description": "Specialized recruitment and staffing solutions across multiple industries",
      "itemListElement": industriesData.map((data, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": data
      }))
    };
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateIndustriesStructuredData())}
        </script>
      </Helmet>
      <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Industry-Specific Recruitment Solutions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Specialized staffing expertise across high-demand industries. Our recruitment specialists deliver targeted talent acquisition services for manufacturing, healthcare, automotive, aerospace, and financial services sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} id={`industry-${industry.id}`} className="p-6 shadow-card hover:shadow-elegant transition-smooth animate-scale-in group hover:border-primary/20">
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                {industry.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {industry.keywords.slice(0, 3).map((keyword, keyIndex) => (
                  <span key={keyIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
              
              {/* Cross-linking to related industries */}
              {industry.relatedIndustries.length > 0 && (
                <div className="border-t border-border pt-4 mt-4">
                  <p className="text-xs text-muted-foreground mb-2">Related Industries:</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.relatedIndustries.map((relatedId, relIndex) => (
                      <Button
                        key={relIndex}
                        variant="outline"
                        size="sm"
                        className="text-xs h-6 px-2"
                        onClick={() => {
                          // Scroll to related industry section
                          const relatedElement = document.getElementById(`industry-${relatedId}`);
                          if (relatedElement) {
                            relatedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }
                        }}
                      >
                        {getRelatedIndustryTitle(relatedId).split(' ')[0]}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
                  onClick={() => {
                    // This could link to a dedicated industry page in the future
                    console.log(`Navigate to ${industry.id} industry page`);
                  }}
                >
                  {industry.cta} →
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Specialized Industry Recruitment Expertise
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Our industry-specific recruitment specialists understand the unique talent requirements, 
            regulatory compliance needs, and market dynamics of each sector. From manufacturing recruitment 
            to healthcare staffing, we deliver targeted talent acquisition solutions that drive immediate results.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 text-sm">
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Manufacturing & Industrial</h4>
              <p className="text-muted-foreground">Production, quality control, lean manufacturing</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Healthcare & Life Sciences</h4>
              <p className="text-muted-foreground">Clinical, regulatory, medical technology</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Automotive & Aerospace</h4>
              <p className="text-muted-foreground">Engineering, design, defense contracting</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Financial Services</h4>
              <p className="text-muted-foreground">Banking, investment, compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Industries;