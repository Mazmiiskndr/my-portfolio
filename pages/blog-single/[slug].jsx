import Link from "next/link";
import Layout from "@layouts/Layout";
const BlogSingle = () => {
  return (
    <Layout pageClassName={"dark-skin"}>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        <div className="container">
          {/* Heading */}
          <div className="m-titles align-center">
            <div
              className="m-category scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <Link legacyBehavior href="/blog">
                <a>Branding</a>
              </Link>
              ,{" "}
              <Link legacyBehavior href="/blog">
                <a>UI Design</a>
              </Link>{" "}
              / October 31, 2022 / by admin
            </div>
            <h1
              className="m-title scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              The Main Thing For The Designer
            </h1>
          </div>
        </div>
      </section>
      {/* Single Post Image */}
      <div className="section section-inner m-image-large">
        <div className="container">
          <div className="v-line-right v-line-top">
            <div className="v-line-block">
              <span />
            </div>
          </div>
        </div>
        <div className="image">
          <img
            className="img scrolla-element-anim-1 scroll-animate"
            src="/assets/images/single7.jpg"
            alt="Single 7"
            data-animate="active"
            loading="lazy"
          />
        </div>
      </div>
      {/* Section - Blog */}
      <section className="section section-inner m-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
              {/* content */}
              <div className="description">
                <div
                  className="post-content scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p>
                    Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                    mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                    arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut
                    dignissim sapien sit amet molestie rutrum. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Pellentesque in porta dolor, a suscipit
                    risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cras ac arcu in lorem rhoncus ullamcorper. Ut at nulla
                    ut libero mollis viverra sed vitae purus.
                  </p>
                  <p>
                    Nam dui mauris, congue vel nisi in, tempus gravida enim.
                    Nulla et tristique orci. Pellentesque lectus sapien, maximus
                    id gravida sit amet, tristique non eros. Etiam aliquet, sem
                    vitae sagittis convallis, ante sapien tincidunt nisl, eget
                    dapibus tortor velit quis ex. Proin et condimentum est, sed
                    pretium ex. Mauris posuere est metus, vitae commodo sem
                    posuere eget. Praesent maximus augue rutrum, consequat magna
                    id, facilisis lorem. Quisque molestie, turpis ac interdum
                    gravida
                  </p>
                  <blockquote>
                    <p>
                      Photography is the story I fail to put into words get
                      ligula vel, commodo luctus felis. Ut dignissim sapien sit
                      amet molestie rutr
                    </p>
                    <p>
                      <cite>– Destin Sparks</cite>
                    </p>
                  </blockquote>
                  <p>
                    <br />
                  </p>
                  <h3>Aliquam vel sem vel vellesuada</h3>
                  <p>
                    Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                    mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                    arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut
                    dignissim sapien sit amet molestie rutrum. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Pellentesque in porta dolor, a suscipit
                    risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cras ac arcu in lorem rhoncus ullamcorper. Ut at nulla
                    ut libero mollis viverra sed vitae purus.
                  </p>
                  <ul className="gallery gallery-columns-2">
                    <li className="gallery-item">
                      <figure>
                        <img
                          src="/assets/images/blog8.jpg"
                          alt=""
                          loading="lazy"
                        />
                      </figure>
                    </li>
                    <li className="gallery-item">
                      <figure>
                        <img
                          src="/assets/images/blog6.jpg"
                          alt=""
                          loading="lazy"
                        />
                      </figure>
                    </li>
                  </ul>
                  <p>
                    Nam dui mauris, congue vel nisi in, tempus gravida enim.
                    Nulla et tristique orci. Pellentesque lectus sapien, maximus
                    id gravida sit amet, tristique non eros. Etiam aliquet, sem
                    vitae sagittis convallis, ante sapien tincidunt nisl, eget
                    dapibus tortor velit quis ex. Proin et condimentum est, sed
                    pretium ex. Mauris posuere est metus, vitae commodo sem
                    posuere eget. Praesent maximus augue rutrum, consequat magna
                    id, facilisis lorem. Quisque molestie, turpis ac interdum
                    gravida
                  </p>
                  <ul>
                    <li>
                      Donec arcu lacus, ornare eget ligula vel, commodo luctus
                      felis.
                    </li>
                    <li>Ut dignissim sapien sit amet molestie rutrum.</li>
                    <li>
                      Orci varius natoque penatibus et magnis dis parturient
                      montes.
                    </li>
                    <li>
                      Ut at nulla ut libero mollis viverra sed vitae purus.
                    </li>
                  </ul>
                  <p>
                    Nam dui mauris, congue vel nisi in, tempus gravida enim.
                    Nulla et tristique orci. Pellentesque lectus sapien, maximus
                    id gravida sit amet, tristique non eros. Etiam aliquet, sem
                    vitae sagittis convallis, ante sapien tincidunt nisl, eget
                    dapibus tortor velit quis ex.
                  </p>
                  <span className="tags-links">
                    <span>Tags:</span>
                    <a href="#">Design</a>
                    <a href="#">HTML</a>
                    <a href="#">UX</a>
                    <a href="#">WordPress</a>
                  </span>
                </div>
              </div>
              {/* Comments */}
              <div
                className="comments-post scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="section__comments">
                  <div className="m-titles">
                    <div className="m-title align-left">2 Comments</div>
                  </div>
                  <ul className="comments">
                    <li className="comment comment-item">
                      <div className="comment comment-box">
                        <img
                          src="/assets/images/avatar.png"
                          className="avatar"
                          alt=""
                          loading="lazy"
                        />
                        <div className="comment-box__body">
                          <div className="content-caption post-content description">
                            <h5 className="comment-box__details">
                              Robert Brown <span>December 9, 2021</span>
                            </h5>
                            <p>
                              Nam dui mauris, congue vel nisi in, tempus gravida
                              enim. Nulla et tristique orci. Pellentesque lectus
                              sapien, maximus id gravida sit amet, tristique non
                              eros. Etiam aliquet, sem vitae sagittis convallis,
                              ante sapien tincidunt nisl, eget dapibus tortor
                              velit quis ex.
                            </p>
                          </div>
                        </div>
                        <div className="comment-footer">
                          <a className="comment-reply-link" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="comment comment-item">
                      <div className="comment comment-box">
                        <img
                          src="/assets/images/avatar.png"
                          className="avatar"
                          alt=""
                          loading="lazy"
                        />
                        <div className="comment-box__body">
                          <div className="content-caption post-content description">
                            <h5 className="comment-box__details">
                              Ryan Berg <span>December 9, 2021</span>
                            </h5>
                            <p>
                              Proin et condimentum est, sed pretium ex. Mauris
                              posuere est metus, vitae commodo sem posuere eget.
                            </p>
                          </div>
                        </div>
                        <div className="comment-footer">
                          <a className="comment-reply-link" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="form-comment">
                    <div className="comment-respond">
                      <div className="m-titles">
                        <div className="m-title align-left">
                          Leave a comment
                        </div>
                      </div>
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="comment-form"
                      >
                        <div className="group-row">
                          <div className="group">
                            <textarea
                              className="textarea"
                              name="comment"
                              rows={3}
                              placeholder="Comment"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="group-row">
                          <div className="group">
                            <input
                              type="text"
                              name="author"
                              className="input"
                              placeholder="Name"
                            />
                          </div>
                          <div className="group">
                            <input
                              type="text"
                              name="email"
                              className="input"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="group-row">
                          <div className="group">
                            <button type="submit" name="submit" className="btn">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
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
      </section>
      {/* Section Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
              <div className="h-titles h-navs">
                <Link legacyBehavior href="/blog-single">
                  <a>
                    <span
                      className="nav-arrow splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Next Article
                    </span>
                    <span
                      className="h-title splitting-text-anim-2 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Follow Your Own Design Process
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogSingle;
