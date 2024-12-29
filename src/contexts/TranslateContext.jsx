import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TranslateContext = createContext();

function TranslateProvider({ children }) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) {
        setLanguage(storedLanguage);
        i18n.changeLanguage(storedLanguage); // Ensure i18n language is updated from localStorage
      } else {
        localStorage.setItem("language", language);
        i18n.changeLanguage(language); // Ensure i18n language is updated when state changes
      }
    }
  }, [language, i18n]);

  const handleTranslate = (l) => {
    setLanguage(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", l);
    }
    i18n.changeLanguage(l);
  };

  return (
    <TranslateContext.Provider
      value={{
        t,
        language,
        setLanguage,
        handleTranslate,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
}

function useTranslate() {
  const context = useContext(TranslateContext);
  if (context === undefined) {
    throw new Error("Context used outside of the context provider");
  }
  return context;
}

export { TranslateProvider, useTranslate };
