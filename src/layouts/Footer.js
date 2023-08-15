const Footer = () => {
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
