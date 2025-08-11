import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PAGE_SEO_CONFIGS, ORGANIZATION_SCHEMA } from "@/lib/seo/constants";
import { Breadcrumb, BreadcrumbConfigs } from "@/components/Breadcrumb";
import { RelatedLinks, RelatedLinksData } from "@/components/RelatedLinks";
import { SEOLinks } from "@/components/SEOLink";

const AboutPage = () => {
  const aboutSEO = PAGE_SEO_CONFIGS.about;
  
  // Enhanced structured data for About page with company information
  const aboutStructuredData = {
    ...ORGANIZATION_SCHEMA,
    "@type": "AboutPage",
    "mainEntity": {
      ...ORGANIZATION_SCHEMA,
      "numberOfEmployees": "50-100",
      "foundingLocation": "Global",
      "awards": [
        "Top Recruitment Agency 2023",
        "Excellence in Staffing Solutions"
      ],
      "serviceArea": {
        "@type": "Place",
        "name": "Worldwide"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={aboutSEO.title}
        description={aboutSEO.description}
        keywords={aboutSEO.keywords}
        path="/about"
        structuredData={aboutStructuredData}
      />
      <Header />
      
      {/* Breadcrumb Navigation */}
      <section className="pt-24 pb-4 bg-background">
        <div className="container mx-auto px-6">
          <Breadcrumb items={BreadcrumbConfigs.about} />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Talent Fino - Expert Recruitment & Staffing Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Your trusted partner in global recruitment solutions and talent acquisition expertise
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="animate-fade-up">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Our Story - Leading Recruitment & Staffing Expertise
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded with a vision to revolutionize the recruitment industry, Talent Fino emerged 
                  from the understanding that every organization's talent acquisition needs are unique and deserve 
                  a personalized staffing approach. Our expertise spans executive search, direct staffing, and specialized recruitment solutions.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We recognized the gap in the market for a recruitment partner that combines global 
                  talent sourcing with deep local expertise, strategic workforce planning with practical execution, and 
                  cutting-edge recruitment technology with human insight in staffing solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we stand as a trusted recruitment partner to organizations worldwide, helping them build 
                  exceptional teams through our comprehensive staffing services that drive success and innovation across industries.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Successful Placements</p>
                </Card>
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <p className="text-muted-foreground">Industry Specializations</p>
                </Card>
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </Card>
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">24h</div>
                  <p className="text-muted-foreground">Response Time</p>
                </Card>
              </div>
            </div>
            
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission - Excellence in Recruitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To connect exceptional talent with organizations that value their potential through expert recruitment services, 
                  creating staffing partnerships that drive mutual success and industry advancement. 
                  We believe in the power of strategic talent acquisition to transform both careers and companies.
                </p>
              </Card>
              
              <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision - Global Staffing Leadership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in strategic talent acquisition and staffing solutions, recognized for our 
                  innovative recruitment approach, deep industry expertise, and unwavering commitment to 
                  delivering comprehensive staffing services that exceed client expectations worldwide.
                </p>
              </Card>
            </div>
            
            {/* Values */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent">
                Our Core Values - Recruitment Excellence Standards
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Recruitment Excellence</h4>
                  <p className="text-sm text-muted-foreground">Delivering exceptional staffing results in every talent acquisition engagement</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🤝</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Integrity</h4>
                  <p className="text-sm text-muted-foreground">Honest, transparent partnerships built on trust</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🚀</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Cutting-edge solutions for modern challenges</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🌍</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Strategic Partnership</h4>
                  <p className="text-sm text-muted-foreground">Long-term recruitment partnerships that drive staffing success</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Ready to Partner with Our Recruitment Experts?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discover how our recruitment expertise and staffing commitment can help you build the exceptional team 
                that will drive your organization's success through strategic talent acquisition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SEOLinks.Services>
                  <Button variant="hero" size="lg">
                    Explore Our Services
                  </Button>
                </SEOLinks.Services>
                <SEOLinks.CaseStudies>
                  <Button variant="outline" size="lg">
                    View Success Stories
                  </Button>
                </SEOLinks.CaseStudies>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <RelatedLinks 
            title="Learn More About Our Expertise"
            links={RelatedLinksData.aboutPageLinks}
            variant="card"
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;