import { useFetchData } from "./useFetchData";

export const useFetchPortfolios = (params) => {
  return useFetchData("portfolios", (data) => data.results, params);
};
