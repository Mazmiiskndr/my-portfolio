import { useFetchData } from "./useFetchData";

export const useFetchCertificates = (params = null) => {
  return useFetchData("certificates", (data) => data.results, params);
};

export const useFetchCertificateBySlug = (slug) => {
  return useFetchData(`certificates/${slug}`, (data) => data.results);
};
