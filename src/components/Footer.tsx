import { FooterInternalLinks } from './RelatedLinks';
import { SEOLink } from './SEOLink';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Talent Fino</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Global recruitment solutions and staffing services delivered with local expertise.
              We connect organizations with exceptional talent across manufacturing, healthcare, automotive, and aerospace industries.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/talentfino"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center hover:bg-accent transition-smooth"
                aria-label="Follow Talent Fino on Twitter for recruitment industry insights"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/talentfino-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center hover:bg-accent transition-smooth"
                aria-label="Connect with Talent Fino on LinkedIn for professional recruitment updates"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* SEO-optimized internal links */}
          <FooterInternalLinks />
        </div>

        {/* Additional SEO footer links */}
        <div className="border-t border-primary-light mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <h5 className="font-semibold mb-2 text-primary-foreground">Quick Links</h5>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <SEOLink
                  to="/about"
                  keywords={['recruitment expertise', 'staffing company']}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Our Expertise
                </SEOLink>
                <SEOLink
                  to="/case-studies"
                  keywords={['recruitment success stories', 'client testimonials']}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Success Stories
                </SEOLink>
                <SEOLink
                  to="/learn-more"
                  keywords={['recruitment process', 'staffing methodology']}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Our Process
                </SEOLink>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-2 text-primary-foreground">Service Areas</h5>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <SEOLink
                  to="/services"
                  keywords={['permanent placement', 'direct hire recruitment']}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Permanent Placement
                </SEOLink>
                <SEOLink
                  to="/services"
                  keywords={['temporary staffing', 'contract recruitment']}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Temporary Staffing
                </SEOLink>
                <SEOLink
                  to="/services"
                  keywords={['executive search', 'leadership recruitment']}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Executive Search
                </SEOLink>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-2 text-primary-foreground">Contact</h5>
              <div className="text-sm text-primary-foreground/80">
                <p>Global Recruitment Solutions</p>
                <p>Where Talent Meets Excellence</p>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                  aria-label="Contact Talent Fino for recruitment and staffing services"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-primary-foreground/60 text-sm">
            <p>&copy; 2025 Talent Fino. All rights reserved. | Global Recruitment Solutions & Staffing Services | Where Talent Meets Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;