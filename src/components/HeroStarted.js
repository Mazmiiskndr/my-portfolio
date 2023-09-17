import { useAboutData } from "@context/AboutDataContext";
import SocialLink from "./SocialLink";
import { motion } from "framer-motion";
// Variants untuk animasi
const containerVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

// Variants untuk animasi
const textVariants = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
};

// Transisi
const textTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
  duration: 1
};

export default function HeroStarted({ aboutLoading }) {
  const aboutData = useAboutData();

  if (aboutLoading) return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Loading...
    </motion.div>
  );

  const {
    name,
    position,
    github,
    instagram,
    facebook,
    email,
    whatsapp,
    linkedin,
    resume,
    year_of_experience,
    complete_projects,
    description,
  } = aboutData[0] || {};

  return (
    <motion.section
      className="lui-section lui-section-hero lui-gradient-top"
      id="started-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="container">
        {/* Hero Started */}
        <div className="lui-started v-line v-line-left">
          <div className="section hero-started">
            <div className="content" data-animate="active">
              <div className="titles">
                <div className="lui-subtitle">
                  <span>
                    {" "}
                    Hello, <b>my name is</b>
                  </span>
                </div>
                <h1
                  className="title"
                  data-splitting="chars"
                  data-animate="active"
                >
                  <span>
                    <b>
                      {name
                        ? name.split(" ").slice(0, 2).join(" ")
                        : "Moch Azmi"}
                    </b>{" "}
                    {name ? name.split(" ").slice(2).join(" ") : "Iskandar"}
                  </span>
                </h1>
                <div className="label lui-subtitle">
                  {" "}
                  I am{" "}
                  <motion.strong
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={textTransition}
                  >
                    {position}
                  </motion.strong>
                </div>
              </div>
              <div className="description">
                <div>
                  <motion.p
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={textTransition}
                  >
                    {description}
                  </motion.p>
                </div>
                <div className="social-links">
                  <SocialLink href={github} className="fab fa-github" />
                  <SocialLink href={instagram} className="fab fa-instagram" />
                  <SocialLink href={facebook} className="fab fa-facebook" />
                  <SocialLink
                    href={`mailto:${email}`}
                    className="fas fa-envelope"
                  />
                  <SocialLink href={whatsapp} className="fab fa-whatsapp" />
                  <SocialLink href={linkedin} className="fab fa-linkedin" />
                </div>
              </div>
              <div className="bts">
                <a target="_blank" href={resume} className="btn">
                  <span>Download CV</span>
                </a>
                <a href="#skills-section" className="btn-lnk">
                  {" "}
                  My Skills{" "}
                </a>
              </div>
            </div>
            <div className="slide" data-animate="active">
              <motion.img
                whileHover={{ scale: 1.1 }}
                loading="lazy"
                decoding="async"
                src="assets/images/profile/profile-azmi.png"
                alt="<b>Moch Azmi</b> Iskandar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <span className="circle circle-1" />
              <img
                className="circle img-1"
                src="assets/images/pat-1.png"
                alt="Pat 1"
                loading="lazy"
              />
              <img
                className="circle img-2"
                src="assets/images/pat-2.png"
                alt="Pat 2"
                loading="lazy"
              />
              <img
                className="circle img-3"
                src="assets/images/pat-2.png"
                alt="Pat 3"
                loading="lazy"
              />
              <div className="info-list">
                <ul>
                  <li>
                    <span className="num">
                      {year_of_experience} <strong>+</strong>
                    </span>
                    <span className="value">
                      Years of <strong>Experience</strong>
                    </span>
                  </li>
                  <li>
                    <span className="num">{complete_projects}</span>
                    <span className="value">
                      Completed <strong>Projects</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> {position} </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
