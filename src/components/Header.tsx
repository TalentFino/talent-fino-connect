import GetStartedDialog from "@/components/GetStartedDialog";
import ScheduleConsultationDialog from "@/components/ScheduleConsultationDialog";
import { SEOLinks } from "./SEOLink";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <SEOLinks.Home 
            aria-label="Talent Fino - Global Recruitment Solutions | Where Talent Meets Excellence" 
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
          >
            Talent Fino
          </SEOLinks.Home>
          
          <div className="hidden md:flex items-center space-x-8">
            <SEOLinks.About 
              className="text-foreground hover:text-primary transition-smooth"
              aria-label="About Talent Fino - Expert Recruitment & Staffing Solutions"
            >
              About
            </SEOLinks.About>
            <SEOLinks.Services 
              className="text-foreground hover:text-primary transition-smooth"
              aria-label="Professional Recruitment & Staffing Services"
            >
              Services
            </SEOLinks.Services>
            <SEOLinks.CaseStudies 
              className="text-foreground hover:text-primary transition-smooth"
              aria-label="Recruitment Success Stories & Case Studies"
            >
              Case Studies
            </SEOLinks.CaseStudies>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-smooth"
              aria-label="Contact Talent Fino for recruitment and staffing services"
            >
              Contact
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <ScheduleConsultationDialog triggerVariant="outline" triggerSize="sm" />
            <GetStartedDialog triggerVariant="hero" triggerSize="sm" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
