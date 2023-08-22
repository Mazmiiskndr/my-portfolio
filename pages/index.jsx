import dynamic from "next/dynamic";
import Resume from "@components/Resume";
import Layout from "@layouts/Layout";
import HeroStarted from "@components/HeroStarted";
import ContactSection from "@components/ContactSection";
import ServicesSection from "@components/ServicesSection";
import SkillsSection from "@components/SkillsSection";
import BlogSection from "@components/BlogSection";
const PortfolioIsotope = dynamic(() => import("@components/PortfolioIsotope"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout pageClassName={"home dark-skin"}>
      {/* Section - Hero Started */}
      <HeroStarted />
      {/* Section - Services */}
      <ServicesSection/>
      {/* Section - Skills */}
      <SkillsSection/>
      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
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
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Resume */}
      <Resume />
      {/* TODO: */}
      {/* Section - Blog */}
      <BlogSection/>  
      {/* Section - Contacts */}
      <ContactSection /> 
    </Layout>
  );
};
export default Index;
