<template>
  <header :class="[
    'fixed top-0 left-0 w-full z-50 backdrop-blur  transition-all duration-300',
    isHidden ? '-translate-y-full' : 'translate-y-0',
    hasScrolled ? 'border-b border-gray-500/70 shadow-sm' : 'border-b border-transparent'
  ]">
    <nav>
      <div class="container mx-auto flex items-center justify-between   py-4 px-6 lg:px-14">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img src="/logo.png" class="h-8" alt="Logo" />
        </NuxtLink>

        <!-- Main Navigation -->
        <ul class="hidden md:flex items-center space-x-6 text-gray-700 text-lg font-medium">
          <li>
            <NuxtLink to="/feature" :class="[active('/feature'), 'relative group inline-block pb-1']">
              Features
              <span class="nav-underline"></span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/h-works" :class="[active('/how-it-works'), 'relative group inline-block pb-1']">
              How it Works
              <span class="nav-underline"></span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/event" :class="[active('/event'), 'relative group inline-block pb-1']">
              Events
              <span class="nav-underline"></span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/pricing" :class="[active('/pricing'), 'relative group inline-block pb-1']">
              Pricing
              <span class="nav-underline"></span>
            </NuxtLink>
          </li>
        </ul>


        <!-- Actions -->
        <div class="hidden md:flex items-center space-x-4">
          <UButton label="Sign In" variant="outline" color="neutral" trailing-icon="stash:signin-light" />
          <UButton label="Get Started" :trailing-icon="RIGHT_ARROW_ICON" />
        </div>

        <!-- Mobile Menu Icon -->
        <button class="md:hidden">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Highlight active link
const active = (path) => {
  return route.path.startsWith(path)
    ? 'text-pink-700 font-semibold'
    : 'hover:text-gray-900'
}

// Sticky + hide-on-scroll behavior
const isHidden = ref(false)
const hasScrolled = ref(false)
let lastScroll = 0

const handleScroll = () => {
  const cur = window.scrollY

  hasScrolled.value = cur > 10

  if (cur < 10) {
    isHidden.value = false
    lastScroll = cur
    return
  }

  // Hide on scroll down, show on scroll up
  if (cur > lastScroll + 8) isHidden.value = true
  else if (cur < lastScroll - 8) isHidden.value = false

  lastScroll = cur
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped>
.nav-underline {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: #db2777;
  /* Pink */
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease-out;
}

.group:hover .nav-underline {
  transform: scaleX(1);
}

/* Keep underline visible when active */
.text-pink-700+.nav-underline {
  transform: scaleX(1);
}
</style>
