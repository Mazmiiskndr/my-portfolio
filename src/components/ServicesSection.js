import { servicesSliderProps } from "../../src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFetchServices } from "@hooks/useFetchServices";
import React from "react";

export default function ServicesSection() {
  const [servicesData, servicesLoading] = useFetchServices();
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
          {servicesLoading ? (
            <div>Loading services...</div>
          ) : (
            <Swiper
              {...servicesSliderProps}
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              {servicesData && servicesData.length > 0 ? (
                servicesData.map((service) => (
                  <SwiperSlide
                    className="swiper-slide"
                    key={`service-${service.id}`}
                  >
                    <div className="services-item">
                      <div className="lui-subtitle">
                        <span> {service.title} </span>
                      </div>
                      <div className="icon" />
                      <h5 className="lui-title">
                        <span> {service.subtitle} </span>
                      </h5>
                      <div className="lui-text">
                        <div> {service.description} </div>
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
                ))
              ) : (
                <div>No Services Data Available</div>
              )}
              <div className="swiper-pagination" />
            </Swiper>
          )}
          <div className="lui-bgtitle">
            <span> Services </span>
          </div>
        </div>
      </div>
    </section>
  );
}
