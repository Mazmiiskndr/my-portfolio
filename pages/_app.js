import Head from "next/head";
import React, { useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
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
        <meta name="author" content="bslthemes" />
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </React.StrictMode>
  );
};
export default App;
