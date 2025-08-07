import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Executive Search",
      description: "Find top-tier leadership talent for your organization's most critical positions.",
      features: ["C-level executives", "Senior management", "Specialized roles", "Confidential searches"]
    },
    {
      title: "Contract Staffing",
      description: "Flexible staffing solutions for temporary, contract, and project-based needs.",
      features: ["Project specialists", "Temporary coverage", "Flexible terms", "Quick deployment"]
    },
    {
      title: "Permanent Placement",
      description: "Full-time recruitment services across all industries and experience levels.",
      features: ["Industry expertise", "Cultural fit", "Long-term success", "Comprehensive screening"]
    },
    {
      title: "Talent Consulting",
      description: "Strategic workforce planning and talent acquisition consulting services.",
      features: ["Workforce strategy", "Market insights", "Process optimization", "Talent analytics"]
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
            Comprehensive recruitment solutions tailored to your unique needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-elegant transition-smooth animate-scale-in group">
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-smooth">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-smooth">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Custom Solutions for Every Industry
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We don't believe in "one-size-fits-all" staffing. Our solutions are tailored to your 
            industry, company culture, and specific requirements.
          </p>
          <Button variant="hero" size="lg">
            Discuss Your Needs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;