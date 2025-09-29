<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="brand-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="currentColor"/>
              <path d="M12.5 11.5h7v2h-7v-2zm-1 4h9v2h-9v-2zm1 4h7v2h-7v-2z" fill="white"/>
            </svg>
            <span class="brand-name">MetaPlanet</span>
          </div>
          <p class="brand-description">
            A pioneering Bitcoin treasury company securing the future with digital assets.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="footer-nav">
          <div class="nav-column">
            <h3 class="nav-title">Company</h3>
            <ul class="nav-list">
              <li><router-link to="/about" class="nav-link">{{ $t('nav.about') }}</router-link></li>
              <li><router-link to="/strategy" class="nav-link">{{ $t('nav.bitcoinStrategy') }}</router-link></li>
              <li><router-link to="/investors" class="nav-link">{{ $t('nav.investors') }}</router-link></li>
              <li><router-link to="/news" class="nav-link">{{ $t('nav.news') }}</router-link></li>
            </ul>
          </div>
          
          <div class="nav-column">
            <h3 class="nav-title">Resources</h3>
            <ul class="nav-list">
              <li><a href="#" class="nav-link">Investor Relations</a></li>
              <li><a href="#" class="nav-link">Financial Reports</a></li>
              <li><a href="#" class="nav-link">SEC Filings</a></li>
              <li><a href="#" class="nav-link">Bitcoin Holdings</a></li>
            </ul>
          </div>
          
          <div class="nav-column">
            <h3 class="nav-title">Support</h3>
            <ul class="nav-list">
              <li><router-link to="/contact" class="nav-link">{{ $t('nav.contact') }}</router-link></li>
              <li><a href="#" class="nav-link">Help Center</a></li>
              <li><a href="#" class="nav-link">Documentation</a></li>
              <li><a href="#" class="nav-link">API Access</a></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Signup -->
        <div class="footer-newsletter">
          <h3 class="newsletter-title">Stay Updated</h3>
          <p class="newsletter-description">
            Subscribe to our newsletter for the latest Bitcoin treasury insights.
          </p>
          <form @submit.prevent="handleSubscribe" class="newsletter-form">
            <div class="input-wrapper">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="newsletter-input"
                required
              />
              <button
                type="submit"
                class="newsletter-btn"
                :disabled="isSubscribing"
              >
                {{ isSubscribing ? 'Subscribing...' : 'Subscribe' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>{{ $t('footer.copyright') }}</p>
          </div>
          
          <div class="footer-links">
            <a href="#" class="footer-link">{{ $t('footer.privacy') }}</a>
            <a href="#" class="footer-link">{{ $t('footer.terms') }}</a>
            <a href="#" class="footer-link">Cookie Policy</a>
            <a href="#" class="footer-link">Disclosure</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isSubscribing = ref(false)

const handleSubscribe = async () => {
  if (!email.value) return
  
  isSubscribing.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Reset form
  email.value = ''
  isSubscribing.value = false
  
  // Show success message
  alert('Thank you for subscribing to our newsletter!')
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--color-surface) 0%, rgba(10, 14, 26, 0.95) 100%);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-3xl) 0 0;
  margin-top: var(--spacing-3xl);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent));
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-3xl);
}

.footer-brand {
  max-width: 300px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary);
}

.brand-logo svg {
  filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.3));
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
}

.brand-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(0, 245, 255, 0.1);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all var(--transition-fast);
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  color: var(--color-background);
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
}

.nav-column {
  min-width: 0;
}

.nav-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin-bottom: var(--spacing-sm);
}

.nav-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all var(--transition-fast);
  font-size: 0.925rem;
  position: relative;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-primary);
  transition: width var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-primary);
  text-shadow: 0 0 5px rgba(0, 245, 255, 0.3);
}

.nav-link:hover::before {
  width: 100%;
}

.footer-newsletter {
  max-width: 300px;
}

.newsletter-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.newsletter-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  font-size: 0.925rem;
  line-height: 1.5;
}

.newsletter-form {
  margin-bottom: var(--spacing-lg);
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.newsletter-input {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  background: rgba(0, 245, 255, 0.05);
  color: var(--color-text);
  font-size: 0.925rem;
  transition: all var(--transition-fast);
  backdrop-filter: blur(10px);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.2);
}

.newsletter-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  color: var(--color-background);
  border: none;
  border-radius: 0.5rem;
  font-size: 0.925rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.newsletter-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
}

.newsletter-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-xl) 0;
  background: rgba(0, 0, 0, 0.2);
}

.footer-bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
}

.copyright {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
}

.footer-links {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.footer-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all var(--transition-fast);
  position: relative;
}

.footer-link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-primary);
  transition: width var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-primary);
}

.footer-link:hover::before {
  width: 100%;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
  }
  
  .footer-nav {
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .footer-brand,
  .footer-newsletter {
    max-width: none;
    margin: 0 auto;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-2xl) 0 0;
    margin-top: var(--spacing-2xl);
  }
  
  .footer-content {
    gap: var(--spacing-xl);
  }
  
  .footer-nav {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    text-align: center;
  }
  
  .nav-column {
    background: rgba(0, 245, 255, 0.05);
    padding: var(--spacing-lg);
    border-radius: 0.75rem;
    border: 1px solid var(--color-border);
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-md);
  }
  
  .footer-links {
    justify-content: center;
  }
  
  .brand-name {
    font-size: 1.375rem;
  }
  
  .brand-description,
  .newsletter-description {
    font-size: 0.9rem;
  }
  
  .social-link {
    width: 2.75rem;
    height: 2.75rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: var(--spacing-xl) 0 0;
  }
  
  .footer-content {
    gap: var(--spacing-lg);
  }
  
  .container {
    padding: 0 var(--spacing-sm);
  }
  
  .nav-column {
    padding: var(--spacing-md);
  }
  
  .nav-title,
  .newsletter-title {
    font-size: 1rem;
    margin-bottom: var(--spacing-md);
  }
  
  .nav-link,
  .newsletter-description {
    font-size: 0.875rem;
  }
  
  .footer-links {
    flex-direction: column;
    gap: var(--spacing-sm);
    align-items: center;
  }
  
  .footer-link {
    font-size: 0.8rem;
  }
  
  .copyright {
    font-size: 0.8rem;
    text-align: center;
  }
  
  .social-links {
    gap: var(--spacing-sm);
  }
  
  .social-link {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .social-link svg {
    width: 18px;
    height: 18px;
  }
  
  .brand-logo {
    justify-content: center;
    margin-bottom: var(--spacing-md);
  }
  
  .brand-name {
    font-size: 1.25rem;
  }
  
  .brand-description {
    font-size: 0.85rem;
    margin-bottom: var(--spacing-md);
  }
  
  .newsletter-form {
    margin-bottom: var(--spacing-md);
  }
  
  .newsletter-input,
  .newsletter-btn {
    padding: var(--spacing-md);
    font-size: 0.875rem;
  }
  
  .input-wrapper {
    gap: var(--spacing-md);
  }
  
  .footer-bottom {
    padding: var(--spacing-md) 0;
  }
}

@media (max-width: 375px) {
  .container {
    padding: 0 var(--spacing-xs);
  }
  
  .footer-content {
    gap: var(--spacing-md);
  }
  
  .nav-column {
    padding: var(--spacing-sm);
  }
  
  .brand-name {
    font-size: 1.125rem;
  }
  
  .nav-title,
  .newsletter-title {
    font-size: 0.95rem;
  }
  
  .nav-link,
  .newsletter-description {
    font-size: 0.8rem;
  }
  
  .social-link {
    width: 2.25rem;
    height: 2.25rem;
  }
  
  .social-link svg {
    width: 16px;
    height: 16px;
  }
  
  .newsletter-input,
  .newsletter-btn {
    padding: var(--spacing-sm);
    font-size: 0.8rem;
  }
}
</style>