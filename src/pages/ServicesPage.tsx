import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const services = [
    {
      title: "Direct Staffing (Permanent Placement)",
      description: "We source, screen, and place full-time employees who bring lasting value to your business. Our process ensures cultural alignment, technical competency, and long-term success.",
      features: [
        "Comprehensive candidate screening and assessment",
        "Cultural fit evaluation and compatibility testing",
        "Technical competency validation",
        "Reference verification and background checks",
        "Onboarding support and integration assistance",
        "90-day success guarantee"
      ],
      process: [
        "Role Analysis & Requirements Gathering",
        "Targeted Candidate Sourcing",
        "Multi-Stage Interview Process",
        "Final Selection & Offer Negotiation"
      ]
    },
    {
      title: "Executive Search",
      description: "Our executive recruiters identify and secure top-tier leaders who can drive business transformation. We focus on leadership qualities, industry experience, and strategic vision.",
      features: [
        "C-suite and senior leadership placement",
        "Confidential search capabilities",
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
      ]
    },
    {
      title: "Headhunting",
      description: "We proactively reach out to passive candidates—professionals not actively seeking roles but who perfectly fit your requirements.",
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
      ]
    },
    {
      title: "Contract Staffing",
      description: "Flexible workforce solutions for short-term projects, seasonal needs, or specialized expertise—delivered quickly to keep your operations running smoothly.",
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
      ]
    },
    {
      title: "Resume Sourcing",
      description: "Access a pre-qualified talent pipeline that reduces your time-to-hire and ensures you're always ready to fill critical roles.",
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
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Professional Recruitment & Staffing Solutions Tailored to Your Needs
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
                    
                    <Button variant="hero" size="lg">
                      Get Started
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
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              We understand that every organization has unique requirements. Let's discuss 
              how we can create a tailored recruitment solution that meets your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Service Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;