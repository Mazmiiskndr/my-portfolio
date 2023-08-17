import { createContext, useContext } from "react";

// Create a context to store about data
export const AboutDataContext = createContext(null);

// Custom hook to access about data from context
export const useAboutData = () => {
  return useContext(AboutDataContext);
};
