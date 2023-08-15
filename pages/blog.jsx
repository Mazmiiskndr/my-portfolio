import Link from "next/link";
import Layout from "../src/layouts/Layout";
const Blog = () => {
  return (
    <Layout pageClassName={"dark-skin"}>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        <div className="container">
          {/* Heading */}
          <div className="m-titles align-center">
            <h1
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Our Blogs </span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Recent Articles </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Blog */}
      <div className="section section-inner m-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Blog Items */}
              <div className="articles-container">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          src="assets/images/single7.jpg"
                          alt="The Main Thing For The Designer"
                          loading="lazy"
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
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          src="assets/images/blog-4-scaled-1.jpg"
                          alt="Follow Your Own Design Process"
                          loading="lazy"
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
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          src="assets/images/blog-2.jpg"
                          alt="Usability Secrets to Create Better Interfaces"
                          loading="lazy"
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
              <div className="pager">
                <span className="page-numbers current">1</span>
                <a className="page-numbers" href="#">
                  2
                </a>
                <a className="next page-numbers" href="#">
                  Next
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* sidebar */}
              <div
                className="col__sedebar scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="content-sidebar">
                  <aside className="widget-area">
                    <div className="widget widget_block widget_search">
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="wp-block-search"
                      >
                        <div className="wp-block-search__inside-wrapper">
                          <input
                            type="search"
                            className="wp-block-search__input wp-block-search__input"
                            defaultValue=""
                          />
                          <button
                            type="submit"
                            className="wp-block-search__button wp-element-button"
                          >
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                    <section className="widget widget_block">
                      <div className="wp-block-group">
                        <div className="wp-block-group__inner-container">
                          <h2>Recent Posts</h2>
                          <ul className="wp-block-latest-posts__list wp-block-latest-posts">
                            <li>
                              <Link legacyBehavior href="/blog-single">
                                <a className="wp-block-latest-posts__post-title">
                                  The Main Thing For The Designer
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href="/blog-single">
                                <a className="wp-block-latest-posts__post-title">
                                  Follow Your Own Design Process
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href="/blog-single">
                                <a className="wp-block-latest-posts__post-title">
                                  Usability Secrets to Create Better Interfaces
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href="/blog-single">
                                <a className="wp-block-latest-posts__post-title">
                                  Three Ways To Level Up Your Photography
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href="/blog-single">
                                <a className="wp-block-latest-posts__post-title">
                                  10 Useful Tips to Improve Your Skills
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    <section className="widget widget_block">
                      <div className="wp-block-group">
                        <div className="wp-block-group__inner-container">
                          <h2>Recent Comments</h2>
                          <ul className="wp-block-latest-comments">
                            <li className="wp-block-latest-comments__comment">
                              <span className="wp-block-latest-comments__comment-author">
                                Ryan Berg
                              </span>{" "}
                              on{" "}
                              <Link legacyBehavior href="/blog-single">
                                <a className="wp-block-latest-comments__comment-link">
                                  How to Become a Successful UI/UX Designer
                                </a>
                              </Link>
                            </li>
                            <li className="wp-block-latest-comments__comment">
                              <span className="wp-block-latest-comments__comment-author">
                                Robert Brown
                              </span>{" "}
                              on{" "}
                              <Link legacyBehavior href="/blog-single">
                                <a className="wp-block-latest-comments__comment-link">
                                  How to Become a Successful UI/UX Designer
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    <section className="widget widget_block">
                      <div className="wp-block-group">
                        <div className="wp-block-group__inner-container">
                          <h2>Archives</h2>
                          <ul className="wp-block-archives-list wp-block-archives">
                            <li>
                              <Link legacyBehavior href="/blog-single">
                                <a>October 2022</a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href="/blog-single">
                                <a>November 2021</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    <section className="widget widget_block">
                      <div className="is-layout-flow wp-block-group">
                        <div className="wp-block-group__inner-container">
                          <h2>Categories</h2>
                          <ul className="wp-block-categories-list wp-block-categories">
                            <li className="cat-item cat-item-2">
                              <Link legacyBehavior href="/blog-single">
                                <a>Branding</a>
                              </Link>
                            </li>
                            <li className="cat-item cat-item-3">
                              <Link legacyBehavior href="/blog-single">
                                <a>Photography</a>
                              </Link>
                            </li>
                            <li className="cat-item cat-item-4">
                              <Link legacyBehavior href="/blog-single">
                                <a>UI Design</a>
                              </Link>
                            </li>
                            <li className="cat-item cat-item-5">
                              <Link legacyBehavior href="/blog-single">
                                <a>UX Design</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="v-line-left v-line-top">
            <div className="v-line-block">
              <span />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
