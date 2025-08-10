import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ScheduleConsultationDialog from "@/components/ScheduleConsultationDialog";


const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to find exceptional talent? Let's start the conversation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-fade-up">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Let's Discuss Your Hiring Needs
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking for a single specialist or building an entire team, 
              we're here to help you find the right talent for your organization.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground">contact@talentfino.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">Global offices serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 shadow-elegant animate-scale-in">
            <h3 className="text-xl font-bold mb-6 text-foreground">
              Schedule a Consultation
            </h3>
            <p className="text-muted-foreground mb-6">
              Ready to get started? Book a free consultation to discuss your hiring needs.
            </p>
            
            <div className="space-y-4">
              <ScheduleConsultationDialog triggerVariant="hero" triggerSize="lg" triggerClassName="w-full" />
              <Button variant="outline" size="lg" className="w-full">
                Download Our Brochure
              </Button>
              <Button variant="ghost" size="lg" className="w-full">
                View Case Studies
              </Button>
            </div>
            
            <div className="mt-8 p-6 bg-accent/10 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                We respond to all inquiries within 24 hours. For urgent hiring needs, 
                call us directly for immediate assistance.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;