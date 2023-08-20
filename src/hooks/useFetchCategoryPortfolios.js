import { useFetchData } from "./useFetchData";

export const useFetchCategoryPortfolios = (params = null) => {
  return useFetchData("category_portfolios", (data) => data.results, params);
};
