import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useLanguageStore = defineStore('language', () => {
  const { locale } = useI18n()
  const currentLocale = ref(locale.value)
  
  const availableLocales = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' }
  ]
  
  const setLocale = (newLocale: string) => {
    currentLocale.value = newLocale
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }
  
  const initLocale = () => {
    const savedLocale = localStorage.getItem('locale')
    const browserLocale = navigator.language.split('-')[0]
    
    if (savedLocale && availableLocales.some(l => l.code === savedLocale)) {
      setLocale(savedLocale)
    } else if (availableLocales.some(l => l.code === browserLocale)) {
      setLocale(browserLocale)
    } else {
      setLocale('en')
    }
  }
  
  const currentLanguageName = computed(() => {
    return availableLocales.find(l => l.code === currentLocale.value)?.name || 'English'
  })
  
  return {
    currentLocale,
    availableLocales,
    currentLanguageName,
    setLocale,
    initLocale
  }
})