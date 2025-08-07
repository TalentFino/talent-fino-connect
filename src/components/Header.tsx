import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Talent Fino
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="/services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="/case-studies" className="text-foreground hover:text-primary transition-smooth">
              Case Studies
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>
          
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;