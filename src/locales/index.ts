import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'
import ja from './ja'

const messages = {
  en,
  zh,
  ja
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n