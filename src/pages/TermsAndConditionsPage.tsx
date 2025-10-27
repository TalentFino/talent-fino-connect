import { SEO } from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ORGANIZATION_SCHEMA } from '@/lib/seo/schemas';

const TermsAndConditionsPage = () => {
  const structuredData = ORGANIZATION_SCHEMA;

  return (
    <>
      <SEO
        title="Terms and Conditions | Talent Fino - Service Agreement"
        description="Read Talent Fino's terms and conditions for using our recruitment and staffing services. Understand your rights, responsibilities, and our service policies."
        keywords={['terms and conditions', 'service agreement', 'recruitment terms', 'staffing policy', 'user agreement']}
        path="/terms-and-conditions"
        ogImage="/og-images/default-og.jpg"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          <section className="py-12 bg-gradient-subtle">
            <div className="container mx-auto px-6">
              <Breadcrumb 
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Terms and Conditions' }
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-6">
                Terms and Conditions
              </h1>
              <p className="text-xl text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-6 max-w-4xl">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground mb-6">
                  Welcome to Talent Fino. By accessing our website or using our recruitment and staffing services, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Company Information</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">These Terms are between you and:</p>
                  <ul className="list-none space-y-2">
                    <li><strong>Brand Name:</strong> Talent Fino</li>
                    <li><strong>Legal Entity:</strong> Talent Fino Consulting</li>
                    <li><strong>Business Type:</strong> Recruitment and Staffing Services</li>
                    <li><strong>Address:</strong> 30 N Gould St, STE R, Sheridan, WY 82801, USA</li>
                    <li><strong>Contact:</strong> support@talentfino.com | +1 (307) 384-8094</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Personal Information Statement</h2>
                <p className="text-muted-foreground mb-6">
                  <strong>We will NOT share your personal information for promotional purposes.</strong> Any personal data collected through our services is used exclusively for recruitment and staffing purposes and will only be shared with prospective employers with your explicit consent or as legally required.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Services Provided</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">Talent Fino provides the following recruitment and staffing services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Permanent placement and direct hire recruitment</li>
                    <li>Temporary staffing and contract recruitment</li>
                    <li>Executive search and leadership recruitment</li>
                    <li>Industry-specific talent acquisition (manufacturing, healthcare, automotive, aerospace)</li>
                    <li>Global recruitment solutions with local expertise</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">SMS/Text Message Terms</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">By providing your mobile phone number and opting in, you consent to receive text messages from Talent Fino. The following terms apply:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Type of Messages:</strong> You will receive job opportunity alerts, interview reminders, application status updates, recruitment service notifications, and other employment-related communications.</li>
                    <li><strong>Message Frequency:</strong> You may receive up to 4 messages per week. Actual frequency may vary based on job availability and your application activity.</li>
                    <li><strong>Data Rates:</strong> Message and data rates may apply based on your mobile carrier's plan. Please check with your carrier for details.</li>
                    <li><strong>Opt-Out Information:</strong> You can unsubscribe from text messages at any time by texting <strong>STOP</strong> to any message from Talent Fino. You will receive a confirmation message upon successful opt-out.</li>
                    <li><strong>Support Contact:</strong> For assistance or questions about SMS services:
                      <ul className="list-circle pl-6 mt-2 space-y-1">
                        <li>Text <strong>HELP</strong> to our number for automated assistance</li>
                        <li>Email: support@talentfino.com</li>
                        <li>Phone: +1 (307) 384-8094</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">User Responsibilities</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">As a user of our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Update your information promptly when it changes</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Not misrepresent your qualifications or employment history</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not use our services for any unlawful or fraudulent purpose</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Candidate Terms</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">For job seekers using our services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Submission of your resume/CV grants us permission to present it to prospective employers</li>
                    <li>We will seek your consent before submitting your information to specific employers</li>
                    <li>You are free to apply directly to employers or work with other recruitment agencies</li>
                    <li>We reserve the right to reject applications that do not meet employer requirements</li>
                    <li>Job offers are made by employers, not Talent Fino</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Employer/Client Terms</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">For organizations using our recruitment services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Specific engagement terms will be outlined in separate service agreements</li>
                    <li>Placement fees and payment terms are subject to individual contracts</li>
                    <li>Clients agree not to hire candidates presented by Talent Fino without proper notification and fee payment</li>
                    <li>Replacement guarantees are provided as specified in service agreements</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Intellectual Property</h2>
                <p className="text-muted-foreground mb-6">
                  All content on our website, including text, graphics, logos, and software, is the property of Talent Fino or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">
                  Talent Fino acts as an intermediary between candidates and employers. We are not liable for employment decisions, workplace conditions, compensation disputes, or any issues arising from the employment relationship. Our liability is limited to the extent permitted by law.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Disclaimer of Warranties</h2>
                <p className="text-muted-foreground mb-6">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee specific employment outcomes or the accuracy of third-party information.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Privacy and Data Protection</h2>
                <p className="text-muted-foreground mb-6">
                  Your use of our services is also governed by our Privacy Policy. Please review our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Termination</h2>
                <p className="text-muted-foreground mb-6">
                  We reserve the right to terminate or suspend your access to our services at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Governing Law</h2>
                <p className="text-muted-foreground mb-6">
                  These Terms are governed by the laws of the State of Wyoming, USA, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be resolved in the courts of Wyoming.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Changes to Terms</h2>
                <p className="text-muted-foreground mb-6">
                  We may modify these Terms at any time. Material changes will be notified via email or prominent notice on our website. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Contact Us</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">For questions about these Terms and Conditions, please contact us:</p>
                  <ul className="list-none space-y-2">
                    <li><strong>Email:</strong> support@talentfino.com</li>
                    <li><strong>Phone:</strong> +1 (307) 384-8094 or +1 (307) 384-8117</li>
                    <li><strong>Address:</strong> 30 N Gould St, STE R, Sheridan, WY 82801, USA</li>
                    <li><strong>SMS Support:</strong> Text HELP for assistance</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg mt-8">
                  <p className="text-sm text-muted-foreground">
                    By using Talent Fino's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
