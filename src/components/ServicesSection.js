import { servicesSliderProps } from "../../src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ServicesSection() {
  return (
    <section className="lui-section lui-gradient-bottom" id="services-section">
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
                    Specializing in comprehensive web solutions using HTML, CSS,
                    JavaScript, ReactJS, InertiaJS, PHP, CodeIgniter, Laravel,
                    and MySQL.{" "}
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
                      I have experience with Docker in creating, deploying, and
                      running applications. This ensures efficiency, consistent
                      environments, and easier collaboration.
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
                    With experience as a photographer and editor, I also possess
                    skills in using tools like Figma and Photoshop to design
                    visual content, enhancing the aesthetics and functionality
                    of digital platforms.{" "}
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
                      I've developed e-commerce websites with technologies like
                      Laravel 9. My expertise enables efficient handling of
                      sales, inventory, and customer interactions, delivering
                      effective solutions.
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
  );
}
