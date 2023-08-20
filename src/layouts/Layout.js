import { Fragment, useEffect } from "react";
import {
  activeAnimation,
  initCursor,
  jarallaxAnimation,
  stickyNav,
} from "../utils";
import { useFetchAbout } from "@hooks/useFetchAbout";
import { AboutDataContext } from "@context/AboutDataContext";
import Footer from "./Footer";
import Header from "./Header";
import LoadingBar from "@components/LoadingBar";

const Layout = ({ children, pageClassName }) => {
  // Fetch about data using custom hook
  const aboutData = useFetchAbout();

  // Activate animations and cursor, attach listeners for scroll events
  useEffect(() => {
    activeAnimation();
    initCursor();
    window.addEventListener("scroll", activeAnimation);
    window.addEventListener("scroll", stickyNav);
  }, []);

  // Load Splitting library for text animations, and set page class name
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Splitting = require("splitting");
      Splitting();
      jarallaxAnimation();
      document.querySelector("body").className = pageClassName;
    }
  }, [pageClassName]);

  return (
    <AboutDataContext.Provider value={aboutData}>
      <Fragment>
        <LoadingBar/>
        <div className="container-page">
          <Header />
          {/* Wrapper */}
          <div className="wrapper">{children}</div>
          {/* Footer */}
          <Footer />
        </div>
        {/* cursor */}
        <div className="cursor" />
      </Fragment>
    </AboutDataContext.Provider>
  );
};
export default Layout;
