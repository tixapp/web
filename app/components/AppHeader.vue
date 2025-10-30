<template>
  <nav class="bg-white">
    <div class="flex justify-between container mx-auto py-5 items-center dark:text-gray-700 px-14">
      <nuxt-link to="/">
        <img src="/logo.png" class="h-8" />
      </nuxt-link>
      <ul class="flex items-center space-x-4">
        <li><nuxt-link to="#">Features</nuxt-link></li>
        <li><nuxt-link to="#">How it Works</nuxt-link></li>
        <li><nuxt-link to="#">Events</nuxt-link></li>
        <li><nuxt-link to="#">Pricing</nuxt-link></li>
      </ul>
      <ul class="flex space-x-4">
        <li><u-button label="Sign In" variant="outline" color="neutral" trailing-icon="stash:signin-light" /></li>
        <li><u-button label="Get Started" :trailing-icon="RIGHT_ARROW_ICON" /></li>
      </ul>
    </div>
  </nav>
</template>
