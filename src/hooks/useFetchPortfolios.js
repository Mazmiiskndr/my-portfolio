import { useFetchData } from "./useFetchData";

export const useFetchPortfolios = (params = null) => {
  return useFetchData("portfolios", (data) => data.results, params);
};
