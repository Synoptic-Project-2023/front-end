import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import es from './es';
import gbS from './gbS';
import gbW from './gbW';
import fr from './fr';
import de from './de';
import it from './it';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        es: {
            translation: es
        },
        gbS: {
            translation: gbS,
        },
        gbW: {
            translation: gbW,
        },
        fr: {
            translation: fr,
        },
        de: {
            translation: de,
        },
        it: {
            translation: it
        }
    },
    lng: 'en',
    interpolation: {
        escapeValue: false
    },
    compatibilityJSON: 'v1', // Disable the warning message
})



export default i18n;