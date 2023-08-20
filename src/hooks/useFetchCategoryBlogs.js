import { useFetchData } from "./useFetchData";

export const useFetchCategoryBlogs = (params) => {
  return useFetchData("category_blogs", (data) => data.results, params);
};
