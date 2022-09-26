import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/locales/index.js'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'uz', // set locale
    fallbackLocale: 'uz',
    messages // set locale messages
})

const loadedLanguages = ['ru'] // our default language that is preloaded

function setI18nLanguage(lang) {
    i18n.locale = lang
    document.querySelector('html').setAttribute('lang', lang)
    return lang
}

export function loadLanguageAsync(lang) {
    return new Promise(resolve => {
        if (i18n.locale === lang) {
            return resolve(setI18nLanguage(lang))
        }
        if (loadedLanguages.includes(lang)) {
            return resolve(setI18nLanguage(lang))
        }
    })
}