import Link from "next/link";

export default function CertificateSection() {
    // TODO: SHOW CERTIFICATES BY API
  return (
    <section className="lui-section lui-gradient-center" id="pricing-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Certificates </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                Where <b>Credentials Speak Volumes</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="pricing-items row">
            <div className="pricing-col center col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="label">
                <span> Developer & Programmer </span>
              </div>
              <div
                className="pricing-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="lui-subtitle" style={{ marginBottom: '20px' }}>
                  <span> Freelancing </span>
                </div>
                <div className="image">
                  <div className="img">
                    <Link legacyBehavior href={`#`}>
                      <a>
                        <img
                          loading="lazy"
                          decoding="async"
                          src={`assets/images/certificate-of-competence-moch-azmi-iskandar.jpg`}
                          alt={"Certificates"}
                          style={{ borderRadius: "10px", width: "100%" }}
                        />
                        <span className="overlay" />
                      </a>
                    </Link>
                  </div>
                </div>
                <a href="#contact-section" className="btn btn-solid">
                  <span>See My Qualifications</span>
                </a>
                <div
                  className="bg-img"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> Pricing </span>
          </div>
        </div>
      </div>
    </section>
  );
}
