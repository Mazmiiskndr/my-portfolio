import React from "react";


export const RenderCategoryPortfolios = ({
  categoryPortfoliosData,
  categoryPortfoliosLoading,
  activeBtn,
  handleFilterKeyChange,
  filterKey,
}) => {
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
};
