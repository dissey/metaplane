<!-- filepath: d:\myProject\metaplane\src\components\ContentSections.vue -->
<script setup lang="ts">
import ponit from "@/assets/ponit.png";
import { ref, onMounted, onUnmounted } from "vue";
// import { useI18n } from "vue-i18n";

// const { t } = useI18n();
const screenWidth = ref(window.innerWidth);

const roadmapPhases = [
  {
    key: "launch",
    title: "Launch Phase",
    tasks: ["Token issuance & exchange listings.", "Whitepaper publication."],
  },
  {
    key: "utility",
    title: "Utility Rollout",
    tasks: ["Token payment integrations.", "Service discounts enabled."],
  },
  {
    key: "expansion",
    title: "Expansion Phase",
    tasks: ["Governance portal launch.", "Member growth campaigns."],
  },
  {
    key: "scaling",
    title: "Scaling",
    tasks: ["New exchange listings.", "Ecosystem partnerships."],
  },
];

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};
onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => window.removeEventListener("resize", handleResize));
</script>

<template>
  <!-- ...other sections... -->

  <!-- Roadmap Section -->
  <section class="section roadmap-section">
    <div :class="screenWidth > 768 ? 'roadmap-desktop' : 'roadmap-mobile'">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t("sections.roadmap.title") }}</h2>
        </div>
        <div
          class="roadmap-content"
          :class="{ 'roadmap-content-desktop': screenWidth > 768 }"
        >
          <div
            v-for="phase in roadmapPhases"
            :key="phase.key"
            class="roadmap-phase"
            :class="`${phase.key}-phase`"
          >
            <div>
              <img
                :src="ponit"
                alt="cursor"
                class="zhen"
                v-if="screenWidth > 768"
              />
            </div>
            <div class="roadmap-phase-right">
              <h3 class="phase-title">{{ phase.title }}</h3>
              <ul class="phase-tasks">
                <li v-for="(task, idx) in phase.tasks" :key="idx">
                  {{ task }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
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
  text-align: center;
}
.roadmap-content {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.roadmap-content-desktop {
  flex-direction: row;
  gap: 2.5rem;
  justify-content: center;
  align-items: stretch;
}
.roadmap-content-desktop .roadmap-content {
  display: flex;
}

.roadmap-phase {
  padding: 1.5rem 1rem;
  display: flex;
  align-items: flex-start;
  min-width: 0;
  max-width: 50%;
}
.roadmap-phase-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.zhen {
  width: 6px;
  height: auto;
  margin-right: 20px;
}
.phase-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;

  background: linear-gradient(45deg, #1eadf0 0%, #0afb60 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-style: normal;
}

.phase-tasks {
  list-style: none;
  padding: 0;
  margin: 0;
}

.phase-tasks li {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: 0.6rem;
  padding-left: 1rem;
  position: relative;
  line-height: 1.5;
}

.phase-tasks li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

/* Mobile Roadmap Styles */
.roadmap-mobile {
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

.roadmap-mobile .roadmap-content {
  grid-template-rows: auto auto auto;
  position: relative;
  min-height: 300px;
  align-items: start;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 0;
}
.roadmap-mobile .roadmap-content .roadmap-phase {
  padding-left: 35px;
  width: 50%;
  padding-top: 15px;
}
.roadmap-mobile .roadmap-content .roadmap-phase:first-child {
  padding-left: 20px;
  padding-top: 35px;
}
.roadmap-mobile .roadmap-content .roadmap-phase:nth-last-child(2) {
  padding-left: 65px;
  padding-top: 5px;
}
.roadmap-mobile .roadmap-content .roadmap-phase:last-child {
  padding-left: 60px;
  padding-top: 5px;
}

.roadmap-mobile .roadmap-content .phase-tasks li {
  font-size: 11px;
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
  z-index: 2;
}

/* Desktop Roadmap Styles */
.roadmap-desktop {
  background: linear-gradient(135deg, #0a1428 0%, #1a1f35 50%, #0f1729 100%);
  background-image: url("@/assets/roadMap_pc.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  padding: 0 0 0;
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

.roadmap-desktop .roadmap-content .roadmap-phase {
  padding-top: 11vw;
}
.roadmap-desktop .roadmap-content .roadmap-phase:first-child {
  padding-top: 9vw;
}
.roadmap-desktop .roadmap-content .roadmap-phase:nth-last-child(2) {
  padding-top: 9vw;
}
.roadmap-desktop .roadmap-content .roadmap-phase:last-child {
  padding-top: 6vw;
}

@media (min-width: 769px) {
  .roadmap-mobile {
    padding-top: 1.5rem;
  }
  .roadmap-mobile .roadmap-content {
    justify-content: center;
  }
  .roadmap-phase {
    min-width: 220px;
    max-width: 260px;
    padding: 1.5rem;
    display: flex;
  }

  .roadmap-mobile .roadmap-image {
    border-radius: 4px;
  }
}

@media (max-width: 1200px) {
  .roadmap-phase {
    min-width: 180px;
    padding: 0;
  }
}

@media (max-width: 900px) {
  .roadmap-mobile .roadmap-content {
  }
  .roadmap-phase {
    max-width: 95vw;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .roadmap-phase {
    padding: 0;
    font-size: 0.9rem;
    border-radius: 0.7rem;
  }
  .phase-title {
    font-size: 1rem;
  }
  .section-title {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
}
</style>
