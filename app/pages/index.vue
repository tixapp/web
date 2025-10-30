<template>
  <div>
    <!-- Hero -->
    <home-hero />

    <!-- Build For -->
    <div class="bg-gray-100">
      <div class="container mx-auto p-14 py-16">
        <div class="space-y-4 text-center mb-10">
          <p class="text-title">Built for Everyone</p>
          <p>Whether you're hosting or attending, TixApp makes it simple</p>
        </div>
        <div class="grid grid-cols-3 gap-8">
          <div
            class="border-2 rounded-xl p-8 border-gray-200 hover:border-secondary hover:shadow"
          >
            <div
              class="w-14 h-14 bg-primary rounded-xl flex items-center justify-center"
            >
              <u-icon :name="EVENT_ICON" class="text-4xl text-white" />
            </div>
            <div class="mt-4 space-y-4">
              <div class="space-y-2">
                <p class="text-xl font-semibold text-black">Event Organizers</p>
                <p>
                  Manage events, track sales, and engage with attendees all in
                  one place
                </p>
              </div>
              <ul class="space-y-1">
                <li class="flex items-center space-x-2">
                  <dot />
                  <p>Real-time dashboards</p>
                </li>
                <li class="flex items-center space-x-2">
                  <dot />
                  <p>Instant notifications</p>
                </li>
                <li class="flex items-center space-x-2">
                  <dot />
                  <p>Automated payouts</p>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="border-2 rounded-xl p-8 border-gray-200 hover:border-secondary hover:shadow"
          >
            <div
              class="w-14 h-14 bg-primary rounded-xl flex items-center justify-center"
            >
              <u-icon :name="ARTIST_ICON" class="text-4xl text-white" />
            </div>
            <div class="mt-4 space-y-4">
              <div class="space-y-2">
                <p class="text-xl font-semibold text-black">
                  Artists & Creatives
                </p>
                <p>
                  Focus on your craft while we handle the ticketing and fan
                  engagement
                </p>
              </div>
              <ul class="space-y-1">
                <li class="flex items-center space-x-2">
                  <dot />
                  <p>Direct fan connection</p>
                </li>
                <li class="flex items-center space-x-2">
                  <dot />
                  <p>Marketing support</p>
                </li>
                <li class="flex items-center space-x-2">
                  <dot />
                  <p>Analytics insights</p>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="border-2 rounded-xl p-8 border-gray-200 hover:border-secondary hover:shadow"
          >
            <div
              class="w-14 h-14 bg-primary rounded-xl flex items-center justify-center"
            >
              <u-icon :name="TICKET_ICON" class="text-4xl text-white" />
            </div>
            <div class="mt-4 space-y-4">
              <div class="space-y-2">
                <p class="text-xl font-semibold text-black">Ticket Buyers</p>
                <p>
                  Discover events and book tickets seamlessly through WhatsApp
                </p>
              </div>
              <ul class="space-y-1">
                <li class="flex items-center space-x-2">
                  <dot />
                  <p>Instant confirmations</p>
                </li>
                <li class="flex items-center space-x-2">
                  <dot />
                  <p>Event reminders</p>
                </li>
                <li class="flex items-center space-x-2">
                  <dot />
                  <p>Digital tickets</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-14 py-16">
      <div class="space-y-4 text-center mb-10">
        <p class="text-4xl text-black font-semibold">Ticketing Simplified</p>
        <p>
          Stop losing sales to complicated checkout flows. Meet your customers
          where they already spend their time.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div class="border-2 rounded-xl p-8 bg-red-50 border-red-300">
          <div class="flex space-x-3 items-center">
            <div
              class="w-10 flex justify-center items-center h-10 rounded-xl bg-red-500"
            >
              <u-icon class="text-2xl text-white" :name="CLOSE_ICON" />
            </div>
            <p class="text-2xl font-semibold text-black">The Problem</p>
          </div>
          <ul class="mt-8 space-y-5">
            <li class="flex space-x-2">
              <div>
                <u-icon class="text-red-500 text-2xl" :name="CLOSE_ICON" />
              </div>
              <div>
                <p class="text-black font-semibold">Fragmented Systems</p>
                <p class="text-sm">
                  Multiple platforms, confusing flows, and abandoned carts
                </p>
              </div>
            </li>
            <li class="flex space-x-2">
              <div>
                <u-icon class="text-red-500 text-2xl" :name="CLOSE_ICON" />
              </div>
              <div>
                <p class="text-black font-semibold">Poor Attendee Experience</p>
                <p class="text-sm">
                  Long queues, lost tickets, and frustrated customers
                </p>
              </div>
            </li>
            <li class="flex space-x-2">
              <div>
                <u-icon class="text-red-500 text-2xl" :name="CLOSE_ICON" />
              </div>
              <div>
                <p class="text-black font-semibold">No Real-Time Tracking</p>
                <p class="text-sm">
                  Can't see what's selling or adjust on the fly
                </p>
              </div>
            </li>
            <li class="flex space-x-2">
              <div>
                <u-icon class="text-red-500 text-2xl" :name="CLOSE_ICON" />
              </div>
              <div>
                <p class="text-black font-semibold">Limited Reach</p>
                <p class="text-sm">
                  Missing out on customers who prefer mobile-first solutions
                </p>
              </div>
            </li>
          </ul>
          <div class="bg-white rounded-xl p-5 text-center mt-10">
            <p>Traditional ticketing losing customers</p>
          </div>
        </div>
        <div class="border-2 rounded-xl p-8 bg-green-50 border-green-500">
          <div class="flex space-x-3 items-center">
            <div
              class="w-10 flex justify-center items-center h-10 rounded-xl bg-green-500"
            >
              <u-icon class="text-2xl text-white" :name="CHECK_ICON" />
            </div>
            <p class="text-2xl font-semibold text-black">Our Solution</p>
          </div>
          <ul class="mt-8 space-y-5">
            <li class="flex space-x-2">
              <div>
                <u-icon class="text-green-500 text-2xl" :name="CHECK_ICON" />
              </div>
              <div>
                <p class="text-black font-semibold">
                  WhatsApp & USSD Ticketing
                </p>
                <p class="text-sm">
                  Multiple platforms, confusing flows, and abandoned carts
                </p>
              </div>
            </li>
            <li class="flex space-x-2">
              <div>
                <u-icon class="text-green-500 text-2xl" :name="CHECK_ICON" />
              </div>
              <div>
                <p class="text-black font-semibold">
                  Instant Alerts & Confirmations
                </p>
                <p class="text-sm">
                  Long queues, lost tickets, and frustrated customers
                </p>
              </div>
            </li>
            <li class="flex space-x-2">
              <div>
                <u-icon class="text-green-500 text-2xl" :name="CHECK_ICON" />
              </div>
              <div>
                <p class="text-black font-semibold">Real-Time Dashboard</p>
                <p class="text-sm">
                  Can't see what's selling or adjust on the fly
                </p>
              </div>
            </li>
            <li class="flex space-x-2">
              <div>
                <u-icon class="text-green-500 text-2xl" :name="CHECK_ICON" />
              </div>
              <div>
                <p class="text-black font-semibold">Powerful Analytics</p>
                <p class="text-sm">
                  Understand your audience and optimize your events
                </p>
              </div>
            </li>
          </ul>
          <div class="bg-white rounded-xl p-5 text-center mt-10">
            <p class="text-green-400">
              Seamless ticketing on WhatsApp, USSD & Web
            </p>
          </div>
        </div>
      </div>
    </div>
    <home-popular-events />
    <ready />
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Tixapp | Event Tracking Simpfly",
});
</script>
