<template>
  <section class="lg:container lg:mx-auto lg:px-14 lg:py-20 py-10 space-y-32">

    <!-- HERO -->
    <div class="text-center max-w-4xl mx-auto space-y-6">
      <h1 class="text-4xl font-bold text-gray-900">About TixApp</h1>
      <p class="text-gray-600 text-lg">
        TixApp brings Tickets, Payments, and Voting into one simple system. Our mission is to simplify event management 
        so organizers can focus on creating unforgettable experiences.
      </p>
    </div>

    <!-- MISSION & VISION -->
    <div class="grid md:grid-cols-2 gap-16 items-center">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-900">Our Mission</h2>
        <p class="text-gray-600 text-lg">
          To empower event organizers by providing an all-in-one platform that seamlessly handles ticketing, payments, 
          and engagement, wherever their audience is.
        </p>
      </div>
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-900">Our Vision</h2>
        <p class="text-gray-600 text-lg">
          To be the go-to platform for event management across Africa, making events more accessible, efficient, and enjoyable 
          for organizers and attendees alike.
        </p>
      </div>
    </div>

    <!-- WHY CHOOSE US -->
    <div class="space-y-12">
      <h2 class="text-3xl font-bold text-gray-900 text-center">Why Choose TixApp?</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center">
          <UIcon name="lucide:clock" class="w-12 h-12 mx-auto text-green-600 mb-4"/>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Save Time</h3>
          <p class="text-gray-600 text-sm">Automate ticketing and payments so you can focus on the event itself.</p>
        </div>
        <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center">
          <UIcon name="lucide:smartphone" class="w-12 h-12 mx-auto text-green-600 mb-4"/>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Sell Anywhere</h3>
          <p class="text-gray-600 text-sm">Reach your audience via WhatsApp, USSD, and web with ease.</p>
        </div>
        <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center">
          <UIcon name="lucide:bar-chart-3" class="w-12 h-12 mx-auto text-green-600 mb-4"/>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Insights</h3>
          <p class="text-gray-600 text-sm">Understand your audience with live dashboards and analytics.</p>
        </div>
        <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center">
          <UIcon name="lucide:shield" class="w-12 h-12 mx-auto text-green-600 mb-4"/>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Secure</h3>
          <p class="text-gray-600 text-sm">Safe and reliable ticketing, payments, and check-ins for every event.</p>
        </div>
      </div>
    </div>

    <!-- TEAM -->
    <div class="space-y-12">
      <h2 class="text-3xl font-bold text-gray-900 text-center">Meet Our Team</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div class="text-center space-y-3">
          <img src="https://via.placeholder.com/150" alt="Team member" class="w-32 h-32 mx-auto rounded-full object-cover shadow-md"/>
          <h3 class="text-lg font-semibold text-gray-900">Aruna Kargbo</h3>
          <p class="text-gray-600 text-sm">Founder & CEO</p>
        </div>
        <div class="text-center space-y-3">
          <img src="https://via.placeholder.com/150" alt="Team member" class="w-32 h-32 mx-auto rounded-full object-cover shadow-md"/>
          <h3 class="text-lg font-semibold text-gray-900">Jane Doe</h3>
          <p class="text-gray-600 text-sm">Product Lead</p>
        </div>
        <div class="text-center space-y-3">
          <img src="https://via.placeholder.com/150" alt="Team member" class="w-32 h-32 mx-auto rounded-full object-cover shadow-md"/>
          <h3 class="text-lg font-semibold text-gray-900">John Smith</h3>
          <p class="text-gray-600 text-sm">Lead Engineer</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-16">
      <h2 class="text-3xl font-bold text-gray-900">Join TixApp Today</h2>
      <p class="text-gray-600 mt-2 text-lg">Simplify your events and grow your audience with ease.</p>
      <u-button label="Get Started" variant="filled" color="success" class="mt-6 px-10 py-4 text-lg rounded-2xl"/>
    </div>

  </section>
</template>

<script setup>
</script>
