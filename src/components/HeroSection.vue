<template>
  <section class="hero">
    <!-- Cosmic Background -->
    <div class="hero-background">
      <div class="stars"></div>
      <div class="planet-1"></div>
      <div class="planet-2"></div>
      <div class="planet-3"></div>
      <div class="cosmic-rings"></div>
      <div class="hero-overlay"></div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <!-- Main Title -->
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-line-1">EMPOWERING GLOBAL</span>
            <span class="title-line-2">GOVERNANCE</span>
            <span class="title-line-3">THROUGH <span class="highlight">BLOCKCHAIN</span></span>
          </h1>
          <p class="hero-subtitle">
            A decentralized autonomous organization that enables transparent
            <br>governance and collective decision-making on a global scale
          </p>
        </div>

        <!-- Call to Action -->
        <div class="hero-actions">
          <button class="btn btn-primary">
            Read Whitepaper
          </button>
          <button class="btn btn-secondary">
            Join Governance
          </button>
        </div>
      </div>
      
      <!-- Silhouette Figure -->
      <div class="hero-figure">
        <div class="silhouette"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Add any initialization logic if needed
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 4rem;
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

.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #ffffff, transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 90px 40px, #ffffff, transparent),
    radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
    radial-gradient(2px 2px at 160px 30px, #ffffff, transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: sparkle 3s linear infinite;
}

@keyframes sparkle {
  from { transform: translateX(0); }
  to { transform: translateX(-200px); }
}

.planet-1 {
  position: absolute;
  top: 10%;
  right: 15%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at 30% 30%, #00f5ff, #4cc9f0, #0077b6);
  border-radius: 50%;
  opacity: 0.9;
  animation: float1 20s ease-in-out infinite;
  box-shadow: 0 0 50px rgba(0, 245, 255, 0.3);
}

.planet-2 {
  position: absolute;
  top: 60%;
  left: 10%;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle at 40% 40%, #00ff88, #00d4e6, #023e8a);
  border-radius: 50%;
  opacity: 0.7;
  animation: float2 25s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
}

.planet-3 {
  position: absolute;
  top: 20%;
  left: 5%;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle at 35% 35%, #4cc9f0, #0077b6, #023e8a);
  border-radius: 50%;
  opacity: 0.6;
  animation: float3 15s ease-in-out infinite;
}

.cosmic-rings {
  position: absolute;
  top: 5%;
  right: 10%;
  width: 400px;
  height: 400px;
  border: 2px solid rgba(0, 245, 255, 0.3);
  border-radius: 50%;
  animation: rotate 30s linear infinite;
}

.cosmic-rings::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 1px solid rgba(76, 201, 240, 0.2);
  border-radius: 50%;
  animation: rotate 25s linear infinite reverse;
}

.cosmic-rings::after {
  content: '';
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  border: 1px solid rgba(0, 255, 136, 0.15);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

@keyframes float1 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(180deg); }
}

@keyframes float2 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(-180deg); }
}

@keyframes float3 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to top, rgba(10, 14, 26, 0.8), transparent);
}

.container {
  position: relative;
  z-index: 2;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-text {
  margin-bottom: 3rem;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.title-line-1,
.title-line-2,
.title-line-3 {
  display: block;
  color: var(--color-text);
}

.title-line-2 {
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 245, 255, 0.3);
}

.highlight {
  background: linear-gradient(45deg, var(--color-primary), var(--color-accent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 245, 255, 0.5);
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.btn {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  min-width: 180px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero-figure {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.silhouette {
  width: 60px;
  height: 120px;
  background: linear-gradient(to top, var(--color-text), transparent 70%);
  border-radius: 30px 30px 0 0;
  position: relative;
  opacity: 0.8;
}

.silhouette::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: var(--color-text);
  border-radius: 50%;
  margin-top: -10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
    padding-top: 8rem;
    padding-bottom: 4rem;
  }
  
  .hero-content {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: clamp(2rem, 8vw, 3rem);
    line-height: 1.2;
    margin-bottom: 2rem;
  }
  
  .title-line-1,
  .title-line-2,
  .title-line-3 {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .hero-subtitle {
    font-size: clamp(1rem, 4vw, 1.125rem);
    line-height: 1.5;
    margin-bottom: 0;
  }
  
  .hero-subtitle br {
    display: none;
  }
  
  .hero-actions {
    margin-top: 2.5rem;
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
  
  .planet-1 {
    width: 180px;
    height: 180px;
    right: -20px;
    top: 15%;
  }
  
  .planet-2 {
    width: 100px;
    height: 100px;
    left: -20px;
    top: 70%;
  }
  
  .planet-3 {
    width: 60px;
    height: 60px;
    left: 10%;
    top: 25%;
  }
  
  .cosmic-rings {
    width: 200px;
    height: 200px;
    right: -50px;
    top: 10%;
  }
  
  .silhouette {
    width: 40px;
    height: 80px;
  }
  
  .silhouette::before {
    width: 15px;
    height: 15px;
    margin-top: -8px;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 100vh;
    padding-top: 6rem;
    padding-bottom: 3rem;
  }
  
  .hero-content {
    padding: 0 0.75rem;
  }
  
  .hero-title {
    font-size: clamp(1.75rem, 7vw, 2.5rem);
    margin-bottom: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: clamp(0.9rem, 3.5vw, 1rem);
    padding: 0 0.5rem;
  }
  
  .hero-actions {
    margin-top: 2rem;
  }
  
  .btn {
    padding: 0.875rem 1.25rem;
    font-size: 0.9rem;
    min-width: 200px;
  }
  
  .planet-1 {
    width: 120px;
    height: 120px;
    right: -40px;
    top: 20%;
    opacity: 0.6;
  }
  
  .planet-2 {
    width: 70px;
    height: 70px;
    left: -30px;
    top: 75%;
    opacity: 0.5;
  }
  
  .planet-3 {
    width: 40px;
    height: 40px;
    left: 15%;
    top: 30%;
    opacity: 0.4;
  }
  
  .cosmic-rings {
    width: 150px;
    height: 150px;
    right: -60px;
    top: 15%;
    opacity: 0.3;
  }
  
  .stars {
    background-size: 150px 75px;
  }
  
  .hero-overlay {
    height: 150px;
  }
}

@media (max-width: 375px) {
  .hero-title {
    font-size: 1.5rem;
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
  
  .planet-1 {
    width: 100px;
    height: 100px;
  }
  
  .planet-2 {
    width: 60px;
    height: 60px;
  }
  
  .cosmic-rings {
    width: 120px;
    height: 120px;
  }
}
</style>