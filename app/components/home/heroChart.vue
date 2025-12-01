<template>
  <section class="relative overflow-hidden">
    <!-- Hero Image -->
    <img
      src="/hero.png"
      alt="Chat Hero"
      class="w-full rounded-2xl object-cover"
    />

    <!-- Chat mockup overlay -->
    <div
      class="absolute bottom-10 left-0 right-0 flex flex-col space-y-3 px-8 sm:px-12 md:px-14"
    >
      <TransitionGroup name="chat" tag="div" class="flex flex-col space-y-3">
        <div
          v-for="(msg, index) in visibleMessages"
          :key="index"
          :class="[
            'text-sm text-gray-600 flex',
            msg.from === 'user' ? 'justify-end' : 'justify-start w-2/3',
          ]"
        >
          <div
            :class="[
              'px-3 py-2 rounded-2xl shadow transition-all duration-500',
              msg.from === 'user'
                ? 'bg-green-100 text-gray-900 rounded-tr-none'
                : 'bg-white border border-gray-200 rounded-tl-none w-full',
            ]"
          >
            <!-- Message Text -->
            <div v-if="msg.type === 'text'">
              <p v-html="msg.text"></p>
            </div>
             <!-- Message Text -->
            <div v-if="msg.type === 'welcome'">
              <p v-html="msg.text"></p>
            </div>

            <!-- Explore Button -->
            <div v-if="msg.type === 'welcome'" class="mt-2">
              <u-button
                size="md"
                variant="outline"
                class="w-full flex justify-center"
              >
                Explore Events
              </u-button>
            </div>

            <!-- Event Card -->
            <div v-else-if="msg.type === 'event'" class="bg-primary-400/20 p-2 w-full rounded-md">
              <p class="font-semibold text-sm">TixApp Fest Volume 1</p>
              <p class="text-pink-600 text-xs mb-2">Live Band Night</p>

              <div class="space-y-1 text-xs my-2">
                <div class="flex items-center space-x-1">
                  <u-icon class="text-primary-300" :name="LOCATION_ICON" />
                  <p>Stadium Swimming Pool</p>
                </div>
                <div class="flex items-center space-x-1">
                  <u-icon :name="DATE_ICON" />
                  <p>Dec 12</p>
                </div>
              </div>

              <p class="text-xs font-semibold mb-2">SLE 150</p>
              <u-button variant="outline" size="md" class="w-full flex justify-center">
                Buy
              </u-button>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const LOCATION_ICON = "i-heroicons-map-pin";
const DATE_ICON = "i-heroicons-calendar-days";

// Chat message sequence
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

onMounted(() => {
  let delay = 1000;
  messages.forEach((msg, i) => {
    setTimeout(() => visibleMessages.value.push(msg), i * delay);
  });
});
</script>
