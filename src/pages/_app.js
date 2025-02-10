import React, { useEffect, useState } from "react";
import Head from "next/head";
import appData from "@data/app.json";
import GTM from "../components/GTM";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
import { TranslateProvider } from "../contexts/TranslateContext";
import "../components/i18n";
import ConsentBanner from "../components/ConsentBanner";

// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  const [consentGiven, setConsentGiven] = useState(false);
  useEffect(() => {
    const checkConsent = () => {
      if (typeof window !== "undefined") {
        const consent = JSON.parse(localStorage.getItem("userConsent"));
        if (consent && (consent.preferences || consent.statistics || consent.marketing)) {
          setConsentGiven(true);
        } else {
          setConsentGiven(false);
        }
      }
    };

    // Run check on initial load
    checkConsent();

    // Listen for consent changes (localStorage updates)
    window.addEventListener("storage", checkConsent);

    return () => {
      window.removeEventListener("storage", checkConsent);
    };
  }, []);
  console.log(consentGiven)
  return (
    <TranslateProvider>
      <Head>
        {/* seo begin */}
        <title>{appData.settings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="bslthemes" />
        {/* seo end */}
      </Head>
      {consentGiven && <GTM />}
      {/* <GTM /> */}
      <Component {...pageProps} />
      <ConsentBanner />
    </TranslateProvider>
  );
}

export default MyApp;
