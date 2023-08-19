import { useFetchData } from "./useFetchData";

export const useFetchSkills = () => {
  return useFetchData(`skills`);
};
