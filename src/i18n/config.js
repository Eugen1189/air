// src/i18n/config.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationES from '../locales/es/translation.json';
import translationEN from '../locales/en/translation.json';
import translationDE from '../locales/de/translation.json';
import translationIT from '../locales/it/translation.json';

const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  },
  it: {
    translation: translationIT
  }
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'it', // Default language (Italian)
    fallbackLng: 'en', // Fallback language if translation is missing
    
    interpolation: {
      escapeValue: false // React already escapes values
    },

    // Detection options
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;

