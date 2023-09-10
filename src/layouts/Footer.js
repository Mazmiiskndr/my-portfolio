import { useAboutData } from "@context/AboutDataContext";
import SocialLink from "@components/SocialLink";

const Footer = () => {
  const aboutData = useAboutData();

  const {
    github,
    instagram,
    facebook,
    email,
    whatsapp,
    linkedin,
  } = aboutData[0] || {};
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
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
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2022 <strong>M. Azmi Iskandar</strong>. All rights reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Developed by <strong>Moch Azmi Iskandar</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
