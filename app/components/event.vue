<template>
  <div class="hover:shadow bg-white rounded-md overflow-hidden">
    <div class="relative h-56">
      <u-badge class="absolute m-5" :label="data.category" />
      <img :src="data.image" alt="event card" class="h-full object-cover w-full" />
    </div>
    <div class="space-y-2 p-5">
      <p class="text-subtitle">{{ data.name }}</p>
      <div class="space-y-2">
        <div class="space-x-2 flex items-center">
          <u-icon :name="EVENT_ICON" />
          <p>{{ data.location }}</p>
        </div>
        <div class="space-x-2 flex items-center">
          <u-icon :name="TIME_ICON" />
          <p>June 15, 2025</p>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex space-x-2">
          <money v-for="price in data.prices" class="text-subtitle">{{
            price.amount
          }}</money>
        </div>
        <u-button size="md" variant="outline">Book Now</u-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { da } from '@nuxt/ui/runtime/locale/index.js';

defineProps<{
  data: Ticket;
}>();
</script>
