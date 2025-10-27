import { SEO } from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ORGANIZATION_SCHEMA } from '@/lib/seo/schemas';

const PrivacyPolicyPage = () => {
  const structuredData = ORGANIZATION_SCHEMA;

  return (
    <>
      <SEO
        title="Privacy Policy | Talent Fino - Data Protection & Privacy"
        description="Talent Fino's privacy policy outlines how we protect your personal information and your rights regarding data collection, usage, and opt-out options."
        keywords={['privacy policy', 'data protection', 'personal information', 'recruitment privacy', 'GDPR compliance']}
        path="/privacy-policy"
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
                  { label: 'Privacy Policy' }
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-6 max-w-4xl">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground mb-6">
                  Talent Fino ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our recruitment and staffing services.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Personal Information Statement</h2>
                <p className="text-muted-foreground mb-6">
                  <strong>We will NOT share your personal information for promotional purposes.</strong> Your personal data is collected solely for the purpose of providing recruitment and staffing services, and will only be shared with prospective employers with your explicit consent or as required by law.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Information We Collect</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Identification Information:</strong> Name, email address, phone number, mailing address, resume/CV, employment history, education credentials, and professional references.</li>
                    <li><strong>Communication Data:</strong> Messages, inquiries, and feedback you provide through our website, email, phone, or SMS.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data collected through cookies and similar technologies.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">How We Use Your Information</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide recruitment and staffing services</li>
                    <li>Match candidates with employment opportunities</li>
                    <li>Communicate with you about job openings and services</li>
                    <li>Process applications and facilitate interviews</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">SMS/Text Message Communications</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">If you opt in to receive text messages from us, the following applies:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Message Frequency:</strong> We may send you up to 4 messages per week regarding job opportunities, application updates, and recruitment services.</li>
                    <li><strong>Type of Messages:</strong> You will receive job alerts, interview reminders, application status updates, and recruitment-related notifications.</li>
                    <li><strong>Data Rates:</strong> Message and data rates may apply based on your mobile carrier's plan.</li>
                    <li><strong>Opt-Out Instructions:</strong> You can opt out of receiving text messages at any time by texting <strong>STOP</strong> to any message from Talent Fino. You will receive a confirmation message upon opt-out.</li>
                    <li><strong>Support:</strong> For help or questions, text <strong>HELP</strong> to our number or email us at support@talentfino.com</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Your Rights and Opt-Out Options</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request access to your personal information we hold</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time by:
                      <ul className="list-circle pl-6 mt-2 space-y-1">
                        <li>Clicking the "unsubscribe" link in any email</li>
                        <li>Texting <strong>STOP</strong> to opt out of SMS messages</li>
                        <li>Contacting us directly at privacy@talentfino.com</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Data Security</h2>
                <p className="text-muted-foreground mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Data Retention</h2>
                <p className="text-muted-foreground mb-6">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Candidate information is typically retained for up to 2 years for future job opportunities, unless you request earlier deletion.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground mb-6">
                  We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and deliver personalized content. You can control cookie preferences through your browser settings.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Third-Party Services</h2>
                <p className="text-muted-foreground mb-6">
                  We may share your information with trusted third-party service providers who assist us in operating our website and providing recruitment services. These providers are contractually obligated to protect your information and use it only for the purposes we specify.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Contact Information</h2>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-4">For questions, concerns, or to exercise your privacy rights, please contact us:</p>
                  <ul className="list-none space-y-2">
                    <li><strong>Email:</strong> privacy@talentfino.com</li>
                    <li><strong>Phone:</strong> +1 (307) 384-8094</li>
                    <li><strong>Address:</strong> 30 N Gould St, STE R, Sheridan, WY 82801, USA</li>
                    <li><strong>SMS Support:</strong> Text HELP for assistance</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </article>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
