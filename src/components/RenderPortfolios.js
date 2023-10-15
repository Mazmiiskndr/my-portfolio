import React from "react";
import Link from "next/link";
import { truncateText, truncateHtmlText } from "../utils";
const ASSETS_PATH = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Renders the portfolios with loading and no data handling
 */
export const RenderPortfolios = ({ portfoliosData, portfoliosLoading }) => {
  // Display loading if still loading
  if (portfoliosLoading) return <div>Loading...</div>;

  // Display message if there is no data
  if (portfoliosData.length === 0)
    return <div className="text-center">No Portfolios Data Available</div>;

  // Render each portfolio
  return portfoliosData.map((portfolio) => {
    const truncatedDescriptionHtml = truncateHtmlText(
      portfolio.description,
      100
    );

    return (
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
                <a>
                  <motion.img
                    loading="lazy"
                    decoding="async"
                    src={ASSETS_PATH + portfolio.image}
                    alt={portfolio.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
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
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: truncatedDescriptionHtml }}
            ></div>
            <Link legacyBehavior href={portfolio.project_link}>
              <a className="lnk" target="_blank" rel="noopener noreferrer">
                See project
              </a>
            </Link>
          </div>
          <Image
            className="bg-img"
            src="/assets/images/pat-2.png"
            alt="Pat 2"
            width={500}
            height={500}
          />
        </div>
      </div>
    );
  });
};
