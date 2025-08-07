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
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="animate-fade-up">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              We understand that every hiring challenge is unique
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Talent Fino, we specialize in customized recruitment solutions that connect 
              organizations with exceptional talent across industries. We understand that every 
              hiring challenge is unique—so we don't believe in "one-size-fits-all" staffing.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our approach blends strategic workforce planning, deep industry expertise, and access 
              to a global talent network to deliver direct hire, executive search, contract staffing, 
              and resume sourcing solutions that meet your needs today while preparing you for tomorrow.
            </p>
            
            <h4 className="text-xl font-semibold mb-4 text-foreground">
              Why Clients Choose Talent Fino:
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span><span className="font-semibold text-foreground">Tailored Staffing Strategies</span> – Every hiring solution is designed to match your specific role requirements, culture, and growth plans.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span><span className="font-semibold text-foreground">Fast & Reliable Delivery</span> – We connect you with qualified, vetted candidates quickly—without compromising on quality.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span><span className="font-semibold text-foreground">Industry-Specific Recruiters</span> – Our team understands the skills and trends driving your sector.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span><span className="font-semibold text-foreground">End-to-End Hiring Support</span> – From role definition to onboarding, we manage the entire recruitment lifecycle.</span>
              </li>
            </ul>
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
            More Than Just Candidates
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            With Talent Fino, you gain more than just candidates, you gain a long-term talent partner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;