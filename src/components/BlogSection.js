import Link from "next/link";

export default function BlogSection() {
  return (
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
  );
}
