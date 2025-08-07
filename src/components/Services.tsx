import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Direct Staffing (Permanent Placement)",
      description: "We source, screen, and place full-time employees who bring lasting value to your business. Our process ensures cultural alignment, technical competency, and long-term success.",
      features: ["Cultural alignment", "Technical competency", "Long-term success", "Comprehensive screening"]
    },
    {
      title: "Executive Search",
      description: "Our executive recruiters identify and secure top-tier leaders who can drive business transformation. We focus on leadership qualities, industry experience, and strategic vision.",
      features: ["Top-tier leaders", "Business transformation", "Leadership qualities", "Strategic vision"]
    },
    {
      title: "Headhunting",
      description: "We proactively reach out to passive candidates—professionals not actively seeking roles but who perfectly fit your requirements.",
      features: ["Passive candidates", "Proactive outreach", "Perfect fit matching", "Hidden talent access"]
    },
    {
      title: "Contract Staffing",
      description: "Flexible workforce solutions for short-term projects, seasonal needs, or specialized expertise—delivered quickly to keep your operations running smoothly.",
      features: ["Short-term projects", "Seasonal needs", "Specialized expertise", "Quick delivery"]
    },
    {
      title: "Resume Sourcing",
      description: "Access a pre-qualified talent pipeline that reduces your time-to-hire and ensures you're always ready to fill critical roles.",
      features: ["Pre-qualified talent", "Reduced time-to-hire", "Critical role readiness", "Talent pipeline access"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Professional Recruitment & Staffing - We offer a full spectrum of staffing services to help organizations fill permanent, temporary, and project-based roles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth animate-scale-in group">
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              <ul className="space-y-1 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-smooth">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Full Spectrum Staffing Solutions
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            From permanent placements to contract staffing, we deliver the right talent 
            solutions to meet your unique business requirements.
          </p>
          <Button variant="hero" size="lg">
            Discuss Your Staffing Needs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;