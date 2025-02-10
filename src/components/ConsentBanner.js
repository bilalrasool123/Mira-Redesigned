import { useState, useEffect } from "react";
import { useTranslate } from "../contexts/TranslateContext";

const ConsentBanner = () => {
  const { t } = useTranslate(); // Use translation hook
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState({
    preferences: true,
    statistics: true,
    marketing: true,
  });

  useEffect(() => {
    const storedConsent = JSON.parse(localStorage.getItem("userConsent"));
    if (!storedConsent) {
      setShowBanner(true);
    } else {
      setConsent(storedConsent);
      pushToDataLayer(storedConsent);
    }
  }, []);

  // Push consent preferences to GTM's dataLayer
  const pushToDataLayer = (updatedConsent) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "update_consent",
        consent: updatedConsent,
      });
    }
  };

  const handleConsentChange = (category) => {
    setConsent((prev) => ({
      ...prev,
      [category]: !prev[category], // Toggle checkbox
    }));
  };

  const handleAcceptSelection = () => {
    localStorage.setItem("userConsent", JSON.stringify(consent));
    pushToDataLayer(consent);
    setShowBanner(false);
  };

  const handleRefuseAll = () => {
    const refusedConsent = {
      preferences: false,
      statistics: false,
      marketing: false,
    };
    localStorage.setItem("userConsent", JSON.stringify(refusedConsent));
    pushToDataLayer(refusedConsent);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      id="cookie-banner"
      className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex flex-col items-center z-50"
      style={{
        display: "block",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <p className="mb-4 text-lg">{t("banner_title")}</p>

      {/* Checkboxes in a Single Row */}
      <div className="flex justify-center space-x-6 mb-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={consent.preferences}
            onChange={() => handleConsentChange("preferences")}
            className="w-5 h-5"
          />
          <span>{t("banner_preferences")}</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={consent.statistics}
            onChange={() => handleConsentChange("statistics")}
            className="w-5 h-5"
          />
          <span>{t("banner_statistics")}</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={consent.marketing}
            onChange={() => handleConsentChange("marketing")}
            className="w-5 h-5"
          />
          <span>{t("banner_marketing")}</span>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleRefuseAll}
          className="bg-gray-500 px-6 py-2 text-white rounded-lg"
        >
          {t("banner_refuse_all")}
        </button>
        <button
          onClick={handleAcceptSelection}
          className="bg-[#0d6efd] px-6 py-2 text-white rounded-lg"
        >
          {t("banner_accept_selection")}
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
