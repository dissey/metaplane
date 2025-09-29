<template>
  <div class="home">
    <HeroSection />
    <ContentSections />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ContentSections from '@/components/ContentSections.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style>