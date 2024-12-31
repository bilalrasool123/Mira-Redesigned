import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEn from "../../src/locales/en/translation.json";
import tNl from "../../src/locales/de/translation.json";

const resources = {
  en: {
    translation: tEn,
  },
  de: {
    translation: tNl,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    returnObjects: true,
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
