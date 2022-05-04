import i18next from 'i18next'

import portuguese from './portuguese.json'
import spanish from './spanish.json'

import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'pt',
    resources: {
        pt: portuguese,
        es: spanish

    },
    react: { useSuspense: false }
})

export default i18next