import Layout from "@layouts/Layout";
import { useFetchPortfolioBySlug } from "@hooks/useFetchPortfolios";
import { formatDate } from "@src/utils";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  return {
    props: { slug },
  };
};

const WorkSingle = ({ slug }) => {
  const [portfolioData] = useFetchPortfolioBySlug(slug);
  const { title, description, project_date, tech_stack, image, project_link } =
    portfolioData?.portfolio || {};
  const categories = portfolioData?.categories || [];

  if (!title || !description)
    return <div className="text-center">Data Not Found</div>;

  return (
    <Layout pageClassName={"portfolio-template dark-skin"}>
      <Head>
        <title>{title} - Moch Azmi Iskandar</title>
      </Head>
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
        <div className="container">
          <div className="row">
            <img
              src={`/${image}`}
              loading="lazy"
              decoding="async"
              className="img js-parallax"
              alt=""
              style={{ borderRadius: "3%" }}
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
    </Layout>
  );
};
export default WorkSingle;




