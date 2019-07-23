import i18next from 'i18next';

import common_es from './es/common.json';
import common_en from './en/common.json';

i18next.init({
    interpolation: {
        escapeValue: false
    },
    lng: 'es',
    resources: {
        es: {
            common: common_es
        },
        en: {
            common: common_en
        }
    }
});

export const i18n = i18next;
