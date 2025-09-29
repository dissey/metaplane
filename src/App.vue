<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useThemeStore } from '@/stores/theme'
import { useLanguageStore } from '@/stores/language'

const themeStore = useThemeStore()
const languageStore = useLanguageStore()

onMounted(() => {
  // Initialize theme and language from localStorage
  themeStore.initTheme()
  languageStore.initLocale()
})
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>