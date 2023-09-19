import Link from "next/link";
import { useFetchCertificates } from "@hooks/useFetchCertificate";
const ASSETS_PATH = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
import { motion } from "framer-motion";

export default function CertificateSection({ noViewMore }) {
  const fetchOptions = noViewMore ? {} : { limit: 3 };
  const [certificatesData, certificatesLoading] =
    useFetchCertificates(fetchOptions);
  // Display loading if still loading
  if (certificatesLoading) return <div>Loading...</div>;

  // Display message if there is no data
  if (certificatesData.length === 0)
    return <div className="text-center">No Certificates Data Available</div>;
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
            {certificatesData.map((certificate, index) => (
              <div
                className="pricing-col center col-xs-12 col-sm-6 col-md-6 col-lg-4"
                key={index}
              >
                <div className="label">
                  <span> {certificate.title} </span>
                </div>
                <div
                  className="pricing-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div
                    className="lui-subtitle"
                    style={{
                      marginBottom: "20px",
                      height: "2.4em",
                      lineHeight: "1.2em",
                      overflow: "hidden",
                    }}
                  >
                    <span> {certificate.subtitle} </span>
                  </div>
                  <div className="image">
                    <div className="img">
                      <Link
                        legacyBehavior
                        href={`/certificate-single/${certificate.slug}`}
                      >
                        <a>
                          <motion.img
                            loading="lazy"
                            decoding="async"
                            src={ASSETS_PATH + certificate.image}
                            alt={certificate.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05 }}
                            style={{ borderRadius: "10px", width: "100%" }}
                          />
                          <span className="overlay" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <motion.a
                    href={`/certificate-single/${certificate.slug}`}
                    className="btn btn-solid"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                  >
                    <span>See My Qualifications</span>
                  </motion.a>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          {!noViewMore && (
            <div className="load-more-link" style={{ marginTop: "30px" }}>
              <Link legacyBehavior href="/certificates">
                <a
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>View More</span>
                </a>
              </Link>
            </div>
          )}
          <div className="lui-bgtitle">
            <span> Certificates </span>
          </div>
        </div>
      </div>
    </section>
  );
}
