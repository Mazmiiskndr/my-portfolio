import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useLayoutEffect, useRef, useState, useMemo } from "react";
import { useFetchPortfolios } from "@hooks/useFetchPortfolios";
import { RenderPortfolios } from "./RenderPortfolios";
import { RenderCategoryPortfolios } from "./RenderCategoryPortfolios";
import { useFetchCategoryPortfolios } from "@hooks/useFetchCategoryPortfolios";

const PortfolioIsotope = ({ noViewMore }) => {
  const fetchOptions = noViewMore ? {} : { limit: 6 };
  const [portfoliosData, portfoliosLoading] = useFetchPortfolios(fetchOptions);

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
  const renderPortfolios = useMemo(
    () => (
      <RenderPortfolios
        portfoliosData={portfoliosData}
        portfoliosLoading={portfoliosLoading}
      />
    ),
    [portfoliosLoading, portfoliosData]
  );

  // Render the categories portfolios with loading and no data handling
  const renderCategoryPortfolios = useMemo(
    () => (
      <RenderCategoryPortfolios
        categoryPortfoliosData={categoryPortfoliosData}
        categoryPortfoliosLoading={categoryPortfoliosLoading}
        activeBtn={activeBtn}
        handleFilterKeyChange={handleFilterKeyChange}
        filterKey={filterKey}
      />
    ),
    [categoryPortfoliosLoading, categoryPortfoliosData, filterKey]
  );

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
