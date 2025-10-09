<template>
  <section class="hero">
    <!-- Space Background Image -->
    <div class="hero-background">
      <img
        :src="backgroundImage"
        alt="Space Background"
        class="hero-bg-image"
      />
      <div class="hero-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <!-- Main Title -->
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-line-1">
              {{ $t("hero.title") }}
            </span>
          </h1>
          <p class="hero-subtitle">
            {{ $t("hero.subtitle") }}
          </p>
        </div>

        <!-- Call to Action -->
        <div class="hero-actions">
          <button class="btn btn-primary">
            {{ $t("hero.readWhitepaper") }}
          </button>
          <button class="btn btn-secondary">
            {{ $t("hero.joinGovernance") }}
          </button>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-value">$122,405</div>
          <div class="stat-label">{{ $t("hero.bitcoinPrice") }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">¥560.00</div>
          <div class="stat-label">{{ $t("hero.govPrice") }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">₿830,823</div>
          <div class="stat-label">{{ $t("hero.govHoldings") }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const screenWidth = ref(window.innerWidth);

const backgroundImage = computed(() => {
  return screenWidth.value < 768
    ? "/src/assets/top.png"
    : "/src/assets/top_pc.png";
});

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 14, 26, 0.4),
    rgba(10, 14, 26, 0.6)
  );
}

.container {
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12rem 0 2rem 0;
}

.hero-content {
  text-align: center;
  /* max-width: 800px; */
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-text {
  margin-bottom: 3rem;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.title-line-1,
.title-line-2,
.title-line-3 {
  display: block;
  color: var(--color-text);
}

.title-line-1 {
  font-size: 0.8em;
  font-weight: 700;
}

.title-line-2 {
  background: linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-secondary)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 245, 255, 0.3);
  font-size: 1em;
  margin: 0.2em 0;
}

.title-line-3 {
  font-size: 0.8em;
  font-weight: 700;
}

.highlight {
  background: linear-gradient(45deg, var(--color-primary), var(--color-accent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 245, 255, 0.5);
}

.hero-subtitle {
  font-size: clamp(0.8rem, 1vw, 0.6rem);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 19rem 1rem;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.btn {
  padding: 0 2rem;
  font-size: 1rem;
  min-width: 180px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  position: relative;
  width: 240px;
  height: 56px;
  border-radius: 8px;
  border: none;
  overflow: hidden;
  color: transparent;
  background: linear-gradient(45deg, #1eadf0 0%, #0afb60 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-style: normal;
  text-transform: none;
}

.btn-primary::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(30.00000011175871, 173.00000488758087, 240.00000089406967, 1),
    rgba(10.000000353902578, 251.00000023841858, 96.00000187754631, 1)
  );
  border-radius: 8px;
  z-index: -1;
}

.btn-primary::after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  background: rgba(1, 2, 4, 0.9);
  border-radius: 7px;
  z-index: -1;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-secondary {
  width: 240px;
  height: 56px;
  background: #ffffff;
  border-radius: 8px 8px 8px 8px;
  color: #0e1a25;
  text-align: center;
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-background);
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  gap: 0;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  z-index: 3;
}

.stat-item {
  text-align: center;
  padding: 0 6rem;
  position: relative;
}

.stat-item:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--color-text),
    transparent
  );
  opacity: 0.8;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}
@media (max-width: 1000px) {
  .hero-subtitle {
    margin: 0 10rem 1rem;
  }
}
/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    min-height: calc(100vh - 378px);
  }
  .hero-subtitle {
    margin: 0 5rem 1rem;
  }
  .container {
    padding: 0 1rem;
  }

  .hero-content {
    padding: 0;
  }

  .hero-title {
    font-size: clamp(2.5rem, 8vw, 3.5rem);
    line-height: 1.2;
    margin-bottom: 2rem;
  }

  .title-line-1,
  .title-line-2,
  .title-line-3 {
    margin-bottom: 0.3rem;
  }

  .hero-subtitle {
    font-size: clamp(1rem, 4vw, 1.25rem);
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  .hero-subtitle br {
    display: none;
  }

  .hero-actions {
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .btn {
    width: 100%;
    max-width: 280px;
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }

  .hero-stats {
    flex-direction: row;
    gap: 0;
    width: 90%;
    max-width: 400px;
    margin: 2rem auto 0;
  }

  .stat-item {
    padding: 0 1.5rem;
  }

  .stat-item:not(:last-child)::after {
    height: 50px;
  }

  .stat-value {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: clamp(2rem, 7vw, 3rem);
    margin-bottom: 1.5rem;
  }

  .hero-subtitle {
    font-size: clamp(0.9rem, 3.5vw, 1.125rem);
    padding: 0 0.5rem;
    margin-bottom: 1.5rem;
  }

  .hero-actions {
    margin-bottom: 1.5rem;
  }

  .btn {
    padding: 0.875rem 1.25rem;
    font-size: 0.9rem;
    min-width: 200px;
  }

  .hero-stats {
    gap: 0;
    width: 95%;
    max-width: 350px;
    margin: 1.5rem auto 0;
  }

  .stat-item {
    padding: 0 1rem;
  }

  .stat-item:not(:last-child)::after {
    height: 40px;
  }

  .stat-value {
    font-size: 1.25rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }
}

@media (max-width: 375px) {
  .hero-title {
    font-size: 1.75rem;
    letter-spacing: -0.01em;
  }

  .hero-subtitle {
    font-size: 0.875rem;
  }

  .btn {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    min-width: 180px;
  }

  .hero-stats {
    width: 98%;
    max-width: 320px;
    margin: 1rem auto 0;
  }

  .stat-item {
    padding: 0 0.75rem;
  }

  .stat-item:not(:last-child)::after {
    height: 35px;
  }

  .stat-value {
    font-size: 1.125rem;
  }

  .stat-label {
    font-size: 0.7rem;
  }
}
</style>
