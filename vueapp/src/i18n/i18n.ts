import { createI18n } from 'vue-i18n'
import messages from "./messages";

const i18n = createI18n({
    locale: 'fr',
    messages,
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