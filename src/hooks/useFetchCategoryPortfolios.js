import { useFetchData } from "./useFetchData";

export const useFetchCategoryPortfolios = (params) => {
  return useFetchData("category_portfolios", (data) => data.results, params);
};
