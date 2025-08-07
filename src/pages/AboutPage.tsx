import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Talent Fino
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Your trusted partner in global talent solutions with local expertise
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="animate-fade-up">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded with a vision to revolutionize the recruitment industry, Talent Fino emerged 
                  from the understanding that every organization's hiring needs are unique and deserve 
                  a personalized approach.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We recognized the gap in the market for a recruitment partner that combines global 
                  reach with deep local expertise, strategic thinking with practical execution, and 
                  cutting-edge technology with human insight.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we stand as a trusted partner to organizations worldwide, helping them build 
                  teams that drive success and innovation in their respective industries.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Successful Placements</p>
                </Card>
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <p className="text-muted-foreground">Industry Specializations</p>
                </Card>
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </Card>
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">24h</div>
                  <p className="text-muted-foreground">Response Time</p>
                </Card>
              </div>
            </div>
            
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To connect exceptional talent with organizations that value their potential, 
                  creating partnerships that drive mutual success and industry advancement. 
                  We believe in the power of the right match to transform both careers and companies.
                </p>
              </Card>
              
              <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in strategic talent acquisition, recognized for our 
                  innovative approach, deep industry expertise, and unwavering commitment to 
                  delivering recruitment solutions that exceed expectations.
                </p>
              </Card>
            </div>
            
            {/* Values */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Excellence</h4>
                  <p className="text-sm text-muted-foreground">Delivering exceptional results in every engagement</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🤝</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Integrity</h4>
                  <p className="text-sm text-muted-foreground">Honest, transparent partnerships built on trust</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🚀</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Cutting-edge solutions for modern challenges</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🌍</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Partnership</h4>
                  <p className="text-sm text-muted-foreground">Long-term relationships that drive success</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Ready to Partner with Us?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discover how our expertise and commitment can help you build the team 
                that will drive your organization's success.
              </p>
              <Button variant="hero" size="lg">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;