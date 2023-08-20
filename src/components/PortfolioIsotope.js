import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useLayoutEffect, useRef, useState, useMemo } from "react";
import { useFetchPortfolios } from "@hooks/useFetchPortfolios";
import { useFetchCategoryPortfolios } from "@hooks/useFetchCategoryPortfolios";
import { truncateText } from "../utils";
const PortfolioIsotope = ({ noViewMore }) => {
  const [portfoliosData, portfoliosLoading] = useFetchPortfolios({ limit: 6 });

  // Fetching category data and loading status
  const [categoryPortfoliosData, categoryPortfoliosLoading] =
    useFetchCategoryPortfolios({ limit: 4 });

  // Reference to control Isotope
  const isotope = useRef();

  // State to control filter key
  const [filterKey, setFilterKey] = useState("*");

  // Handler to change filter key
  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  // Function to set the active button class
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  // Render the portfolios with loading and no data handling
  const renderPortfolios = useMemo(() => {
    // Display loading if still loading
    if (portfoliosLoading) return <div>Loading...</div>;

    // Display message if there is no data
    if (portfoliosData.length === 0)
      return <div>No Category Portfolios Data Available</div>;

    // Render each portfolio
    return portfoliosData.map((portfolio) => (
      <div
        key={portfolio.id}
        className={`works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-${portfolio.categories
          ?.map((category) => category.slug)
          .join(" sorting-")} `}
      >
        <div
          className="works-item scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="image">
            <div className="img">
              <Link legacyBehavior href={`/work-single/${portfolio.slug}`}>
                {/* TODO: SHOW IMAGE WITH URL FIX */}
                <a>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={`/assets/images/work4.jpeg`}
                    alt={portfolio.title}
                  />
                  <span className="overlay" />
                </a>
              </Link>
            </div>
          </div>
          <div className="desc">
            <span className="category">
              {portfolio.categories?.map((category, index) => (
                <span key={category.id}>
                  {category.name}
                  {index < portfolio.categories.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
            <h6
              className="name"
              style={{
                height: "2.4em",
                lineHeight: "1.2em",
                overflow: "hidden",
              }}
            >
              <Link legacyBehavior href={`/work-single/${portfolio.slug}`}>
                <a>{truncateText(portfolio.title, 50)}</a>
              </Link>
            </h6>
            <div className="text">
              <p>{truncateText(portfolio.description, 100)}</p>
            </div>
            <Link legacyBehavior href={portfolio.project_link}>
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
    ));
  }, [portfoliosLoading, portfoliosData]);

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

  // Side effect to initialize or update Isotope
  useLayoutEffect(() => {
    if (isotope.current) {
      isotope.current.destroy();
    }
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      percentPosition: true,
      masonry: { columnWidth: ".works-col" },
      animationOptions: { duration: 750, easing: "linear", queue: false },
    });
    return () => isotope.current.destroy(); // Clean up Isotope when unmounting
  }, [portfoliosData]); // Rerun effect when portfoliosData changes

  // Side effect to set filter on filterKey change
  useLayoutEffect(() => {
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
        </div>
        <div className="works-items works-masonry-items row">
          {renderPortfolios}
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
