import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Router from "next/router";

import "../styles/globals.css";

import { initGA, logPageView } from "../utils/analytics";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    initGA();
    logPageView();

    Router.router.events.on("routeChangeComplete", logPageView);
  }, []);

  return <Component {...pageProps} />;
};

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  pageProps: PropTypes.shape().isRequired,
};

export default MyApp;
