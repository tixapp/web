<template>
  <section class="lg:container lg:mx-auto lg:p-14">

    <!-- HERO -->
    <div class="text-center mx-auto my-20 flex flex-col items-center">
      <!-- <div class="bg-linear-to-r from-green-400 to-green-600 px-4 py-2.5 rounded-full flex items-center gap-3 mb-6 shadow">
        <UIcon name="lucide:users" class="w-4 h-4 text-white" />
        <p class="text-white font-semibold text-xs">Meet Your Customers Where They Are</p>
      </div> -->

      <h1 class="text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
        Your event shouldn't be harder to manage than the event itself.
      </h1>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
        From ticket sales to gate entry and voting — everything is scattered across apps, spreadsheets, and manual work.
      </p>

      <div class="flex flex-wrap justify-center gap-4 mt-10">
        <u-button label="Get Started" class="text-lg rounded-full px-6 py-3" :trailing-icon="RIGHT_ARROW_ICON" />
        <u-button label="Schedule Demo" variant="outline" color="neutral" :trailing-icon="LAB_ICON" class="text-lg rounded-full px-6 py-3" />
      </div>
    </div>

    <!-- FEATURE GRID -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
      <div
        v-for="(f, i) in features"
        :key="i"
        :class="[
          'p-6 rounded-2xl border transition text-center hover:shadow-lg',
          f.highlight ? 'bg-green-50 border-green-400 shadow' : 'bg-white border-gray-200'
        ]"
      >
        <UIcon
          :name="f.icon"
          :class="[
            'mx-auto mb-4',
            f.highlight ? 'w-14 h-14 text-green-600' : 'w-10 h-10 text-green-600'
          ]"
        />
        <h3 class="text-lg font-semibold text-gray-900">{{ f.title }}</h3>
        <p class="text-gray-600 text-sm mt-1">{{ f.desc }}</p>
      </div>
    </div>

    <!-- DEEP FEATURES -->
    <div class="space-y-28">
      <div
        v-for="(section, s) in sections"
        :key="s"
        class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <!-- IMAGE -->
        <div :class="s % 2 === 1 ? 'md:order-last' : ''">
          <div class="rounded-3xl overflow-hidden shadow-lg">
            <img :src="section.image" class="w-full h-96 object-cover" />
          </div>
        </div>

        <!-- TEXT -->
        <div>
          <h2 class="text-3xl font-bold text-gray-900">{{ section.title }}</h2>
          <p class="text-gray-600 mt-3">{{ section.desc }}</p>

          <ul class="space-y-2 mt-5">
            <li
              v-for="(item, index) in section.points"
              :key="index"
              class="flex items-start gap-3"
            >
              <UIcon name="lucide:check" class="text-green-500 w-5 h-5 mt-1" />
              <span class="text-gray-700">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-28">
      <h2 class="text-3xl font-bold text-gray-900">Ready to Try It?</h2>
      <p class="text-gray-600 mt-2 text-lg">Start managing events faster and more intelligently.</p>
      <u-button label="Get Started" color="success" class="mt-6 px-10 py-4 text-lg rounded-2xl" />
    </div>

  </section>
</template>

<script setup>
const features = [
  { title: "Create Events Easily", desc: "Set up your event in minutes with our simple event creator.", icon: "lucide:file-plus" },
  { title: "Sell Tickets Anywhere", desc: "WhatsApp, USSD, Web — your audience buys from anywhere.", icon: "lucide:ticket" },
  { title: "WhatsApp & USSD Ticketing", desc: "Reach attendees via WhatsApp or USSD for seamless ticket sales.", icon: "uil:whatsapp", highlight: true },
  { title: "Track Sales in Real Time", desc: "Live dashboards show every sale and attendee action.", icon: "lucide:activity" },
  { title: "Secure Check-Ins", desc: "QR verification ensures every ticket is valid.", icon: "lucide:scan-line" },
  { title: "Instant Alerts & Confirmations", desc: "Attendees get real-time notifications.", icon: "lucide:bell", highlight: true },
  { title: "Grow with Insights", desc: "Understand your audience with advanced analytics.", icon: "lucide:bar-chart-3" },
  { title: "Fast Payouts", desc: "Mobile money & bank payouts delivered quickly.", icon: "lucide:wallet" },
];

const sections = [
  {
    title: "All-In-One Event Management",
    desc: "Everything you need — unified, simple, and fast.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    points: ["Easy ticket setup", "Flexible event types", "Instant publishing", "Multi-channel sales"]
  },
  {
    title: "Next-Level Ticketing & Check-In",
    desc: "Fast, secure, and reliable for any crowd size.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
    points: ["Secure QR tickets", "Advanced scanners", "Offline check-in mode", "Anti-fraud protections"]
  },
  {
    title: "Marketing Tools That Actually Work",
    desc: "Reach your audience with built-in messaging tools.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    points: ["WhatsApp campaigns", "Bulk broadcasts", "Priority placements", "Promotional tools"]
  },
];
</script>
