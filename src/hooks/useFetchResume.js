import { useFetchData } from "./useFetchData";
export const useFetchResume = (category) => {
  return useFetchData(
    `resumes/category/${category}`,
    (data) => data.results[0].resumes
  );
};