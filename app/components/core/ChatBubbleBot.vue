<template>
  <div class="flex items-start gap-2">
    <!-- Bot bubble -->
    <div class="bg-white max-w-[80%] rounded-xl rounded-bl-none px-4 py-2 shadow-sm text-sm text-gray-800">
      <slot />
      <p class="text-[10px] text-gray-400 mt-2">{{ time }}</p>
    </div>
  </div>
</template>

<script setup>
const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
</script>
