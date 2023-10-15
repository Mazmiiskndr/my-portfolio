import Head from "next/head";
import React, { useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <React.StrictMode>
      <Head>
        <title>Moch Azmi Iskandar - Personal Portfolio</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="title"
          content="Moch Azmi Iskandar - Experienced Software Developer and Programmer"
        />
        <meta
          name="description"
          content="Portfolio of Moch Azmi Iskandar, a skilled developer specialized in HTML, CSS, Javascript, ReactJS, VueJS, NextJS, InertiaJS, PHP, 
          Codeigniter, Laravel, MySQL, and more. Explore projects, skills, and contact information."
        />
        <meta
          name="keywords"
          content="Moch Azmi Iskandar, Software Developer, Web Development, HTML, CSS, Javascript, PHP, Codeigniter, Laravel, MySQL"
        />
        <meta name="author" content="Moch Azmi Iskandar" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Moch Azmi Iskandar - Experienced Software Developer and Programmer"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Moch Azmi Iskandar and discover his extensive experience in web development using modern technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Moch Azmi Iskandar Portfolio" />
        {/* Favicon */}
        <link
          rel="icon"
          href="/assets/images/favicon/logo-azmi-2.ico"
          type="image/x-icon"
        />
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </React.StrictMode>
  );
};
export default App;
