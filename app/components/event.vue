<template>
  <div class="hover:shadow bg-white rounded-md overflow-hidden">
    <div class="relative h-56">
      <div class="absolute py-2 left-3 top-3 px-5 bg-white rounded-xl flex flex-col  justify-center  items-center">
        <p class="text-black font-bold text-2xl">15</p>
        <p class="text-red-500">Jun</p>
      </div>
      <div class="absolute right-3 top-3 flex space-x-3">
           <div class=" py-2.5 px-2.5 bg-primary rounded-full flex flex-col  justify-center  items-center ">
          <u-icon name="solar:bookmark-outline" class="bg-white" />
        </div>
        <div class="py-2.5  px-2.5 bg-white rounded-full flex flex-col  justify-center  items-center">
          <u-icon name="material-symbols:favorite-outline" class="bg-red-500" />
        </div> 
      </div>
      <img :src="data.image" alt="event card" class="h-full object-cover w-full" />
    </div>
    <div class="space-y-2 p-5">
      <u-badge class="bg-blue-300" :label="data.category" />
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
      </div>
      <p class="mt-5">By Entertainment Network</p>
      <div class="flex justify-between space-x-3 mt-5">
        <u-button size="md" class="w-full flex justify-center bg-blue-500" variant="solid">Book Now</u-button>
        <u-button size="md" class="w-full flex justify-center" variant="outline">View Detail</u-button>
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
