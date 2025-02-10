import Script from "next/script";
import { useEffect, useState } from "react";

const GTM_ID = "GTM-N96D2HC3"; // Replace with your actual GTM ID

const GTM = () => {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedConsent = JSON.parse(localStorage.getItem("userConsent"));

      if (storedConsent) {
        setConsent(storedConsent);

        // Push consent values to GTM dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "update_consent",
          consent: storedConsent,
        });
      }
    }
  }, []);

  // Only load GTM script if consent exists
  if (!consent) return null;

  return (
    <Script
      id="google-tag-manager"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />
  );
};

export default GTM;
