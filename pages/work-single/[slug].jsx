import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Layout from "@layouts/Layout";
import { useFetchPortfolioBySlug } from "@hooks/useFetchPortfolios";
const WorkSingleISotope = dynamic(
  () => import("@components/WorkSingleISotope"),
  {
    ssr: false,
  }
);
const WorkSingle = () => {
  const [videoToggle, setVideoToggle] = useState(false);
  const router = useRouter();
  // const { slug } = router.query; 
  // console.log(router.query.slug);
  const [portfolioData, portfolioLoading,] =
    useFetchPortfolioBySlug(router.query.slug);
  if(portfolioLoading) return <div>Loading...</div>
  if (!portfolioData || !portfolioData.portfolio)
    return <div className="text-center">Data Not Found</div>;
  const {
    title,
    description,
    project_date,
    tech_stack,
    categories,
    image,
    project_link,
  } = portfolioData.portfolio;
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
              <span>Branding, Photography</span>
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
                    <span>Year:</span>
                    <strong>
                      <span>2018</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      <span>Photoshop, XD</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>Photography, Branding</span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://bslthemes.com"
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
              <div className="post-content">
                {description}
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* Section - Gallery */}
      <div className="section section-inner">
        <div className="container">
          {/* Section Gallery */}
          <WorkSingleISotope />
        </div>
      </div>
      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h4>Conclusion</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable English.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable English.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Video */}
      <div className="section section-inner m-video-large">
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
      </div>
      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
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
      </div>
    </Layout>
  );
};
export default WorkSingle;
