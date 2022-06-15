import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'fr',
    datetimeFormats: {
        'fr': {
            short: {
                year: 'numeric', month: 'numeric', day: 'numeric'
            },
            long: {
                year: 'numeric', month: 'long', day: 'numeric'
            }
        }
    }
});

export default i18n;