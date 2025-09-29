import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)
  
  const theme = computed(() => isDark.value ? 'dark' : 'light')
  
  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
  }
  
  const setTheme = (newTheme: 'light' | 'dark') => {
    isDark.value = newTheme === 'dark'
    updateTheme()
  }
  
  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme.value)
  }
  
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark')
    } else if (prefersDark) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  
  return {
    isDark,
    theme,
    toggleTheme,
    setTheme,
    initTheme
  }
})