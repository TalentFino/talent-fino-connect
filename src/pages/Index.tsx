import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PAGE_SEO_CONFIGS } from "@/lib/seo/constants";

const Index = () => {
  const homeSEO = PAGE_SEO_CONFIGS.home;
  
  return (
    <div className="min-h-screen">
      <SEO
        title={homeSEO.title}
        description={homeSEO.description}
        keywords={homeSEO.keywords}
        path="/"
        structuredData={homeSEO.structuredData}
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
