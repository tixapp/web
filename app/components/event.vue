<template>
  <div class="hover:shadow-lg bg-white rounded-xl overflow-hidden border border-gray-100 transition">

    <!-- IMAGE WRAPPER -->
    <div class="relative h-60">

      <!-- Date badge -->
      <div class="absolute left-3 top-3 bg-white rounded-xl px-4 py-2 shadow flex flex-col items-center z-20">
        <p class="text-black font-bold text-xl leading-none">15</p>
        <p class="text-red-500 text-xs -mt-0.5">Jun</p>
      </div>

      <!-- Top-right action buttons -->
      <div class="absolute top-3 right-3 flex space-x-2 z-20">
        <div class="p-2.5 bg-white rounded-full shadow flex items-center justify-center">
          <u-icon name="solar:bookmark-outline" class="text-gray-700" />
        </div>
        <div class="p-2.5 bg-white rounded-full shadow flex items-center justify-center">
          <u-icon name="material-symbols:favorite-outline" class="text-red-500" />
        </div>
      </div>

      <!-- Bottom-left avatar group + going -->
      <div class="absolute top-65 left-3 z-20 flex items-center space-x-3">
        <UAvatarGroup size="xl">
          <UAvatar src="https://github.com/benjamincanac.png" size="sm" />
          <UAvatar src="https://github.com/romhml.png" size="sm" />
          <UAvatar src="https://github.com/noook.png" size="sm" />
          <UAvatar src="https://github.com/noook.png" size="sm" />
        </UAvatarGroup>

        <div class="bg-black/80 text-white rounded-lg px-2 py-1 flex items-center">
          <p class="text-[10px] font-medium">+2.5K going</p>
        </div>
      </div>

      <!-- Image -->
      <img :src="data.image" alt="event" class="w-full h-[300px] object-cover" />

    </div>

    <!-- CONTENT -->
    <div class="p-5 space-y-4 mt-14">

      <!-- Category -->
      <u-badge class="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-medium" :label="data.category" />

      <!-- Title -->
      <p class="text-lg font-semibold text-gray-900">
        {{ data.name }}
      </p>

      <!-- Location & Time -->
      <div class="space-y-2 text-gray-600 text-sm">
        <div class="flex items-center space-x-2">
          <u-icon :name="EVENT_ICON" />
          <span>{{ data.location }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <u-icon :name="TIME_ICON" />
          <span>June 15, 2025</span>
        </div>
      </div>

      <!-- Prices -->
      <div class="flex items-center space-x-2 font-medium text-gray-900">
        <money v-for="price in data.prices" :key="price.amount" class="text-base">
          {{ price.amount }}
        </money>
      </div>

      <!-- Host -->
      <p class="text-xs text-gray-400">By Entertainment Network</p>

      <!-- Buttons -->
      <div class="flex gap-3 pt-2">
        <u-button size="md" class="w-full flex justify-center bg-blue-600 text-white" variant="solid">
          Book Now
        </u-button>

        <u-button size="md" class="w-full flex justify-center" variant="outline">
          View Detail
        </u-button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: Ticket;
}>();
</script>
