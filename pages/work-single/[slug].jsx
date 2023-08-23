import Link from "next/link";
import Layout from "@layouts/Layout";
import { useFetchPortfolioBySlug } from "@hooks/useFetchPortfolios";
import { formatDate } from "@src/utils";

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  return {
    props: { slug },
  };
};

const WorkSingle = ({ slug }) => {
  const [portfolioData, portfolioLoading] = useFetchPortfolioBySlug(slug);
  const { title, description, project_date, tech_stack, image, project_link } =
    portfolioData?.portfolio || {};
  const categories = portfolioData?.categories || [];

  if (portfolioLoading) return <div>Loading...</div>;

  if (!title || !description)
    return <div className="text-center">Data Not Found</div>;

  return (
    <Layout pageClassName={"portfolio-template dark-skin"}>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        {/* Heading */}
        <div className="container">
          <div className="m-titles align-left">
            <h1
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>{title}</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {categories.map((category) => category.name).join(", ")}
              </span>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="v-line v-line-right v-line-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="m-details">
                  <div className="details-label">
                    <span>Date:</span>
                    <strong>
                      <span>{formatDate(project_date)}</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      {tech_stack.split(",").map((tech, index, array) => (
                        <span key={index}>
                          {tech}
                          {(index + 1) % 4 === 0 && index < array.length - 1 ? (
                            <br />
                          ) : index < array.length - 1 ? (
                            ", "
                          ) : (
                            ""
                          )}
                        </span>
                      ))}
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>
                        {categories.map((category) => category.name).join(", ")}
                      </span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href={project_link}
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Live Preview</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Image */}
      <div className="section section-inner">
        {/* Image */}
        <div className="m-image-large">
          <div className="image">
            {/* TODO: IMAGE */}
            <div
              className="img js-parallax"
              style={{
                backgroundImage:
                  "url(https://luique.bslthemes.com/wp-content/uploads/2021/11/single4.jpg)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h4>Description</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section - Gallery */}
      {/* Section - Video */}
      {/* <div className="section section-inner m-video-large">
        <div className={`video ${videoToggle ? "active" : ""}`}>
          <div
            className="img js-parallax"
            style={{ backgroundImage: "url(/assets/images/blog9.jpg)" }}
          />
          <iframe
            className="js-video-iframe"
            src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=0"
          />
          <div className="play" onClick={() => setVideoToggle(true)} />
        </div>
      </div> */}
      {/* Section - Navigation */}
      {/* <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/work-single">
              <a>
                <span
                  className="nav-arrow scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Next Project</span>
                </span>
                <span
                  className="h-title splitting-text-anim-2 scroll-animate"
                  data-splitting="chars"
                  data-animate="active"
                >
                  <span>Gooir</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};
export default WorkSingle;
