import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Файли локалізації, завантажені напряму
import translationUa from './locales/ua/translation.json';
import translationRu from './locales/ru/translation.json';
import translationEs from './locales/es/translation.json';
import translationDe from './locales/de/translation.json';

const resources = {
  ru: {
    translation: translationRu,
  },
  ua: {
    translation: translationUa,
  },
  es: {
    translation: translationEs,
  },
  de: {
    translation: translationDe,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
