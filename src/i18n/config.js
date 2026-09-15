import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import th from './locales/th.json'

export const SUPPORTED_LANGUAGES = ['en', 'th']

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      th: { translation: th },
    },
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES,
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
    },
  })

// Keep <html lang> in sync so screen readers and the browser pick the right language.
const applyHtmlLang = (lng) => {
  document.documentElement.lang = SUPPORTED_LANGUAGES.includes(lng) ? lng : 'en'
}
applyHtmlLang(i18n.resolvedLanguage)
i18n.on('languageChanged', applyHtmlLang)

export default i18n
