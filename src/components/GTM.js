import Script from "next/script";
import { useEffect } from "react";

const GTM_ID = "GTM-N96D2HC3"; // Your GTM ID

const GTM = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedConsent = JSON.parse(localStorage.getItem("userConsent")) || {};

      // Initialize GTM and ensure Data Layer is pushed
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "update_consent",
        consent: {
          preferences: storedConsent.preferences ?? false,
          statistics: storedConsent.statistics ?? false,
          marketing: storedConsent.marketing ?? false,
        },
      });

      // Manually trigger GTM
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-N96D2HC3');
    }
  }, []);

  return (
    <>
      {/* GTM NoScript Fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
};

export default GTM;
