<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <nav class="nav container">
      <!-- Logo -->
      <div class="nav-brand">
        <router-link to="/" class="brand-link">
          <!-- <div class="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="currentColor"/>
              <path d="M12.5 11.5h7v2h-7v-2zm-1 4h9v2h-9v-2zm1 4h7v2h-7v-2z" fill="white"/>
            </svg>
            <span class="brand-text">MetaPlanet</span>
          </div> -->
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <div v-if="!isMobile" class="nav-menu">
        <router-link
          v-for="item in navigation"
          :key="item.key"
          :to="item.path"
          class="nav-link"
          :class="{ active: $route.path === item.path }"
        >
          {{ $t(`nav.${item.key}`) }}
        </router-link>
      </div>

      <!-- Controls -->
      <div class="nav-controls">
        <!-- Theme Toggle -->
        <button
          @click="themeStore.toggleTheme()"
          class="control-btn"
          :title="$t('controls.theme')"
        >
          <svg v-if="!themeStore.isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- Language Toggle -->
        <div class="language-selector">
          <button
            @click="toggleLanguageMenu"
            class="control-btn"
            :title="$t('controls.language')"
          >
            <span class="lang-code">{{ languageStore.currentLocale.toUpperCase() }}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"/>
            </svg>
          </button>
          
          <div v-if="showLanguageMenu" class="language-menu">
            <button
              v-for="locale in languageStore.availableLocales"
              :key="locale.code"
              @click="selectLanguage(locale.code)"
              class="language-option"
              :class="{ active: locale.code === languageStore.currentLocale }"
            >
              {{ locale.name }}
            </button>
          </div>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button
          v-if="isMobile"
          @click.stop="toggleMobileMenu"
          @touchstart.stop="toggleMobileMenu"
          class="menu-toggle-btn"
          :title="showMobileMenu ? 'Close Menu' : 'Open Menu'"
          :disabled="false"
        >
          <svg v-if="!showMobileMenu" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>

  </header>

  <!-- Teleport sidebar to body to escape component constraints -->
  <Teleport to="body">
    <div data-teleport-sidebar>
      <!-- Mobile Sidebar Overlay -->
      <transition name="fade">
        <div 
          v-if="showMobileMenu && isMobile" 
          class="sidebar-overlay"
          @click.stop="closeMobileMenu"
          @touchstart.stop="closeMobileMenu"
        ></div>
      </transition>

      <!-- Mobile Collapsible Sidebar -->
      <transition name="slide-left">
        <div v-if="showMobileMenu && isMobile" class="sidebar">
          <div class="sidebar-header">
            <div class="sidebar-logo">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="currentColor"/>
                <path d="M12.5 11.5h7v2h-7v-2zm-1 4h9v2h-9v-2zm1 4h7v2h-7v-2z" fill="white"/>
              </svg>
              <span class="sidebar-brand-text">MetaPlanet</span>
            </div>
            <button 
              @click.stop="closeMobileMenu" 
              @touchstart.stop="closeMobileMenu"
              class="sidebar-close-btn"
              :title="'Close Menu'"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          
          <div class="sidebar-content">
            <nav class="sidebar-nav">
              <router-link
                v-for="item in navigation"
                :key="item.key"
                :to="item.path"
                class="sidebar-nav-link"
                :class="{ active: $route.path === item.path }"
                @click="closeMobileMenu"
              >
                {{ $t(`nav.${item.key}`) }}
              </router-link>
            </nav>
            
            <div class="sidebar-controls">
              <div class="sidebar-control-group">
                <span class="control-label">{{ $t('controls.language') }}</span>
                <div class="language-buttons">
                  <button
                    v-for="locale in languageStore.availableLocales"
                    :key="locale.code"
                    @click="selectLanguage(locale.code)"
                    class="language-btn"
                    :class="{ active: locale.code === languageStore.currentLocale }"
                  >
                    {{ locale.name }}
                  </button>
                </div>
              </div>
              
              <div class="sidebar-control-group">
                <span class="control-label">{{ $t('controls.theme') }}</span>
                <button
                  @click="themeStore.toggleTheme()"
                  class="theme-toggle-btn"
                >
                  <svg v-if="!themeStore.isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                  <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                  <span>{{ themeStore.isDark ? $t('controls.dark') : $t('controls.light') }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, Transition, Teleport } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useLanguageStore } from '@/stores/language'

const themeStore = useThemeStore()
const languageStore = useLanguageStore()

const showMobileMenu = ref(false)
const showLanguageMenu = ref(false)
const isMobile = ref(false)
const isScrolled = ref(false)

// Screen width detection
const checkScreenSize = () => {
  const wasMobile = isMobile.value
  isMobile.value = window.innerWidth < 768
  console.log('Screen size check:', { wasMobile, isMobile: isMobile.value, width: window.innerWidth }) // Debug log
  
  // Auto close sidebar when switching to desktop
  if (!isMobile.value && showMobileMenu.value) {
    showMobileMenu.value = false
    document.body.style.overflow = ''
  }
}

// Handle scroll for header background
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const navigation = [
  { 
    key: 'about', 
    path: '/about'
  },
  { 
    key: 'bitcoinStrategy', 
    path: '/strategy'
  },
  { 
    key: 'governance', 
    path: '/governance'
  },
  { 
    key: 'investors', 
    path: '/investors'
  },
  { 
    key: 'contact', 
    path: '/contact'
  }
]

const toggleMobileMenu = (event?: Event) => {
  if (event) {
    event.preventDefault()
    event.stopPropagation()
  }
  
  console.log('Toggle clicked, current state:', showMobileMenu.value, 'isMobile:', isMobile.value) // Debug log
  
  // Force update the mobile state first
  checkScreenSize()
  
  if (!isMobile.value) {
    console.log('Not mobile, ignoring toggle')
    return
  }
  
  showMobileMenu.value = !showMobileMenu.value
  
  if (showMobileMenu.value) {
    showLanguageMenu.value = false
    document.body.style.overflow = 'hidden'
    console.log('Menu opened')
  } else {
    document.body.style.overflow = ''
    console.log('Menu closed')
  }
}

const closeMobileMenu = (event?: Event) => {
  if (event) {
    event.preventDefault()
    event.stopPropagation()
  }
  
  console.log('Close menu called') // Debug log
  showMobileMenu.value = false
  document.body.style.overflow = ''
}

const toggleLanguageMenu = () => {
  showLanguageMenu.value = !showLanguageMenu.value
  if (showLanguageMenu.value) {
    showMobileMenu.value = false
  }
}

const selectLanguage = (locale: string) => {
  languageStore.setLocale(locale)
  showLanguageMenu.value = false
}

const handleClickOutside = (event: Event) => {
  if (!event.target) return
  
  const target = event.target as Element
  
  // Handle language menu
  if (!target.closest('.language-selector')) {
    showLanguageMenu.value = false
  }
  
  // Handle mobile menu - only close if we're on mobile and menu is open
  if (isMobile.value && showMobileMenu.value) {
    if (!target.closest('.menu-toggle-btn') && 
        !target.closest('.sidebar') && 
        !target.closest('[data-teleport-sidebar]')) {
      console.log('Clicking outside, closing menu')
      showMobileMenu.value = false
      document.body.style.overflow = ''
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  // Initial screen size check
  checkScreenSize()
  // Listen for window resize
  window.addEventListener('resize', checkScreenSize)
  // Listen for scroll events
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', checkScreenSize)
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: transparent;
  border-bottom: none;
  backdrop-filter: none;
  transition: all var(--transition-normal);
  box-shadow: none;
}

.header.header-scrolled {
  background: rgba(10, 14, 26, 0.95);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 var(--spacing-md);
}

@media (max-width: 480px) {
  .nav {
    height: 3.5rem;
    padding: 0 var(--spacing-sm);
  }
}

.nav-brand {
  flex-shrink: 0;
}

.brand-link {
  text-decoration: none;
  color: inherit;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-primary);
}

.logo svg {
  filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.3));
}

.brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
}

@media (max-width: 480px) {
  .brand-text {
    font-size: 1.125rem;
  }
}

.nav-menu {
  display: flex;
  align-items: flex-end;
  gap: var(--spacing-xl);
  margin-left: auto;
  margin-right: var(--spacing-lg);
}

.nav-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-text-secondary);
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 0.5rem;
  transition: all var(--transition-fast);
  position: relative;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  transition: all var(--transition-fast);
  transform: translateX(-50%);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary);
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
}

.nav-link:hover::before,
.nav-link.active::before {
  width: 100%;
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

@media (max-width: 480px) {
  .nav-controls {
    gap: var(--spacing-xs);
  }
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 2.5rem;
  background: rgba(0, 245, 255, 0.1);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text);
  cursor: pointer;
  transition: all var(--transition-fast);
  backdrop-filter: blur(10px);
  min-width: 44px; /* Minimum touch target */
  min-height: 44px;
}

@media (max-width: 480px) {
  .control-btn {
    width: 3.25rem;
    height: 2.25rem;
    min-width: 40px;
    min-height: 40px;
  }
}

.control-btn:hover {
  background: rgba(0, 245, 255, 0.2);
  border-color: var(--color-primary);
  color: var(--color-primary);
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.3);
}

.language-selector {
  position: relative;
}

.lang-code {
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: var(--spacing-xs);
}

.language-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px var(--color-shadow);
  min-width: 120px;
  z-index: 100;
  margin-top: var(--spacing-xs);
}

.language-option {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  background: transparent;
  border: none;
  text-align: left;
  color: var(--color-text);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.language-option:hover,
.language-option.active {
  background-color: var(--color-primary);
  color: white;
}

.language-option:first-child {
  border-radius: 0.5rem 0.5rem 0 0;
}

.language-option:last-child {
  border-radius: 0 0 0.5rem 0.5rem;
}

.menu-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(0, 245, 255, 0.1);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text);
  cursor: pointer;
  transition: all var(--transition-fast);
  position: relative;
  z-index: 1002;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  backdrop-filter: blur(10px);
}

.menu-toggle-btn:hover {
  background: rgba(0, 245, 255, 0.2);
  border-color: var(--color-primary);
  color: var(--color-primary);
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.3);
}

.menu-toggle-btn:hover {
  background-color: var(--color-surface);
  color: var(--color-primary);
}

.menu-toggle-btn:active {
  transform: scale(0.95);
}

.menu-toggle-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sidebar Overlay */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  backdrop-filter: blur(2px);
}

/* Collapsible Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  max-width: 85vw;
  background: rgba(10, 14, 26, 0.98);
  border-left: 1px solid var(--color-border);
  box-shadow: -6px 0 25px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
}

@media (max-width: 480px) {
  .sidebar {
    width: 280px;
    max-width: 90vw;
  }
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-xl) var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-surface);
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-primary);
}

.sidebar-brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
}

.sidebar-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.sidebar-close-btn:hover {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.sidebar-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sidebar-nav {
  padding: var(--spacing-xl) var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.sidebar-nav-link {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: 0.75rem;
  transition: all var(--transition-fast);
  border: 1px solid transparent;
  position: relative;
}

.sidebar-nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: var(--color-primary);
  border-radius: 0 4px 4px 0;
  transform: scaleY(0);
  transition: transform var(--transition-fast);
}

.sidebar-nav-link:hover {
  background-color: var(--color-surface);
  color: var(--color-primary);
  border-color: var(--color-border);
}

.sidebar-nav-link:hover::before {
  transform: scaleY(1);
}

.sidebar-nav-link.active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.sidebar-nav-link.active::before {
  background-color: white;
  transform: scaleY(1);
}

.sidebar-controls {
  padding: var(--spacing-xl) var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  margin-top: auto;
  background-color: var(--color-surface);
}

.sidebar-control-group {
  margin-bottom: var(--spacing-lg);
}

.sidebar-control-group:last-child {
  margin-bottom: 0;
}

.control-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.language-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.language-btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--spacing-md);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
  text-align: left;
}

.language-btn:hover {
  background-color: var(--color-surface);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.language-btn.active {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

.theme-toggle-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  width: 100%;
  padding: var(--spacing-md);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.theme-toggle-btn:hover {
  background-color: var(--color-surface);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* Sidebar Animations */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform var(--transition-normal);
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-normal);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide down animation for sub-menus */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all var(--transition-normal);
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 200px;
  transform: translateY(0);
}
</style>