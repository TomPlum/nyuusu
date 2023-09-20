import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import english from 'locales/en/translation.json'
import japanese from 'locales/jp/translation.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: english
        },
        jp: {
            translation: japanese
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
})