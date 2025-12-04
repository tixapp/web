<template>
  <div class="flex justify-end">
    <div class="bg-[#DCF8C6] max-w-[80%] rounded-xl rounded-br-none px-4 py-2 shadow-sm text-sm text-gray-800">
      <slot />
      <p class="text-[10px] text-gray-500 mt-2 text-right">{{ time }}</p>
    </div>
  </div>
</template>

<script setup>
const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
</script>
