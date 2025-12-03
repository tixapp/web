<template>
  <section class="relative overflow-hidden">
    <!-- Hero Image -->
    <img src="/hero.png" alt="Chat Hero" class="w-full rounded-2xl object-cover" />

    <!-- Chat mockup overlay -->
    <div class="absolute bottom-10 left-0 right-0 flex flex-col space-y-3 px-8 sm:px-12 md:px-14">
      <div class="flex flex-col space-y-3">
        <div v-for="(msg, index) in visibleMessages" :key="index" :class="[
          'text-sm text-gray-600 flex',
          msg.from === 'user' ? 'justify-end' : 'justify-start w-2/3'
        ]">
          <div :class="[
            'px-3 py-2 rounded-2xl shadow',
            msg.from === 'user'
              ? 'bg-green-100 text-gray-900 rounded-tr-none'
              : 'bg-[#FCF5EB] border border-gray-200 rounded-tl-none w-full'
          ]">
            <!-- Message Text -->
            <div v-if="msg.type === 'text'">
              <p v-html="msg.text"></p>
              <p class="mt-2 text-[10px] text-gray-600">10:30 AM</p>
            </div>

            <!-- Welcome Message -->
            <div v-if="msg.type === 'welcome'">
              <p v-html="msg.text"></p>
               <p class="mt-2 text-[10px] text-gray-600">10:30 AM</p>
            </div>

            <!-- Explore Button -->
            <div v-if="msg.type === 'welcome'" class="mt-2">
              <u-button size="md" variant="outline" class="w-full flex justify-center bg-green-200 ring-0">
                Explore Events
              </u-button>
             <p class="mt-2 text-[10px] text-gray-600">10:31 AM</p>
            </div>

            <!-- Event Card -->
            <div v-else-if="msg.type === 'event'"
              class="bg-linear-to-r from-[#126330] to-[#4ADA7F] p-2 w-full rounded-md text-white">
              <p class="text-sm">TixApp Fest Volume 1</p>
              <p class="font-semibold text-xs mb-2 mt-1">Live Band Night</p>

              <div class="space-y-1 text-xs my-2">
                <div class="flex items-start gap-1 text-xs">
                  <span>📍</span>
                  <p>Stadium Swimming Pool</p>
                </div>

                <div class="flex items-center gap-1 text-xs mt-2">
                  <span>📅</span>
                  <p>Dec 12</p>
                </div>
              </div>

              <p class="text-xs font-semibold mb-2">SLE 150</p>
              <u-button variant="outline" size="md" class="w-full flex justify-center bg-white">
                Buy
              </u-button>
               <p class="mt-2 text-[10px] text-gray-600">10:31 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const LOCATION_ICON = "i-heroicons-map-pin";
const DATE_ICON = "i-heroicons-calendar-days";

// All messages
const messages = [
  { from: "user", type: "text", text: "Hi!" },
  {
    from: "bot",
    type: "welcome",
    text: "Hello 👋 Lamin, and welcome to <b>TixApp</b>! I’m your Ticket Assistant. How can I help you today?",
  },
  { from: "user", type: "text", text: "Explore Events" },
  { from: "bot", type: "event" },
];

const visibleMessages = ref<any[]>([]);

// Instantly show all messages — no animation
onMounted(() => {
  visibleMessages.value = messages;
});
</script>
