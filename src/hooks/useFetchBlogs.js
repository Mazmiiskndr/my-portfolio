import { useFetchData } from "./useFetchData";

export const useFetchBlogs = (params) => {
  return useFetchData("blogs", (data) => data.results, params);
};
