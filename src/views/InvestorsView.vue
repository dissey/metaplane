<template>
  <div class="investors">
    <div class="container">
      <div class="page-header">
        <h1>{{ $t('nav.investors') }}</h1>
        <p>Information for current and prospective investors.</p>
      </div>
      <div class="content">
        <p>Coming soon...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.investors {
  padding-top: 6rem;
  padding-bottom: 4rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  background-color: var(--color-surface);
  border-radius: 1rem;
}
</style>