import { Card } from "@/components/ui/card";

const Industries = () => {
  const industries = [
    {
      title: "Manufacturing Recruitment",
      description: "Skilled workers, engineers, and operations leaders who keep production moving efficiently.",
      icon: "⚙️"
    },
    {
      title: "Automotive Staffing",
      description: "Engineers, designers, and technicians for the evolving automotive landscape.",
      icon: "🚗"
    },
    {
      title: "Life Sciences & Healthcare",
      description: "Specialists with technical knowledge and regulatory expertise.",
      icon: "🔬"
    },
    {
      title: "Aerospace & Defense",
      description: "High-security, high-skill roles for mission-critical projects.",
      icon: "✈️"
    },
    {
      title: "Construction & Civil Engineering",
      description: "From architects to site supervisors, we source professionals to deliver projects on time.",
      icon: "🏗️"
    },
    {
      title: "Environmental & Architecture",
      description: "Talent for sustainable design, infrastructure, and environmental management.",
      icon: "🌱"
    },
    {
      title: "Financial Services",
      description: "Analysts, compliance officers, and finance professionals to maintain growth and compliance.",
      icon: "💼"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Sector-Specific Staffing Expertise - Our recruitment experts specialize in hiring across a variety of high-demand industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth animate-scale-in group hover:border-primary/20">
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                {industry.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {industry.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Industry Expertise That Delivers Results
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Our sector-specific recruiters understand the unique challenges, skills requirements, 
            and market dynamics of your industry, ensuring we find candidates who can make an 
            immediate impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;