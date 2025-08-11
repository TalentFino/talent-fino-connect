import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GetStartedDialog from "@/components/GetStartedDialog";
import { ServiceLinks, SEOLinks } from "./SEOLink";

const Services = () => {
  const services = [
    {
      title: "Direct Staffing & Permanent Placement Services",
      description: "Professional direct staffing solutions for permanent placement needs. We source, screen, and place full-time employees who bring lasting value to your business. Our comprehensive recruitment process ensures cultural alignment, technical competency, and long-term success for direct hire positions.",
      features: ["Permanent placement expertise", "Direct hire recruitment", "Cultural alignment assessment", "Long-term staffing solutions"],
      altText: "Direct staffing and permanent placement recruitment services"
    },
    {
      title: "Executive Search & Leadership Recruitment",
      description: "Specialized executive search services and C-level recruitment solutions. Our executive recruiters identify and secure top-tier leaders who can drive business transformation. We focus on leadership qualities, industry experience, and strategic vision for senior executive positions.",
      features: ["C-suite recruitment", "Senior leadership search", "Executive headhunting", "Leadership assessment"],
      altText: "Executive search and leadership recruitment services"
    },
    {
      title: "Professional Headhunting Services",
      description: "Expert headhunting and candidate sourcing for hard-to-fill positions. We proactively reach out to passive candidates—professionals not actively seeking roles but who perfectly fit your specialized requirements and industry needs.",
      features: ["Passive candidate sourcing", "Specialized recruitment", "Industry-specific headhunting", "Hidden talent acquisition"],
      altText: "Professional headhunting and candidate sourcing services"
    },
    {
      title: "Contract Staffing & Temporary Solutions",
      description: "Flexible contract staffing and temporary workforce solutions for short-term projects, seasonal needs, or specialized expertise. Our contract recruitment services are delivered quickly to keep your operations running smoothly with qualified temporary staff.",
      features: ["Temporary staffing solutions", "Project-based recruitment", "Contract worker placement", "Flexible workforce management"],
      altText: "Contract staffing and temporary workforce solutions"
    },
    {
      title: "Resume Sourcing & Talent Pipeline Development",
      description: "Professional resume sourcing and candidate database services. Access a pre-qualified talent pipeline that reduces your time-to-hire and ensures you're always ready to fill critical roles with top-quality candidates from our extensive recruitment network.",
      features: ["Candidate database access", "Talent pipeline management", "Resume screening services", "Recruitment sourcing solutions"],
      altText: "Resume sourcing and talent pipeline development services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Professional Recruitment & Staffing Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive recruitment solutions and staffing services - We offer a full spectrum of executive search, direct staffing, and contract staffing solutions to help organizations fill permanent, temporary, and project-based roles across all industries.
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
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" aria-hidden="true"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="w-full group-hover:border-primary group-hover:text-primary transition-smooth"
                onClick={() => {
                  const serviceSlug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  window.location.href = `/learn-more?service=${serviceSlug}`;
                }}
                aria-label={`Learn more about ${service.altText}`}
              >
                Learn More About Our Services
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Comprehensive Recruitment & Staffing Solutions
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            From permanent placement and executive search to contract staffing and headhunting services, we deliver the right recruitment solutions to meet your unique business requirements across all industries.
          </p>
          <GetStartedDialog triggerVariant="hero" triggerSize="lg" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" aria-label="Contact us to discuss your recruitment and staffing needs">
              Discuss Your Recruitment Needs
            </Button>
            <SEOLinks.Services>
              <Button variant="outline" size="lg" aria-label="View detailed recruitment and staffing services">
                View All Services
              </Button>
            </SEOLinks.Services>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;