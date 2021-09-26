import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: false,
});

export function addTranslations(resources: any): void {
  i18n.addResourceBundle('en', 'translation', resources, true);
}
