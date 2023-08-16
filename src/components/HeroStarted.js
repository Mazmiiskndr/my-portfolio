export default function HeroStarted() {
  return (
    <section
      className="lui-section lui-section-hero lui-gradient-top"
      id="started-section"
    >
      <div className="container">
        {/* Hero Started */}
        <div className="lui-started v-line v-line-left">
          <div className="section hero-started">
            <div
              className="content scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="titles">
                <div className="lui-subtitle">
                  <span>
                    {" "}
                    Hello, <b>my name is</b>
                  </span>
                </div>
                <h1
                  className="title splitting-text-anim-1 scroll-animate"
                  data-splitting="chars"
                  data-animate="active"
                >
                  <span>
                    <b>Moch Azmi</b> Iskandar{" "}
                  </span>
                </h1>
                <div className="label lui-subtitle">
                  {" "}
                  I am <strong>Full Stack Developer</strong>
                </div>
              </div>
              <div className="description">
                <div>
                  <p>
                    I'm a 22-year-old Information Systems graduate with
                    proficiency in web development (HTML, CSS, JavaScript, PHP,
                    etc.). A finalist in the Students Competition of Innovation
                    and Business, I have 4 years of Full Stack Development
                    experience and 1 year of professional work. Now, I'm
                    studying at University Nusa Mandiri to further my
                    qualifications.
                  </p>
                </div>
                <div className="social-links">
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://github.com/Mazmiiskndr"
                  >
                    <i aria-hidden="true" className="fab fa-github" />
                  </a>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.instagram.com/m.azmiiskndr"
                  >
                    <i aria-hidden="true" className="fab fa-instagram" />
                  </a>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.facebook.com/Miee.xtc/"
                  >
                    <i aria-hidden="true" className="fab fa-facebook" />
                  </a>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="mailto:azmiiskndr0@gmail.com"
                  >
                    <i aria-hidden="true" className="fas fa-envelope" />
                  </a>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://wa.me/6282118923691"
                  >
                    <i aria-hidden="true" className="fab fa-whatsapp" />
                  </a>
                </div>
              </div>
              <div className="bts">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1HhtbSuMooeV3_W-N9Bjp9M1_Aepq2Xop/view?usp=sharing"
                  className="btn"
                >
                  <span>Download CV</span>
                </a>
                <a href="#skills-section" className="btn-lnk">
                  {" "}
                  My Skills{" "}
                </a>
              </div>
            </div>
            <div
              className="slide scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <img
                loading="lazy"
                decoding="async"
                src="assets/images/profile/profile-azmi.png"
                alt="<b>Moch Azmi</b> Iskandar"
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
                      4 <strong>+</strong>
                    </span>
                    <span className="value">
                      Years of <strong>Experience</strong>
                    </span>
                  </li>
                  <li>
                    <span className="num">330</span>
                    <span className="value">
                      Completed <strong>Projects</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> Full Stack Developer </span>
          </div>
        </div>
      </div>
    </section>
  );
}
