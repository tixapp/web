<template>
  <section class="py-16">
    <!-- Hero -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h1 class="text-3xl font-bold">How TixApp Works</h1>
      <p class="text-gray-600 mt-3">
        A simple flow that handles your entire event — from setup to check-in.
      </p>
    </div>

    <!-- Steps -->
    <div class="grid gap-12 max-w-5xl mx-auto">
      <!-- Step 1 -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1">
          <h2 class="text-xl font-semibold">1. Create Your Event</h2>
          <p class="text-gray-600 mt-2">
            Add your details, set your ticket types, and publish instantly. No complicated setup.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1515169067865-5387ec356754?w=800"
          class="rounded-xl shadow-md w-full md:w-1/2"
          alt="Create event"
        />
      </div>

      <!-- Step 2 -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-8">
        <div class="flex-1">
          <h2 class="text-xl font-semibold">2. Sell Tickets Everywhere</h2>
          <p class="text-gray-600 mt-2">
            Share your event link or let fans discover it on TixApp. Payments are fast and secure.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=800"
          class="rounded-xl shadow-md w-full md:w-1/2"
          alt="Sell tickets"
        />
      </div>

      <!-- Step 3 -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1">
          <h2 class="text-xl font-semibold">3. Scan & Check-In</h2>
          <p class="text-gray-600 mt-2">
            Use our fast QR scanner for clean, secure, and fraud-proof entry — even offline.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1541533260371-b8fc9b596d84?w=800"
          class="rounded-xl shadow-md w-full md:w-1/2"
          alt="Check in"
        />
      </div>

      <!-- Step 4 -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-8">
        <div class="flex-1">
          <h2 class="text-xl font-semibold">4. Track Performance</h2>
          <p class="text-gray-600 mt-2">
            Real-time analytics for sales, check-ins, and revenue — all in one dashboard.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800"
          class="rounded-xl shadow-md w-full md:w-1/2"
          alt="Analytics"
        />
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-20">
      <NuxtLink
        to="/create-event"
        class="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800"
      >
        Start Your First Event
      </NuxtLink>
    </div>
  </section>
</template>
