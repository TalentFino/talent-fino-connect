import { Button } from "@/components/ui/button";
import { SEOLinks } from "./SEOLink";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Global Recruitment Solutions,
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Where Talent Meets Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            At Talent Fino, we deliver expert staffing solutions and talent acquisition services 
            that connect organizations with exceptional professionals across manufacturing, healthcare, 
            automotive, and aerospace industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <SEOLinks.Services>
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                Discover Our Recruitment Solutions
              </Button>
            </SEOLinks.Services>
            <SEOLinks.About>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-primary">
                Learn About Our Expertise
              </Button>
            </SEOLinks.About>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;