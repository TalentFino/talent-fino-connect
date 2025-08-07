import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Global Manufacturing Scale-Up",
      industry: "Manufacturing",
      challenge: "A leading manufacturing company needed to rapidly scale their engineering team to support a major product launch across multiple locations.",
      solution: "We deployed a comprehensive recruitment strategy combining direct staffing and contract solutions, leveraging our manufacturing expertise and global network.",
      results: [
        "50 engineers placed across 3 countries in 8 weeks",
        "95% retention rate after 1 year",
        "Project launched on schedule",
        "15% faster time-to-productivity"
      ],
      metrics: {
        timeline: "8 weeks",
        placements: "50",
        retention: "95%",
        satisfaction: "98%"
      }
    },
    {
      title: "Automotive Innovation Team",
      industry: "Automotive",
      challenge: "An automotive startup required specialized engineers and designers for their electric vehicle development program with tight confidentiality requirements.",
      solution: "Our headhunting specialists conducted a discrete search focusing on passive candidates with specific EV experience and innovation track records.",
      results: [
        "12 senior specialists recruited",
        "100% confidentiality maintained",
        "Average 20+ years industry experience",
        "Team fully operational in 6 weeks"
      ],
      metrics: {
        timeline: "6 weeks",
        placements: "12",
        retention: "100%",
        satisfaction: "100%"
      }
    },
    {
      title: "Healthcare System Expansion",
      industry: "Healthcare",
      challenge: "A healthcare organization needed to staff multiple new facilities with qualified professionals while maintaining strict regulatory compliance.",
      solution: "We created a dedicated recruitment pipeline combining permanent placements and contract staffing to ensure continuous coverage during the transition.",
      results: [
        "200+ healthcare professionals placed",
        "100% regulatory compliance maintained",
        "Zero service interruption",
        "Cost savings of 25% vs competitors"
      ],
      metrics: {
        timeline: "12 weeks",
        placements: "200+",
        retention: "92%",
        satisfaction: "96%"
      }
    },
    {
      title: "Financial Services Digital Transformation",
      industry: "Financial Services",
      challenge: "A traditional bank needed to build a new digital banking division with fintech expertise while maintaining regulatory requirements.",
      solution: "Executive search for leadership team combined with targeted recruitment for specialized roles in digital banking, cybersecurity, and compliance.",
      results: [
        "Complete C-suite placement in 10 weeks",
        "75 specialists hired across 6 departments",
        "Successful digital platform launch",
        "40% improvement in customer acquisition"
      ],
      metrics: {
        timeline: "16 weeks",
        placements: "80",
        retention: "97%",
        satisfaction: "99%"
      }
    },
    {
      title: "Aerospace Defense Contract",
      industry: "Aerospace & Defense",
      challenge: "A defense contractor won a major government contract requiring immediate deployment of security-cleared engineers and project managers.",
      solution: "Rapid deployment using our pre-qualified talent pipeline and specialized security clearance network to meet urgent staffing requirements.",
      results: [
        "30 cleared professionals deployed in 3 weeks",
        "All security requirements met",
        "Contract deliverables on schedule",
        "Client secured additional contracts"
      ],
      metrics: {
        timeline: "3 weeks",
        placements: "30",
        retention: "94%",
        satisfaction: "100%"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Real Success Stories from Our Client Partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className={`mb-20 ${index !== caseStudies.length - 1 ? 'border-b border-border pb-20' : ''}`}>
                <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 animate-fade-up">
                    <div className="flex items-center mb-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {study.industry}
                      </span>
                      <span className="text-muted-foreground text-sm">Case Study #{index + 1}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                      {study.title}
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">The Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">Our Solution</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">Results Achieved</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="animate-scale-in">
                    <Card className="p-6 shadow-elegant">
                      <h3 className="text-xl font-semibold mb-6 text-foreground">
                        Key Metrics
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-1">{study.metrics.timeline}</div>
                          <p className="text-sm text-muted-foreground">Timeline</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-1">{study.metrics.placements}</div>
                          <p className="text-sm text-muted-foreground">Successful Placements</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-1">{study.metrics.retention}</div>
                          <p className="text-sm text-muted-foreground">Retention Rate</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-1">{study.metrics.satisfaction}</div>
                          <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                        <p className="text-sm text-muted-foreground text-center">
                          <span className="font-semibold text-foreground">Result:</span> Project delivered successfully with exceptional client satisfaction
                        </p>
                      </div>
                    </Card>
                    
                    <div className="mt-6">
                      <Button variant="outline" size="lg" className="w-full">
                        Download Full Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Success Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Successful Projects</p>
            </Card>
            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Client Retention</p>
            </Card>
            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
              <div className="text-4xl font-bold text-primary mb-2">48h</div>
              <p className="text-muted-foreground">Avg. Response Time</p>
            </Card>
            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
              <div className="text-4xl font-bold text-primary mb-2">97%</div>
              <p className="text-muted-foreground">Placement Success</p>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              See how our expertise and proven methodology can help you achieve 
              similar results in your organization's talent acquisition goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;