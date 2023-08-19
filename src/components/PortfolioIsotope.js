import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState, useMemo } from "react";
// import { useFetchPortfolios } from "@hooks/useFetchPortfolios";
import { useFetchCategoryPortfolios } from "@hooks/useFetchCategoryPortfolios";
const PortfolioIsotope = ({ noViewMore }) => {
  // TODO: SHOW THE PORTFOLIOS
  // const [portfoliosData, portfoliosLoading] = useFetchPortfolios({ limit: 6 });
  // console.log(portfoliosData);
  
  // Fetching category data and loading status
  const [categoryPortfoliosData, categoryPortfoliosLoading] =
    useFetchCategoryPortfolios({ limit: 6 });

  // Reference to control Isotope
  const isotope = useRef();

  // State to control filter key
  const [filterKey, setFilterKey] = useState("*");

  // Handler to change filter key
  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  // Function to set the active button class
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  // Render category portfolios with memoization
  const renderCategoryPortfolios = useMemo(() => {
    // Display loading if still loading
    if (categoryPortfoliosLoading) return <div>Loading...</div>;

    // Display message if there is no data
    if (categoryPortfoliosData.length === 0)
      return <div>No Category Portfolios Data Available</div>;

    // Render each category portfolio
    return categoryPortfoliosData.map((category) => (
      <a
        key={category.id}
        className={`c-pointer lui-subtitle ${activeBtn(
          `sorting-${category.slug}`
        )}`}
        onClick={handleFilterKeyChange(`sorting-${category.slug}`)}
        data-href={`.sorting-${category.slug}`}
      >
        {category.name}
      </a>
    ));
  }, [categoryPortfoliosLoading, categoryPortfoliosData, filterKey]);

  // Side effect to initialize Isotope
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      percentPosition: true,
      masonry: { columnWidth: ".works-col" },
      animationOptions: { duration: 750, easing: "linear", queue: false },
    });
    return () => isotope.current.destroy(); // Clean up Isotope when unmounting
  }, []);

  // Side effect to set filter on filterKey change
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` }) // Filter all if "*"
        : isotope.current.arrange({ filter: `.${filterKey}` }); // Or filter based on filterKey
    }
  }, [filterKey]);

  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          {renderCategoryPortfolios}
          {/* <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-ui-ux-design"
            )}`}
            onClick={handleFilterKeyChange("sorting-ui-ux-design")}
            data-href=".sorting-ui-ux-design"
          >
            UI UX Design
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-photo")}`}
            onClick={handleFilterKeyChange("sorting-photo")}
            data-href=".sorting-photo"
          >
            Photography
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-development"
            )}`}
            onClick={handleFilterKeyChange("sorting-development")}
            data-href=".sorting-development"
          >
            Development
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-branding"
            )}`}
            onClick={handleFilterKeyChange("sorting-branding")}
            data-href=".sorting-branding"
          >
            Branding
          </a> */}
        </div>
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/assets/images/work4.jpeg"
                        alt="Zorro"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Branding, Photography </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Zorro</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <img
                className="bg-img"
                src="assets/images/pat-2.png"
                alt="Pat 2"
                loading="lazy"
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/assets/images/work2.jpeg"
                        alt="Gooir"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Branding, UI UX Design </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Gooir</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <img
                className="bg-img"
                src="assets/images/pat-2.png"
                alt="Pat 2"
                loading="lazy"
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single/megalos-hotspot">
                    <a>
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/assets/images/megalos-split.jpg"
                        alt="Explore"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, UI UX Design </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Megalos - Hotspot Management System</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Megalos is developed using the Laravel 9 tech stack,
                    Livewire version 2, and implements the repository pattern
                    paradigm. The project is also integrated with Mikrotik API
                    and freeRadius.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <img
                className="bg-img"
                src="assets/images/pat-2.png"
                alt="Pat 2"
                loading="lazy"
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/assets/images/work1.jpeg"
                        alt="Mozar"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Branding, Photography </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Mozar</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <img
                className="bg-img"
                src="assets/images/pat-2.png"
                alt="Pat 2"
                loading="lazy"
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/assets/images/single8.jpg"
                        alt="Stay Fit"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, UI UX Design </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Stay Fit</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <img
                className="bg-img"
                src="assets/images/pat-2.png"
                alt="Pat 2"
                loading="lazy"
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/assets/images/single6.jpg"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, Photography </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Kana</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <img
                className="bg-img"
                src="assets/images/pat-2.png"
                alt="Pat 2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};


export default PortfolioIsotope;


