export default function HeroStarted({ aboutLoading, aboutData }) {
  if (aboutLoading) return <div>Loading...</div>;

  const {
    name,
    position,
    github,
    instagram,
    facebook,
    email,
    whatsapp,
    resume,
    description,
  } = aboutData;

  if (!name || !position || !description)
    return <div className="text-center">Nothing data available...</div>;

  return (
    <section
      className="lui-section lui-section-hero lui-gradient-top"
      id="started-section"
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
                  I am <strong>{position}</strong>
                </div>
              </div>
              <div className="description">
                <div>
                  <p>{description}</p>
                </div>
                <div className="social-links">
                  <a target="_blank" rel="nofollow" href={github}>
                    <i aria-hidden="true" className="fab fa-github" />
                  </a>
                  <a target="_blank" rel="nofollow" href={instagram}>
                    <i aria-hidden="true" className="fab fa-instagram" />
                  </a>
                  <a target="_blank" rel="nofollow" href={facebook}>
                    <i aria-hidden="true" className="fab fa-facebook" />
                  </a>
                  <a target="_blank" rel="nofollow" href={`mailto:${email}`}>
                    <i aria-hidden="true" className="fas fa-envelope" />
                  </a>
                  <a target="_blank" rel="nofollow" href={whatsapp}>
                    <i aria-hidden="true" className="fab fa-whatsapp" />
                  </a>
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
            <span> {position} </span>
          </div>
        </div>
      </div>
    </section>
  );
}
