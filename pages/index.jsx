import dynamic from "next/dynamic";
import Resume from "@components/Resume";
import Layout from "@layouts/Layout";
import HeroStarted from "@components/HeroStarted";
import ContactSection from "@components/ContactSection";
import ServicesSection from "@components/ServicesSection";
import SkillsSection from "@components/SkillsSection";
import CertificateSection from "@components/CertificateSection";
const PortfolioIsotope = dynamic(() => import("@components/PortfolioIsotope"), {
  ssr: false,
});
const Index = () => {
  return (
    
    <Layout pageClassName={"home dark-skin"}>
      {/* Section - Hero Started */}
      <HeroStarted />
      {/* Section - Services */}
      <ServicesSection />
      {/* Section - Skills */}
      <SkillsSection />
      {/* Section - Resume */}
      <Resume />
      {/* Section - Works */}
      <section className="lui-section lui-gradient-bottom" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Cases</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolios </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Certificates */}
      <CertificateSection />

      {/* Section - Contacts */}
      <ContactSection />
    </Layout>
  );
};
export default Index;
