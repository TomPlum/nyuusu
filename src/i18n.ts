import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import english from 'locales/en/translation.json'
import japanese from 'locales/jp/translation.json'
import { SettingsValues } from "modules/Settings/context/types.ts"
import { Language } from "modules/Settings/components/LanguageSelector/types.ts"

const getLanguage = (): Language => {
  const settings = localStorage.getItem('nyusu-settings')

  if (settings) {
    const parsed = JSON.parse(settings) as SettingsValues
    return parsed.language
  }

  return 'jp'
}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: english
    },
    jp: {
      translation: japanese
    }
  },
  lng: getLanguage(),
  fallbackLng: "jp",
  interpolation: {
    escapeValue: false
  }
}).then(() => {
  console.debug('React i18n has been initialised.')
}).catch(e => {
  console.error('Failed to initialise React i18n.', e)
})