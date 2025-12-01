<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 bg-pink-50 backdrop-blur  border-gray-100 transition-transform duration-300',
      isHidden ? '-translate-y-full' : 'translate-y-0'
    ]"
  >
    <nav class="bg-white/0">
      <div class="container mx-auto flex items-center justify-between py-4 px-6 lg:px-14">
        
        <!-- Logo -->
        <nuxt-link to="/" class="flex items-center">
          <img src="/logo.png" class="h-8" alt="Logo" />
        </nuxt-link>

        <!-- Main Nav -->
        <ul class="hidden md:flex items-center space-x-6 text-gray-700">
          <li><nuxt-link to="#" class="hover:text-gray-900">Features</nuxt-link></li>
          <li><nuxt-link to="#" class="hover:text-gray-900">How it Works</nuxt-link></li>
          <li><nuxt-link to="#" class="hover:text-gray-900">Events</nuxt-link></li>
          <li><nuxt-link to="pricing" class="hover:text-gray-900">Pricing</nuxt-link></li>
        </ul>

        <!-- Actions -->
        <div class="hidden md:flex items-center space-x-4">
          <u-button
            label="Sign In"
            variant="outline"
            color="neutral"
            trailing-icon="stash:signin-light"
          />
          <u-button
            label="Get Started"
            :trailing-icon="RIGHT_ARROW_ICON"
          />
        </div>

        <!-- Mobile icon -->
        <button class="md:hidden">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
let lastScroll = 0

const handleScroll = () => {
  const cur = window.scrollY

  if (cur <= 0) {
    isHidden.value = false
    return
  }

  // smooth, non-jittery hide/show
  if (cur > lastScroll + 4) {
    isHidden.value = true
  } else if (cur < lastScroll - 4) {
    isHidden.value = false
  }

  lastScroll = cur
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
