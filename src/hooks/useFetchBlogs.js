import { useFetchData } from "./useFetchData";

export const useFetchBlogs = (params = null) => {
  return useFetchData("blogs", (data) => data.results, params);
};
