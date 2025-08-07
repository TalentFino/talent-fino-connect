import { Card } from "@/components/ui/card";
import teamIcon from "@/assets/team-icon.jpg";
import globalIcon from "@/assets/global-icon.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Us – Talent Fino
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Recruitment & Staffing Solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-up">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              We understand that every hiring challenge is unique
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Talent Fino, we specialize in customized recruitment solutions that connect 
              organizations with exceptional talent across industries. We understand that every 
              hiring challenge is unique—so we don't believe in "one-size-fits-all" staffing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach combines global reach with local expertise, ensuring we find the 
              perfect match for your organization's specific needs and culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth animate-scale-in">
              <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden">
                <img src={teamIcon} alt="Team collaboration" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                Expert Team
              </h4>
              <p className="text-muted-foreground">
                Experienced recruiters who understand your industry inside and out.
              </p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth animate-scale-in">
              <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden">
                <img src={globalIcon} alt="Global network" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                Global Reach
              </h4>
              <p className="text-muted-foreground">
                International network with deep local market knowledge.
              </p>
            </Card>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Ready to Transform Your Hiring Process?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our customized recruitment solutions can help you find 
            the exceptional talent your organization needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;