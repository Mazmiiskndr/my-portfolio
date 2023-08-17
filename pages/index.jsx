import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "@components/Resume";
import Layout from "@layouts/Layout";
import { servicesSliderProps } from "../src/sliderProps";
import { useFetchAbout } from "@hooks/useFetchAbout";
import HeroStarted from "@components/HeroStarted";
import ContactSection from "@components/ContactSection";
const PortfolioIsotope = dynamic(() => import("@components/PortfolioIsotope"), {
  ssr: false,
});
const Index = () => {
  const [aboutData, aboutLoading] = useFetchAbout();
  return (
    <Layout pageClassName={"home dark-skin"}>
      {/* Section - Hero Started */}
      <HeroStarted aboutData={aboutData} aboutLoading={aboutLoading} />
      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="services-section"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> What I Do </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...servicesSliderProps}
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Full Stack Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Web Development </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      Specializing in comprehensive web solutions using HTML,
                      CSS, JavaScript, ReactJS, InertiaJS, PHP, CodeIgniter,
                      Laravel, and MySQL.{" "}
                    </div>
                  </div>
                  <a href="#works-section" className="lnk">
                    {" "}
                    See Portfolio{" "}
                  </a>
                  <img
                    className="image"
                    src="assets/images/pat-2.png"
                    alt="PAT 2"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Docker Implementation </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Containerization </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        I have experience with Docker in creating, deploying,
                        and running applications. This ensures efficiency,
                        consistent environments, and easier collaboration.
                      </p>
                    </div>
                  </div>
                  <a href="#works-section" className="lnk">
                    {" "}
                    See Portfolio{" "}
                  </a>
                  <img
                    className="image"
                    src="assets/images/pat-2.png"
                    alt="Pat 2"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> API Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> API Design & Integration </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      I've developed various APIs, including RESTful, to connect
                      systems. This enhances user experience and functionality
                      through dynamic and interconnected solutions.{" "}
                    </div>
                  </div>
                  <a href="#works-section" className="lnk">
                    {" "}
                    See Portfolio{" "}
                  </a>
                  <img
                    className="image"
                    src="assets/images/pat-2.png"
                    alt="Pat 2"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Graphic Design and Editing </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Design & Editing </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      With experience as a photographer and editor, I also
                      possess skills in using tools like Figma and Photoshop to
                      design visual content, enhancing the aesthetics and
                      functionality of digital platforms.{" "}
                    </div>
                  </div>
                  <a href="#works-section" className="lnk">
                    {" "}
                    See Portfolio{" "}
                  </a>
                  <img
                    className="image"
                    src="assets/images/pat-2.png"
                    alt="Pat 2"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> E-commerce Platform Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> E-commerce Solutions </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        I've developed e-commerce websites with technologies
                        like Laravel 9. My expertise enables efficient handling
                        of sales, inventory, and customer interactions,
                        delivering effective solutions.
                      </p>
                    </div>
                  </div>
                  <a href="#works-section" className="lnk">
                    {" "}
                    See Portfolio{" "}
                  </a>
                  <img
                    className="image"
                    src="assets/images/pat-2.png"
                    alt="Pat 2"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Talent</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> PHP </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Utilizing PHP in various projects, I've developed
                          complex web applications and integrated with different
                          databases, including utilizing frameworks like Laravel
                          and etc.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Laravel </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Specializing in Laravel, I've used it in 90% of my
                          e-commerce and web projects, providing robust,
                          scalable solutions that ensure efficiency and
                          adaptability to various business needs.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> JavaScript </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          With 75% proficiency, I've leveraged JavaScript to
                          create interactive and dynamic user experiences across
                          multiple projects, including React, InertiaJS and
                          VueJS.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "75%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        75 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Docker </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          With 70% proficiency in Docker, I've effectively
                          created, deployed, and run applications using
                          containers, ensuring consistent environments and
                          enhancing collaboration.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "70%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        70 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Tailwind CSS </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          With 80% proficiency in Tailwind CSS, I've created
                          responsive and modern designs for various websites,
                          making them both visually appealing and user-friendly.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "80%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        80 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Figma </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          I have achieved 75% proficiency in Figma, using it to
                          create user-friendly design interfaces and prototypes,
                          supporting both individual and collaborative design
                          projects.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "75%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        75 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

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
      <section className="lui-section lui-gradient-top" id="blog-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Latest Blog </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Articles and Advice</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Archive */}
        <div className="v-line v-line-right">
          <div className="container">
            <div className="blog-items row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="assets/images/single7.jpg"
                          alt="The Main Thing For The Designer"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>October 31, 2022</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-single">
                        <a>The Main Thing For The Designer</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                        Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                        mattis. Aliquam vel sem vel velit efficitur malesuada.
                        Donec arcu lacus, ornare eget…{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="assets/images/blog-4-scaled-1.jpg"
                          alt="Follow Your Own Design Process"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>October 31, 2022</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-single">
                        <a>Follow Your Own Design Process</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                        Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                        mattis. Aliquam vel sem vel velit efficitur malesuada.
                        Donec arcu lacus, ornare eget…{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="assets/images/blog-2.jpg"
                          alt="Usability Secrets to Create Better Interfaces"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>November 28, 2021</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-single">
                        <a>Usability Secrets to Create Better Interfaces</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                        Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                        mattis. Aliquam vel sem vel velit efficitur malesuada.
                        Donec arcu lacus, ornare eget…{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="load-more">
              <Link legacyBehavior href="/blog">
                <a
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>View Blog</span>
                </a>
              </Link>
            </div>
            <div className="lui-bgtitle">
              <span> Blog </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Contacts */}
      <ContactSection aboutData={aboutData} aboutLoading={aboutLoading} /> 
    </Layout>
  );
};
export default Index;
