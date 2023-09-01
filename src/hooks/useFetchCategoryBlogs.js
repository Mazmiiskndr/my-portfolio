import { useFetchData } from "./useFetchData";

export const useFetchCategoryBlogs = (params = null) => {
  return useFetchData("category_blogs", (data) => data.results, params);
};
