<template>
  <div class="lg:container lg:mx-auto lg:px-14 lg:py-20 py-5">
    <div
      class="bg-linear-to-r from-gray-900/40 to-pink-800/40 rounded-3xl flex px-10 pt-14 hero-animate"
    >
      <div class="w-3/5 space-y-10">
        <div>
          <p class="bg-primary inline rounded-full py-2 px-5 text-white">
            Meet Your Customers Where They Are
          </p>
        </div>

        <p class="text-7xl text-white font-bold leading-tight">
          Your Customers are on WhatsApp.
          <span class="text-secondary">Are you?</span>
        </p>

        <p class="text-xl pr-5 text-gray-900 leading-normal">
          TixApp helps you sell tickets where your customers already are.
          Simplify ticketing, boost sales, and delight your audience on:
          <span class="text-secondary">WhatsApp</span>,
          <span class="text-white">USSD</span>, and
          <span class="text-white">Web</span>.
        </p>

        <div class="space-x-5 mb-10">
          <u-button
            label="Get Started"
            class="text-xl rounded-full py-4 px-5"
            :trailing-icon="RIGHT_ARROW_ICON"
          />
          <u-button
            label="Schedule Demo"
            variant="outline"
            color="neutral"
            :trailing-icon="LAB_ICON"
            class="text-xl rounded-full py-4 px-5"
          />
        </div>
      </div>

      <div class="w-2/5 ">
        <home-hero-chart />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* MAIN HERO ANIMATION */
.hero-animate {
  opacity: 0;
  transform: translateY(40px);
  animation: fadeUp 0.9s ease-out forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
