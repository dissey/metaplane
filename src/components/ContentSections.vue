<template>
  <div class="content-sections">
    <!-- Governance Token Section -->
    <section class="section governance-token-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $t("sections.governanceToken.title") }}
          </h2>
          <div class="section-subtitle">
            {{ $t("sections.governanceToken.subtitle") }}
          </div>
        </div>

        <div class="token-features">
          <div class="feature-card">
            <div class="feature-icon">
              <img
                src="@/assets/token_1.png"
                alt="Token Icon 1"
                class="token-icon"
              />
            </div>
            <div class="feature-description">
              {{ $t("sections.governanceToken.feature1.description") }}
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img
                src="@/assets/token_2.png"
                alt="Token Icon 2"
                class="token-icon"
              />
            </div>
            <div class="feature-description">
              {{ $t("sections.governanceToken.feature2.description") }}
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img
                src="@/assets/token_3.png"
                alt="Token Icon 3"
                class="token-icon"
              />
            </div>
            <div class="feature-description">
              {{ $t("sections.governanceToken.feature3.description") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Treasury Strategy Section -->
    <section class="section treasury-section">
      <div class="container">
        <div class="section-content">
          <div class="section-text">
            <h2 class="section-title">
              {{ $t("sections.treasuryStrategy.title") }}
            </h2>
            <div class="section-description">
              {{ $t("sections.treasuryStrategy.description") }}
            </div>
            <div class="strategy-points">
              <div class="strategy-point">
                <span class="point-bullet">•</span>
                <span>{{ $t("sections.treasuryStrategy.point1") }}</span>
              </div>
              <div class="strategy-point">
                <span class="point-bullet">•</span>
                <span>{{ $t("sections.treasuryStrategy.point2") }}</span>
              </div>
              <div class="strategy-point">
                <span class="point-bullet">•</span>
                <span>{{ $t("sections.treasuryStrategy.point3") }}</span>
              </div>
              <div class="strategy-point">
                <span class="point-bullet">•</span>
                <span>{{ $t("sections.treasuryStrategy.point4") }}</span>
              </div>
            </div>
          </div>
          <div class="section-visual">
            <img
              src="@/assets/treasury.png"
              alt="Treasury Strategy"
              class="treasury-image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Token Economy Section -->
    <section class="section token-economy-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t("sections.tokenEconomy.title") }}</h2>
        </div>

        <div class="section-content">
          <div class="section-visual">
            <img
              src="@/assets/economy.png"
              alt="Token Economy"
              class="economy-image"
            />
          </div>

          <div class="section-text">
            <div class="economy-timeline">
              <div class="timeline-line"></div>

              <div class="economy-item">
                <div class="item-marker"></div>
                <div class="item-label">
                  {{ $t("sections.tokenEconomy.utility.label") }}
                </div>
                <div class="item-description">
                  {{ $t("sections.tokenEconomy.utility.description") }}
                </div>
              </div>

              <div class="economy-item">
                <div class="item-marker"></div>
                <div class="item-label">
                  {{ $t("sections.tokenEconomy.growthModel.label") }}
                </div>
                <div class="item-description">
                  {{ $t("sections.tokenEconomy.growthModel.description") }}
                </div>
              </div>

              <div class="economy-item">
                <div class="item-marker"></div>
                <div class="item-label">
                  {{ $t("sections.tokenEconomy.valueAssumption.label") }}
                </div>
                <div class="item-description">
                  {{ $t("sections.tokenEconomy.valueAssumption.description") }}
                </div>
              </div>

              <div class="economy-item">
                <div class="item-marker"></div>
                <div class="item-label">
                  {{ $t("sections.tokenEconomy.important.label") }}
                </div>
                <div class="item-description">
                  {{ $t("sections.tokenEconomy.important.description") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Growth Model Section -->
    <section class="section growth-model-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t("sections.growthModel.title") }}</h2>
          <div class="section-subtitle-sub">
            {{ $t("sections.growthModel.subtitle") }}
          </div>
        </div>

        <div class="growth-card">
          <div class="growth-content">
            <div class="growth-text">
              <div class="info-panel">
                <div class="info-item">
                  <div class="bullet">•</div>
                  <div class="info-text">
                    {{ $t("sections.growthModel.month1") }}
                  </div>
                </div>

                <div class="info-item">
                  <div class="bullet">•</div>
                  <div class="info-text">
                    {{ $t("sections.growthModel.month2") }}
                  </div>
                </div>

                <div class="info-item">
                  <div class="bullet">•</div>
                  <div class="info-text">
                    {{ $t("sections.growthModel.andSoOn") }}
                  </div>
                </div>
              </div>
            </div>

            <div class="growth-chart">
              <div class="chart-container">
                <div class="chart-visual">
                  <div class="chart-bars">
                    <div class="bar" style="height: 30%"></div>
                    <div class="bar" style="height: 55%"></div>
                    <div class="bar" style="height: 80%"></div>
                    <div class="bar" style="height: 95%"></div>
                    <div class="bar" style="height: 70%"></div>
                    <div class="bar" style="height: 85%"></div>
                  </div>
                  <div class="chart-labels">
                    <span>{{
                      $t("sections.growthModel.chartLabels.jan")
                    }}</span>
                    <span>{{
                      $t("sections.growthModel.chartLabels.feb")
                    }}</span>
                    <span>{{
                      $t("sections.growthModel.chartLabels.mar")
                    }}</span>
                    <span>{{
                      $t("sections.growthModel.chartLabels.apr")
                    }}</span>
                    <span>{{
                      $t("sections.growthModel.chartLabels.may")
                    }}</span>
                    <span>{{
                      $t("sections.growthModel.chartLabels.jun")
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Roadmap Section -->
    <section class="section roadmap-section">
      <!-- Desktop Roadmap (>768px) -->
      <div class="roadmap-desktop" v-show="screenWidth > 768">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">{{ $t("sections.roadmap.title") }}</h2>
          </div>
          <!-- Desktop roadmap content will be overlaid on background image -->
        </div>
      </div>

      <!-- Mobile Roadmap (≤768px) -->
      <div class="roadmap-mobile" v-show="screenWidth <= 768">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">{{ $t("sections.roadmap.title") }}</h2>
          </div>

          <!-- Mobile roadmap image content -->
          <div class="roadmap-content">
            <!-- Launch Phase (Top Left) -->
            <div class="roadmap-phase launch-phase">
              <h3 class="phase-title">Launch Phase</h3>
              <ul class="phase-tasks">
                <li>Token issuance & exchange listings.</li>
                <li>Whitepaper publication.</li>
              </ul>
            </div>

            <!-- Utility Rollout (Top Right) -->
            <div class="roadmap-phase utility-phase">
              <h3 class="phase-title">Utility Rollout</h3>
              <ul class="phase-tasks">
                <li>Token payment integrations.</li>
                <li>Service discounts enabled.</li>
              </ul>
            </div>

            <!-- Expansion Phase (Bottom Left) -->
            <div class="roadmap-phase expansion-phase">
              <h3 class="phase-title">Expansion Phase</h3>
              <ul class="phase-tasks">
                <li>Governance portal launch.</li>
                <li>Member growth campaigns.</li>
              </ul>
            </div>

            <!-- Scaling (Bottom Right) -->
            <div class="roadmap-phase scaling-phase">
              <h3 class="phase-title">Scaling</h3>
              <ul class="phase-tasks">
                <li>New exchange listings.</li>
                <li>Ecosystem partnerships.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Exchange Listings Section -->
    <section class="section exchange-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t("sections.exchanges.title") }}</h2>
          <div class="section-subtitle">
            {{ $t("sections.exchanges.subtitle") }}
          </div>
        </div>

        <div class="exchange-grid">
          <div
            v-for="(exchange, index) in exchanges"
            :key="index"
            class="exchange-card"
            :class="{ unAble: !exchange.isShow }"
          >
            <img
              :src="exchange.logo"
              :alt="exchange.name"
              class="exchange-logo"
            />
            <div class="exchange-name">{{ $t(exchange.nameKey) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Governance Section -->
    <section class="section governance-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t("sections.governance.title") }}</h2>
          <div class="section-subtitle">
            {{ $t("sections.governance.subtitle") }}
          </div>
        </div>

        <div class="governance-features">
          <div class="governance-card">
            <div class="governance-icon">
              <img
                src="@/assets/gover_1.png"
                alt="Submit proposals"
                class="governance-image"
              />
            </div>
            <h3 class="governance-title">
              {{ $t("sections.governance.submitProposals") }}
            </h3>
          </div>

          <div class="governance-card">
            <div class="governance-icon">
              <img
                src="@/assets/gover_2.png"
                alt="Vote transparently"
                class="governance-image"
              />
            </div>
            <h3 class="governance-title">
              {{ $t("sections.governance.voteTransparently") }}
            </h3>
          </div>

          <div class="governance-card">
            <div class="governance-icon">
              <img
                src="@/assets/gover_3.png"
                alt="Shape the future"
                class="governance-image"
              />
            </div>
            <h3 class="governance-title">
              {{ $t("sections.governance.shapeFuture") }}
            </h3>
          </div>
        </div>

        <div class="governance-action">
          <button class="btn btn-primary">
            {{ $t("sections.governance.startGovernance") }}
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t("sections.faq.title") }}</h2>
        </div>

        <div class="faq-list">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ faq.question }}</span>
              <svg
                class="faq-icon"
                :class="{ active: openFaqs.includes(index) }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </button>
            <div class="faq-answer" v-show="openFaqs.includes(index)">
              <div>{{ faq.answer }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const openFaqs = ref<number[]>([]);

// Responsive screen width for roadmap sections
const screenWidth = ref(window.innerWidth);

// Exchange data
const exchanges = [
  {
    name: "BNB",
    nameKey: "sections.exchanges.coingecko",
    logo: "/src/assets/list_1.png",
    active: true,
    isShow: false,
  },
  {
    name: "DEX",
    nameKey: "sections.exchanges.dex",
    logo: "/src/assets/list_2.png",
    active: false,
    isShow: true,
  },
  {
    name: "Uniswap",
    nameKey: "sections.exchanges.uniswap",
    logo: "/src/assets/list_3.png",
    active: false,
    isShow: true,
  },
  {
    name: "Bitget",
    nameKey: "sections.exchanges.bitget",
    logo: "/src/assets/list_4.png",
    active: false,
    isShow: true,
  },
  {
    name: "PancakeSwap",
    nameKey: "sections.exchanges.pancakeswap",
    logo: "/src/assets/list_5.png",
    active: false,
    isShow: true,
  },
];

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const faqs = computed(() => [
  {
    question: t("sections.faq.questions.0.question"),
    answer: t("sections.faq.questions.0.answer"),
  },
  {
    question: t("sections.faq.questions.1.question"),
    answer: t("sections.faq.questions.1.answer"),
  },
  {
    question: t("sections.faq.questions.2.question"),
    answer: t("sections.faq.questions.2.answer"),
  },
  {
    question: t("sections.faq.questions.3.question"),
    answer: t("sections.faq.questions.3.answer"),
  },
  {
    question: t("sections.faq.questions.4.question"),
    answer: t("sections.faq.questions.4.answer"),
  },
]);

const toggleFaq = (index: number) => {
  const faqIndex = openFaqs.value.indexOf(index);
  if (faqIndex > -1) {
    openFaqs.value.splice(faqIndex, 1);
  } else {
    openFaqs.value.push(index);
  }
};
</script>

<style scoped>
.content-sections {
  padding-top: 0;
  background: #010e19;
}
.section {
  /* padding: 4rem 0; */
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  /* 80px 64px */
  padding-top: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;

  background: linear-gradient(45deg, #1eadf0 0%, #0afb60 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-style: normal;
  text-transform: none;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.section-subtitle-sub {
  font-size: 24px;
  color: #c0c7cd;
}

.section-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-content.reverse {
  grid-template-columns: 1fr 1fr;
}

.section-text {
  max-width: 600px;
}

.section-description {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Governance Token Section */
.governance-token-section {
  background: #010e19;
  padding-bottom: 17px;
}

.token-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  background: linear-gradient(
    315deg,
    rgba(105, 255, 238, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 13%,
    rgba(255, 255, 255, 0.05) 86%,
    rgba(105, 255, 238, 0.2) 100%
  );
  border-radius: 12px 12px 12px 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 245, 255, 0.2);
  border-color: var(--color-primary);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  color: var(--color-background);
}

.feature-icon svg {
  width: 30px;
  height: 30px;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.feature-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Treasury Strategy Section */
.treasury-section {
  background: var(--color-grey);
}

.strategy-points {
  margin-top: 2rem;
}

.strategy-point {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
}

.point-bullet {
  color: var(--color-primary);
  font-weight: bold;
  font-size: 1.2rem;
}

.treasury-illustration {
  position: relative;
  width: 400px;
  height: 300px;
  margin: 0 auto;
}

.floating-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-coin {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-secondary)
  );
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
}

.coin-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 20%;
  animation: float1 6s ease-in-out infinite;
}

.coin-2 {
  width: 60px;
  height: 60px;
  top: 60%;
  right: 30%;
  animation: float2 8s ease-in-out infinite;
}

.coin-3 {
  width: 40px;
  height: 40px;
  bottom: 20%;
  left: 50%;
  animation: float3 7s ease-in-out infinite;
}

@keyframes float1 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(-180deg);
  }
}

@keyframes float3 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
}

/* Token Economy Section */
.token-economy-section {
  background: linear-gradient(
    135deg,
    rgba(0, 255, 136, 0.05),
    rgba(0, 245, 255, 0.05)
  );
  padding: 4rem 0;
}

.token-3d-container {
  position: relative;
  width: 400px;
  height: 350px;
  margin: 0 auto;
}

.token-platform {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 40px;
}

.platform-base {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    145deg,
    rgba(0, 245, 255, 0.3),
    rgba(76, 201, 240, 0.2)
  );
  border-radius: 50%;
  transform: perspective(100px) rotateX(60deg);
  box-shadow: 0 0 30px rgba(0, 245, 255, 0.4);
}

.platform-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba(0, 245, 255, 0.2), transparent);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.token-coin {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.coin-btc {
  background: linear-gradient(45deg, #f7931a, #ff6b35);
  top: 20%;
  left: 10%;
  animation: float1 6s ease-in-out infinite;
}

.coin-eth {
  background: linear-gradient(45deg, #627eea, #8a92b2);
  top: 15%;
  right: 15%;
  animation: float2 7s ease-in-out infinite;
}

.coin-dollar {
  background: linear-gradient(45deg, #22c55e, #16a34a);
  bottom: 30%;
  left: 20%;
  animation: float3 5s ease-in-out infinite;
}

@keyframes float1 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(-180deg);
  }
}

@keyframes float3 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-25px) rotate(360deg);
  }
}

.growth-arrow {
  position: absolute;
  top: 25%;
  right: 20%;
  width: 80px;
  height: 100px;
}

.arrow-line {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 3px;
  height: 80px;
  background: linear-gradient(
    to top,
    var(--color-primary),
    var(--color-secondary)
  );
  transform: translateX(-50%) rotate(-15deg);
  border-radius: 2px;
}

.arrow-head {
  position: absolute;
  top: 0;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid var(--color-secondary);
  transform: rotate(-15deg);
}

.data-visualization {
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 60px;
  height: 80px;
}

.chart-bars {
  display: flex;
  align-items: end;
  justify-content: space-between;
  height: 100%;
  gap: 2px;
}

.bar {
  background: linear-gradient(
    to top,
    var(--color-primary),
    var(--color-secondary)
  );
  width: 8px;
  border-radius: 2px 2px 0 0;
  animation: barGrow 2s ease-out;
  box-shadow: 0 0 5px rgba(0, 245, 255, 0.3);
}

@keyframes barGrow {
  from {
    height: 0%;
  }
  to {
    height: var(--height, 100%);
  }
}

.economy-timeline {
  position: relative;
  padding-left: 0;
  max-width: 600px;
}

.timeline-line {
  position: absolute;
  left: 200px; /* Position after the labels */
  top: 18px;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--color-primary),
    var(--color-secondary)
  );
  height: calc(100% - 97px);
}

.economy-item {
  display: grid;
  grid-template-columns: 180px 1fr;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
  gap: 2rem;
}

.item-marker {
  position: absolute;
  left: 194px; /* Align with the timeline line */
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  background: linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-secondary)
  );
  border-radius: 50%;
  border: 2px solid var(--color-background);
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.5);
  z-index: 2;
}

.item-label {
  font-weight: 700;
  color: var(--color-primary);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: right;
  padding-right: 1rem;
}

.item-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  padding-left: 1rem;
}

/* Growth Model Section */
.growth-model-section {
  background: var(--color-grey);
  padding: 4rem 0;
}

.growth-content {
  align-items: stretch;
  max-width: 1000px;
  margin: 0 auto;
}

.growth-info-panel {
  background: linear-gradient(
    145deg,
    rgba(26, 31, 53, 0.95),
    rgba(42, 47, 69, 0.9)
  );
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  /* backdrop-filter: blur(15px); */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 0.75rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.bullet {
  color: var(--color-primary);
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.info-text {
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

.growth-table {
  margin-top: 2rem;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  background: linear-gradient(
    145deg,
    rgba(26, 31, 53, 0.95),
    rgba(42, 47, 69, 0.9)
  );
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.data-table th {
  background: linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-secondary)
  );
  color: var(--color-background);
  padding: 0.75rem;
  font-weight: 600;
  font-size: 0.875rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.data-table td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.data-table tr:last-child td {
  border-bottom: none;
}

.data-table tr:nth-child(even) {
  background: rgba(0, 245, 255, 0.05);
}

.data-table tr:hover {
  background: rgba(0, 245, 255, 0.1);
  transition: background 0.3s ease;
}

.data-table td:first-child {
  font-weight: 600;
  color: var(--color-primary);
}

.data-table td:last-child {
  font-weight: 600;
  color: var(--color-accent);
}

.growth-card {
}

.growth-content {
  display: flex;
  min-height: 400px;
}

.growth-text {
  background: linear-gradient(
    135deg,
    rgba(0, 245, 255, 0.1),
    rgba(76, 201, 240, 0.05)
  );
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.growth-info-panel {
  width: 100%;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
}

.bullet {
  color: var(--color-primary);
  font-weight: bold;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.info-text {
  color: var(--color-text-secondary);
}

.growth-chart {
  background: linear-gradient(
    135deg,
    rgba(243, 156, 18, 0.1),
    rgba(52, 152, 219, 0.05)
  );
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-container {
  position: relative;
  height: 350px;
  width: 100%;
  max-width: 500px;
}

.chart-canvas {
  width: 100% !important;
  height: 100% !important;
}

/* Roadmap Section */
.roadmap-section {
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Desktop Roadmap Styles */
.roadmap-desktop {
  background: linear-gradient(135deg, #0a1428 0%, #1a1f35 50%, #0f1729 100%);
  background-image: url("@/assets/roadMap_pc.png");
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  padding: 4rem 0 6rem;
  position: relative;
  overflow: hidden;
}

.roadmap-desktop::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(10, 20, 40, 0.7) 0%,
    rgba(26, 31, 53, 0.6) 50%,
    rgba(15, 23, 41, 0.8) 100%
  );
  z-index: 1;
}

.roadmap-desktop .container {
  position: relative;
  z-index: 2;
  max-width: var(--breakpoint-xl);
  margin: 0 auto;
  padding: 0 1rem;
}

/* Mobile Roadmap Styles */
.roadmap-mobile {
  /* height: 315px; */
  background: linear-gradient(135deg, #0a1428 0%, #1a1f35 50%, #0f1729 100%);
  background-image: url("@/assets/roadMap.png");
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  position: relative;
  overflow: hidden;
}
.roadmap-mobile .container {
  padding: 0;
}

.roadmap-mobile::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(10, 20, 40, 0.85) 0%,
    rgba(26, 31, 53, 0.8) 50%,
    rgba(15, 23, 41, 0.9) 100%
  );
  z-index: 1;
}

.roadmap-mobile .container {
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0;
}

.roadmap-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  /* gap: 2rem; */
  margin-top: 1rem;
  position: relative;
  min-height: 400px;
  align-items: start;
}

.roadmap-mobile .roadmap-image {
  grid-column: 1 / 3;
  grid-row: 2;
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  z-index: 1;
  justify-self: center;
}

/* Roadmap Phase Styling */
.roadmap-phase {
  position: relative;
  min-width: 180px;
  max-width: 200px;
  /* backdrop-filter: blur(15px); */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.phase-marker {
  width: 12px;
  height: 12px;
  background: linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-secondary)
  );
  border-radius: 50%;
  border: 2px solid var(--color-background);
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.6);
  margin-bottom: 0.5rem;
  position: relative;
}

.phase-title {
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-align: left;
}

.phase-tasks {
  list-style: none;
  padding: 0;
  margin: 0;
}

.phase-tasks li {
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
  padding-left: 1rem;
  position: relative;
  line-height: 1.4;
}

.phase-tasks li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

/* Phase Grid Positioning */
.launch-phase {
  grid-column: 1;
  grid-row: 1;
}

.utility-phase {
  grid-column: 2;
  grid-row: 1;
}

.expansion-phase {
  grid-column: 1;
  grid-row: 3;
}

.scaling-phase {
  grid-column: 2;
  grid-row: 3;
}

/* Phase Connectors - Vertical lines extending from phase-marker */
.phase-connector {
  position: absolute;
  background: linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-secondary)
  );
  width: 2px;
  height: 80px;
}

.launch-connector {
  top: 12px;
  left: 6px;
}

.utility-connector {
  top: 12px;
  left: 6px;
}

.expansion-connector {
  top: -80px;
  left: 6px;
}

.scaling-connector {
  top: -80px;
  left: 6px;
}

.roadmap-waves {
  position: relative;
  width: 100%;
  height: 300px;
  margin: 2rem 0;
  z-index: 3;
}

.wave-svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.wave-svg path {
  animation: waveFlow 8s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.3));
}

.wave-svg path:nth-child(4) {
  animation-delay: 1s;
}

.wave-svg path:nth-child(5) {
  animation-delay: 2s;
}

@keyframes waveFlow {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.roadmap-timeline {
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: -150px;
  z-index: 4;
}

.timeline-milestone {
  position: absolute;
  top: 0;
  transform: translateX(0); /* Remove centering */
  z-index: 10;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.milestone-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-secondary)
  );
  border-radius: 50%;
  border: 3px solid var(--color-background);
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.6);
  position: relative;
  z-index: 2;
}

.marker-line {
  width: 2px;
  height: 120px;
  background: linear-gradient(to bottom, var(--color-primary), transparent);
  margin-top: -2px;
}

.milestone-content {
  background: linear-gradient(
    145deg,
    rgba(26, 31, 53, 0.95),
    rgba(42, 47, 69, 0.9)
  );
  /* border: 1px solid var(--color-border); */
  border-radius: 1rem;
  padding: 1.5rem;
  min-width: 200px;
  max-width: 250px;
  /* backdrop-filter: blur(15px); */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  position: relative;
  margin-top: 40px; /* Align with marker dot */
}

.milestone-title {
  color: var(--color-primary);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left; /* Left align instead of center */
}

.milestone-tasks {
  list-style: none;
  padding: 0;
  margin: 0;
}

.milestone-tasks li {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
  line-height: 1.4;
}

.milestone-tasks li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

/* Exchange Section */
.exchange-section {
  background: var(--color-surface);
}

.exchange-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 auto;
}

.exchange-card {
  background: linear-gradient(
    145deg,
    var(--color-surface-light),
    var(--color-surface)
  );
  border: 2px solid var(--color-border);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: clamp(1rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1rem);
}

.exchange-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 245, 255, 0.2);
}

.unAble:hover {
  background: linear-gradient(
    135deg,
    rgba(30, 173, 240, 0.5) 0%,
    rgba(10, 251, 96, 0.5) 100%
  );
}
.exchange-card.active {
  background: linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-secondary)
  );
  border-color: var(--color-primary);
  color: var(--color-background);
}

.exchange-name {
  font-weight: 700;
  font-size: clamp(0.7rem, 2vw, 1.1rem);
}

/* Governance Section */
.governance-section {
}

.governance-features {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
  overflow-x: auto;
}

@media (max-width: 1024px) {
  .governance-features {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .governance-features {
    gap: 1rem;
    margin-bottom: 16px;
  }
}

@media (max-width: 480px) {
  .governance-features {
    gap: 0.5rem;
  }
}

.governance-card {
  text-align: center;
  transition: all 0.3s ease;
}

.governance-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 245, 255, 0.2);
  border-color: var(--color-primary);
}

.governance-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, var(--color-primary), var(--color-accent));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
}

.governance-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
}

.governance-action {
  text-align: center;
}
.governance-action .btn {
  /* width: 155px;
  height: 40px; */
  background: linear-gradient(135deg, #1eadf0 0%, #0afb60 100%), #333333;
  border-radius: 8px 8px 8px 8px;
}

/* FAQ Section */
.faq-section {
  background-image: url("@/assets/FAQ_pc.png");
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.faq-section .container {
  position: relative;
  z-index: 2;
  max-width: var(--breakpoint-xl);
  margin: 0 auto;
  padding: 4rem 1rem 0;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-radius: 8px 8px 8px 8px;
  border: 1px solid rgba(157, 255, 251, 0.2);
  margin-bottom: 1rem;
  overflow: hidden;
  background: rgba(202, 249, 236, 0.1);
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  background: transparent;
  border: none;
  color: var(--color-text);
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
}

.faq-question:hover {
  color: var(--color-primary);
}

.faq-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.faq-icon.active {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .section-content {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
  }
  .section-content,
  .section-content.reverse,
  .growth-content {
    text-align: center;
  }
  .section-text {
    max-width: 400px;
  }
  .section-visual {
    width: fit-content;
  }

  .token-features {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .governance-features {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  /* Roadmap mobile layout for tablets */
  .roadmap-timeline::before {
    left: 30px;
  }

  .timeline-item {
    flex-direction: row !important;
    align-items: flex-start;
    padding-left: 70px;
  }

  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    flex-direction: row !important;
  }

  .timeline-marker {
    left: 30px;
    transform: translateX(-50%);
  }

  .timeline-content {
    width: 100%;
    margin: 0 !important;
    text-align: left !important;
  }

  .timeline-content::before {
    left: -20px;
    border-right-color: var(--color-border);
    border-left-color: transparent;
  }

  .timeline-item:nth-child(even) .timeline-content::before {
    left: -20px;
    border-right-color: var(--color-border);
    border-left-color: transparent;
  }
}

@media (max-width: 768px) {
  .faq-section .container {
    padding-top: 20px;
  }
  .section-header {
    margin-bottom: 2.5rem;
  }
  .faq-section {
    background-image: url("@/assets/FAQ.png");
  }
  .section-title {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }

  .section-subtitle,
  .section-description {
    font-size: 14px;
    padding: 0 1rem;
    text-align: left;
  }
  .section-subtitle-sub {
    font-size: 12px;
  }
  .container {
    padding: 0 1rem;
  }

  .token-features {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .feature-card {
    padding: 1.25rem;
  }

  .feature-title {
    font-size: 1rem;
  }

  .feature-description {
    font-size: 0.75rem;
  }

  .governance-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .governance-card {
    /* padding: 1.5rem; */
    flex: 1;
  }

  .exchange-grid {
    grid-template-columns: repeat(5, 1fr);
  }

  .exchange-card {
    padding: 1rem 0.5rem;
  }

  .exchange-logo {
    width: 45px;
    height: 45px;
    margin-bottom: 0.5rem;
  }

  .exchange-name {
    font-size: 0.8rem;
  }

  .growth-stats,
  .growth-chart,
  .growth-info-panel {
    padding: 1.5rem;
  }

  .chart-bars {
    height: 150px;
    margin: 0 20px 15px 30px;
  }

  .chart-y-axis {
    bottom: 30px;
  }

  .chart-labels {
    margin: 0 20px;
  }

  .treasury-illustration,
  .token-3d-container {
    width: 300px;
    height: 250px;
  }

  .floating-coin,
  .flow-node {
    transform: scale(0.8);
  }

  .token-coin {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .growth-arrow {
    width: 60px;
    height: 80px;
  }

  .data-visualization {
    width: 50px;
    height: 60px;
  }

  .faq-question {
    padding: 1.25rem;
    font-size: 1rem;
  }

  .faq-answer {
    padding: 0 1.25rem 1.25rem;
  }

  /* Roadmap mobile optimization */
  .roadmap-waves {
    height: 200px;
  }

  .roadmap-timeline {
    height: 350px;
    margin-top: -100px;
  }

  .timeline-milestone {
    position: relative;
    left: auto !important;
    transform: none;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .milestone-marker {
    margin-bottom: 1rem;
  }

  .marker-line {
    height: 0;
  }

  .milestone-content {
    min-width: auto;
    max-width: 100%;
    width: 100%;
  }
  .item-description {
    text-align: left;
  }
  .governance-action {
    padding-bottom: 24px;
  }
  .governance-title {
    padding: 10px 0;
    margin-bottom: 0;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 2rem;
  }

  .faq-section {
    background-image: url("@/assets/FAQ.png");
  }
  .section-title {
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 0.75rem;
  }

  .section-subtitle,
  .section-description {
    font-size: 11px;
    padding: 0 0.5rem;
    text-align: left;
  }

  .container {
    padding: 0 0.75rem;
  }

  .token-features {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .feature-title,
  .governance-title {
    font-size: 0.9rem;
  }

  .feature-description {
    font-size: 0.7rem;
  }

  .feature-icon,
  .governance-icon {
    width: 45px;
    height: 45px;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .feature-icon svg {
    width: 24px;
    height: 24px;
  }

  .exchange-grid {
    grid-template-columns: repeat(5, 1fr);
  }

  .exchange-card {
    padding: 0.875rem 0.25rem;
  }

  .exchange-logo {
    width: 35px;
    height: 35px;
    margin-bottom: 0.25rem;
  }

  .exchange-name {
    font-size: 0.7rem;
  }

  .strategy-points {
    margin-top: 1.5rem;
  }

  .strategy-point {
    gap: 0.75rem;
    margin-bottom: 0.875rem;
    font-size: 0.875rem;
    text-align: left;
  }

  .economy-details {
    margin-top: 1.5rem;
  }

  .economy-item {
    padding: 0.875rem;
    margin-bottom: 0;
  }

  .item-label {
    font-size: 0.75rem;
  }

  .item-description {
    font-size: 0.875rem;
    text-align: left;
  }

  .growth-stats,
  .growth-chart,
  .growth-info-panel {
    padding: 1.25rem;
  }

  .growth-content {
    flex-direction: column-reverse;
  }

  .growth-text,
  .growth-chart {
    padding: 1.5rem;
    background: transparent;
  }
  .growth-text {
    margin-top: 22px;
    padding: 22px 0 0;
  }
  .chart-container {
    height: 250px;
    max-width: 100%;
  }

  .chart-container {
    height: 240px;
  }

  .chart-bars {
    height: 120px;
    gap: 0.5rem;
    margin: 0 15px 15px 25px;
  }

  .chart-bar {
    width: 15px;
  }

  .bar-group {
    gap: 1px;
  }

  .chart-labels {
    font-size: 0.7rem;
    margin: 0 15px;
  }

  .chart-legend {
    gap: 1rem;
    margin-top: 0.75rem;
  }

  .legend-item span {
    font-size: 0.7rem;
  }

  .growth-model-section {
    padding: 20px 0;
  }
  .growth-model-section .container {
    padding: 0 12px;
  }
  .info-item {
    margin-bottom: 1.25rem;
    text-align: left;
  }
  .bullet {
    margin-top: 0;
    line-height: 1;
  }

  .info-text {
    font-size: 0.85rem;
  }

  .data-table {
    font-size: 0.8rem;
  }

  .data-table th,
  .data-table td {
    padding: 0.5rem 0.25rem;
  }

  .treasury-illustration,
  .token-3d-container {
    width: 100%;
    height: 200px;
    max-width: 280px;
  }

  .floating-coin {
    transform: scale(0.7);
  }

  .coin-1 {
    width: 60px;
    height: 60px;
  }

  .coin-2 {
    width: 45px;
    height: 45px;
  }

  .coin-3 {
    width: 30px;
    height: 30px;
  }

  .flow-node {
    width: 60px;
    height: 60px;
    transform: scale(0.7);
  }

  .token-coin {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }

  .growth-arrow {
    width: 50px;
    height: 60px;
  }

  .arrow-line {
    height: 50px;
  }

  .data-visualization {
    width: 40px;
    height: 50px;
  }

  .economy-timeline {
    padding-left: 0;
  }

  .timeline-line {
    left: 20px;
  }

  .economy-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    margin-bottom: 0;
    padding-left: 50px;
  }

  .item-marker {
    left: 14px;
    top: 1.1rem;
    transform: none;
    width: 12px;
    height: 12px;
  }

  .item-label {
    text-align: left;
    padding-right: 0;
    margin-bottom: 0.5rem;
  }

  .item-description {
    padding-left: 0;
  }

  .faq-question {
    padding: 1rem;
    font-size: 0.95rem;
  }

  .faq-answer {
    padding: 0 1rem 1rem;
    font-size: 0.875rem;
  }

  .faq-icon {
    width: 18px;
    height: 18px;
  }

  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
    min-width: 200px;
  }

  .roadmap-content {
    margin-top: 1rem;
    min-height: 270px;
  }

  .roadmap-mobile .roadmap-image {
    border-radius: 4px;
  }

  .roadmap-phase {
  }

  .phase-title {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }

  .phase-tasks li {
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
  }

  /* Growth Model mobile optimization */
  .growth-info-panel,
  .growth-chart {
    padding: 1rem;
  }

  .chart-container {
    height: 200px;
  }

  .chart-bars {
    height: 100px;
    margin: 0 10px 10px 20px;
  }

  .chart-bar {
    width: 12px;
  }

  .info-text {
    font-size: 0.8rem;
  }

  .chart-legend {
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .data-table {
    font-size: 0.75rem;
  }

  .data-table th,
  .data-table td {
    padding: 0.4rem 0.2rem;
  }

  .growth-table {
    margin-top: 1.5rem;
    overflow-x: auto;
  }
}

@media (max-width: 375px) {
  .container {
    padding: 0 0.5rem;
  }

  .faq-section {
    background-image: url("@/assets/FAQ.png");
  }
  .section-title {
    font-size: 1.375rem;
  }

  .section-subtitle,
  .section-description {
    font-size: 11px;
    text-align: left;
  }

  .token-features {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }

  .feature-card,
  .governance-card {
    padding: 0.875rem;
  }

  .feature-title,
  .governance-title {
    font-size: 0.8rem;
    margin-bottom: 0;
  }

  .feature-description {
    font-size: 0.75rem;
  }

  .feature-icon,
  .governance-icon {
    width: 45px;
    height: 45px;
    font-size: 1.25rem;
  }

  .btn {
    padding: 0.75rem 1.25rem;
    font-size: 0.85rem;
    min-width: 180px;
  }

  .treasury-illustration,
  .token-3d-container {
    height: 160px;
  }

  .token-coin {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }

  .growth-arrow {
    width: 40px;
    height: 50px;
  }

  .data-visualization {
    width: 35px;
    height: 40px;
  }

  .economy-timeline {
    padding-left: 0;
  }

  .timeline-line {
    left: 15px;
  }

  .economy-item {
    grid-template-columns: 1fr;
    gap: 0.25rem;
    margin-bottom: 0;
    padding-left: 40px;
  }

  .item-marker {
    left: 9px;
    top: 1.25rem;
    transform: none;
    width: 10px;
    height: 10px;
  }

  .item-label {
    text-align: left;
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
  }

  .item-description {
    font-size: 0.85rem;
    padding-left: 0;
  }

  .roadmap-content {
    margin-top: 1rem;
    min-height: 270px;
  }

  .roadmap-mobile .roadmap-image {
    border-radius: 4px;
  }

  .roadmap-phase {
  }

  .phase-title {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  .phase-tasks li {
    font-size: 0.65rem;
    margin-bottom: 0.2rem;
  }
}

/* Image Styles */
.token-icon,
.treasury-image,
.economy-image,
.roadmap-image,
.exchange-logo,
.governance-image,
.faq-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.3)); */
}

.token-icon {
  width: 40px;
  height: 40px;
}

.treasury-image {
  max-width: 400px;
  height: auto;
}

.economy-image {
  max-width: 400px;
  height: auto;
}

.roadmap-image {
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
}

.exchange-logo {
  width: clamp(40px, 8vw, 60px);
  height: clamp(40px, 8vw, 60px);
  margin-bottom: 1rem;
  object-fit: contain;
  transition: all 0.3s ease;
}

.governance-image {
  width: 80px;
  height: 80px;
}

.roadmap-visual {
  text-align: center;
  margin-bottom: 3rem;
}

.chart-visual {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.chart-bars {
  display: flex;
  align-items: end;
  justify-content: space-between;
  height: 200px;
  gap: 8px;
  margin-bottom: 1rem;
}

.chart-bars .bar {
  background: linear-gradient(to top, #00f5ff, #4cc9f0, #00ff88);
  width: 30px;
  border-radius: 4px 4px 0 0;
  min-height: 20px;
  box-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
  transition: all 0.3s ease;
}

.chart-bars .bar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
}

.chart-labels {
  display: flex;
  justify-content: space-between;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
}

.chart-labels span {
  width: 30px;
  text-align: center;
}
</style>
