<template>
  <div class="content-sections">
    <!-- Governance Token Section -->
    <section class="section governance-token-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $t("sections.governanceToken.title") }}
          </h2>
          <p class="section-subtitle">
            {{ $t("sections.governanceToken.subtitle") }}
          </p>
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
            <h3 class="feature-title">
              {{ $t("sections.governanceToken.feature1.title") }}
            </h3>
            <p class="feature-description">
              {{ $t("sections.governanceToken.feature1.description") }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img
                src="@/assets/token_2.png"
                alt="Token Icon 2"
                class="token-icon"
              />
            </div>
            <h3 class="feature-title">
              {{ $t("sections.governanceToken.feature2.title") }}
            </h3>
            <p class="feature-description">
              {{ $t("sections.governanceToken.feature2.description") }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img
                src="@/assets/token_3.png"
                alt="Token Icon 3"
                class="token-icon"
              />
            </div>
            <h3 class="feature-title">
              {{ $t("sections.governanceToken.feature3.title") }}
            </h3>
            <p class="feature-description">
              {{ $t("sections.governanceToken.feature3.description") }}
            </p>
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
            <p class="section-description">
              {{ $t("sections.treasuryStrategy.description") }}
            </p>
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
          <p class="section-subtitle">
            {{ $t("sections.growthModel.subtitle") }}
          </p>
        </div>

        <div class="growth-card">
          <div class="growth-content">
            <div class="growth-text">
              <div class="info-panel">
                <div class="info-item">
                  <span class="bullet">•</span>
                  <span class="info-text">{{
                    $t("sections.growthModel.month1")
                  }}</span>
                </div>

                <div class="info-item">
                  <span class="bullet">•</span>
                  <span class="info-text">{{
                    $t("sections.growthModel.month2")
                  }}</span>
                </div>

                <div class="info-item">
                  <span class="bullet">•</span>
                  <span class="info-text">{{
                    $t("sections.growthModel.andSoOn")
                  }}</span>
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
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t("sections.roadmap.title") }}</h2>
        </div>

        <div class="roadmap-visual">
          <img src="@/assets/roadMap.png" alt="Roadmap" class="roadmap-image" />
        </div>
      </div>
    </section>

    <!-- Exchange Listings Section -->
    <section class="section exchange-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t("sections.exchanges.title") }}</h2>
          <p class="section-subtitle">
            {{ $t("sections.exchanges.subtitle") }}
          </p>
        </div>

        <div class="exchange-grid">
          <div class="exchange-card active">
            <img
              src="@/assets/list_1.png"
              alt="CoinGecko"
              class="exchange-logo"
            />
            <div class="exchange-name">
              {{ $t("sections.exchanges.coingecko") }}
            </div>
          </div>
          <div class="exchange-card">
            <img src="@/assets/list_2.png" alt="DEX" class="exchange-logo" />
            <div class="exchange-name">{{ $t("sections.exchanges.dex") }}</div>
          </div>
          <div class="exchange-card">
            <img
              src="@/assets/list_3.png"
              alt="Uniswap"
              class="exchange-logo"
            />
            <div class="exchange-name">
              {{ $t("sections.exchanges.uniswap") }}
            </div>
          </div>
          <div class="exchange-card">
            <img src="@/assets/list_4.png" alt="Bitget" class="exchange-logo" />
            <div class="exchange-name">
              {{ $t("sections.exchanges.bitget") }}
            </div>
          </div>
          <div class="exchange-card">
            <img
              src="@/assets/list_5.png"
              alt="PancakeSwap"
              class="exchange-logo"
            />
            <div class="exchange-name">
              {{ $t("sections.exchanges.pancakeswap") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Governance Section -->
    <section class="section governance-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t("sections.governance.title") }}</h2>
          <p class="section-subtitle">
            {{ $t("sections.governance.subtitle") }}
          </p>
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
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const openFaqs = ref<number[]>([]);

const faqs = [
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
];

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
}

.section {
  padding: 4rem 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
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
  background: linear-gradient(
    135deg,
    rgba(0, 245, 255, 0.05),
    rgba(76, 201, 240, 0.05)
  );
}

.token-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: linear-gradient(
    145deg,
    var(--color-surface),
    var(--color-surface-light)
  );
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-secondary)
  );
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 245, 255, 0.2);
  border-color: var(--color-primary);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-secondary)
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
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
  background: var(--color-surface);
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
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--color-primary),
    var(--color-secondary)
  );
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
  background: var(--color-surface);
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
  backdrop-filter: blur(15px);
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

/* Growth Model Section */
.growth-model-section {
  background: linear-gradient(
    135deg,
    rgba(0, 245, 255, 0.05),
    rgba(76, 201, 240, 0.05)
  );
}

.growth-card {
  /* background: linear-gradient(145deg, rgba(26, 31, 53, 0.95), rgba(42, 47, 69, 0.9)); */
  /* border: 1px solid var(--color-border);
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4); */
}

.growth-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  background: linear-gradient(135deg, #0a1428 0%, #1a1f35 50%, #0f1729 100%);
  background-image: url("path/to/roadmap-bg.jpg"); /* Add your background image path here */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  padding: 4rem 0 6rem;
  position: relative;
  overflow: hidden;
}

.roadmap-section::before {
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

.roadmap-section .container {
  position: relative;
  z-index: 2;
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
  backdrop-filter: blur(15px);
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.exchange-card {
  background: linear-gradient(
    145deg,
    var(--color-surface-light),
    var(--color-surface)
  );
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.exchange-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 245, 255, 0.2);
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
  font-size: 1.1rem;
}

/* Governance Section */
.governance-section {
  background: linear-gradient(
    135deg,
    rgba(0, 255, 136, 0.05),
    rgba(76, 201, 240, 0.05)
  );
}

.governance-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.governance-card {
  background: linear-gradient(
    145deg,
    var(--color-surface),
    var(--color-surface-light)
  );
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
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
  padding: 4rem 1rem;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
  background: linear-gradient(
    145deg,
    var(--color-surface-light),
    var(--color-surface)
  );
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
  .section-content,
  .section-content.reverse,
  .growth-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .token-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
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
  .section {
    padding: 3rem 0;
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

  .section-subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .container {
    padding: 0 1rem;
  }

  .token-features {
    gap: 1.5rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .feature-title {
    font-size: 1.125rem;
  }

  .governance-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .governance-card {
    padding: 1.5rem;
  }

  .exchange-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .exchange-card {
    padding: 1.5rem 1rem;
  }

  .exchange-name {
    font-size: 1rem;
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
}

@media (max-width: 480px) {
  .section {
    padding: 2rem 0;
  }

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

  .section-subtitle {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }

  .container {
    padding: 0 0.75rem;
  }

  .feature-card,
  .governance-card {
    padding: 1.25rem;
  }

  .feature-title,
  .governance-title {
    font-size: 1rem;
  }

  .feature-description {
    font-size: 0.875rem;
  }

  .feature-icon,
  .governance-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .feature-icon svg {
    width: 24px;
    height: 24px;
  }

  .exchange-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .exchange-card {
    padding: 1.25rem 1rem;
  }

  .exchange-name {
    font-size: 0.9rem;
  }

  .strategy-points {
    margin-top: 1.5rem;
  }

  .strategy-point {
    gap: 0.75rem;
    margin-bottom: 0.875rem;
    font-size: 0.875rem;
  }

  .economy-details {
    margin-top: 1.5rem;
  }

  .economy-item {
    padding: 0.875rem;
    margin-bottom: 1rem;
  }

  .item-label {
    font-size: 0.75rem;
  }

  .item-description {
    font-size: 0.875rem;
  }

  .growth-stats,
  .growth-chart,
  .growth-info-panel {
    padding: 1.25rem;
  }

  .growth-content {
    grid-template-columns: 1fr;
  }

  .growth-text,
  .growth-chart {
    padding: 1.5rem;
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

  .info-item {
    margin-bottom: 1.25rem;
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
    margin-bottom: 2rem;
    padding-left: 50px;
  }

  .item-marker {
    left: 14px;
    top: 0.5rem;
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

  /* Roadmap mobile optimization */
  .roadmap-section {
    padding: 3rem 0 4rem;
  }

  .roadmap-waves {
    height: 150px;
    margin: 1rem 0;
  }

  .roadmap-timeline {
    height: auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .timeline-milestone {
    position: relative;
    left: auto !important;
    transform: none;
    margin-bottom: 0;
  }

  .milestone-marker {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0.75rem;
  }

  .marker-dot {
    width: 12px;
    height: 12px;
    border-width: 2px;
  }

  .marker-line {
    width: 0;
    height: 0;
  }

  .milestone-content {
    padding: 1rem;
    max-width: 100%;
  }

  .milestone-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .milestone-tasks li {
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
    line-height: 1.3;
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

  .section-subtitle {
    font-size: 0.85rem;
  }

  .feature-card,
  .governance-card {
    padding: 1rem;
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
    margin-bottom: 1.5rem;
    padding-left: 40px;
  }

  .item-marker {
    left: 9px;
    top: 0.25rem;
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

  /* Roadmap extra small screens */
  .roadmap-section {
    padding: 2rem 0 3rem;
  }

  .roadmap-waves {
    height: 120px;
  }

  .milestone-content {
    padding: 0.875rem;
  }

  .milestone-title {
    font-size: 0.95rem;
  }

  .milestone-tasks li {
    font-size: 0.75rem;
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
  filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.3));
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
  max-width: 800px;
  height: auto;
  margin: 0 auto;
  display: block;
}

.exchange-logo {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
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
