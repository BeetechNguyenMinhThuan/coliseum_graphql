import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import ja from "locales/ja/messages.json";
import vi from "locales/vi/messages.json";

const resources = {
    ja: {translation: ja},
    vi: {translation: vi},
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('current_language') || "ja",
    fallbackLng: "ja",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;