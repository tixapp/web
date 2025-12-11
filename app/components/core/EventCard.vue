<template>
  <div class="bg-white max-w-[80%] rounded-xl rounded-bl-none px-4 py-3 shadow-sm text-sm text-gray-800">
    <div class="w-full bg-linear-to-br from-[#4AB08A] to-[#6BC2A5] text-white rounded-xl overflow-hidden p-4">
      <p class="font-bold text-[10px]">{{ title }}</p>
      <p class="opacity-80 mb-3 text-[10px]">{{ subtitle }}</p>

      <div class="flex items-start gap-1 text-[10px]">
        <span>📍</span>
        <span>{{ location }}</span>
      </div>

      <div class="flex items-center gap-1 text-[10px] mt-2">
        <span>📅</span>
        <span>{{ date }}</span>
      </div>

      <p class="mt-2 font-semibold text-xs">SLE {{ price }}</p>
u
      <u-button size="xs"
        class="mt-3 bg-white hover:bg-white text-gray-800 rounded-lg py-1.5 w-full text-[10px] font-medium flex justify-center items-center">
        Buy
      </u-button>
    </div>
    <p class="text-xs text-gray-400 mt-2">{{ time }}</p>
  </div>

</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  location: String,
  date: String,
  price: String
})
</script>
