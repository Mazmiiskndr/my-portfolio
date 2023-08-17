import { createContext, useContext } from "react";

// Buat context untuk menyimpan about data
const AboutDataContext = createContext(null);

// Custom hook untuk menggunakan about data
export const useAboutData = () => {
  return useContext(AboutDataContext);
};
