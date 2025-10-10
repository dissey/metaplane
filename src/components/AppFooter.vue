<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <span class="brand-title">{{ $t("footer.title") }}</span>
      </div>
      <div class="footer-disclaimers">
        <ul class="disclaimer-list">
          <li>{{ $t("footer.list.0") }}</li>
          <li>{{ $t("footer.list.1") }}</li>
        </ul>
        <ul class="disclaimer-list">
          <li>{{ $t("footer.list.2") }}</li>
          <li>{{ $t("footer.list.3") }}</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #14253a;
  padding: 0;
  min-height: 60px;
}
.footer-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 2rem 0 2rem;
  min-height: 60px;
}
.footer-brand {
  flex: 1;
  min-width: 220px;
}
.brand-title {
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.footer-disclaimers {
  flex: 3;
  display: flex;
  gap: 3rem;
  justify-content: flex-end;
}
.disclaimer-list {
  color: #b6c7dc;
  font-size: 0.95rem;
  list-style: disc inside;
  margin: 0;
  padding: 0;
  min-width: 260px;
}
.disclaimer-list li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
@media (max-width: 900px) {
  .footer-container {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
  .footer-disclaimers {
    flex-direction: column;
    gap: 0;
    width: 100%;
    margin-top: 1rem;
    padding-bottom: 100px;
  }
  .footer-brand {
    margin-bottom: 0.2rem;
  }
}
@media (max-width: 480px) {
  .footer-container {
    padding: 1rem;
  }
  .brand-title {
    font-size: 0.95rem;
  }
  .disclaimer-list {
    font-size: 0.85rem;
    min-width: 0;
  }
}
</style>
