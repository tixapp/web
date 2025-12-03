<template>
  <footer class="bg-[#DCF8C6] pb-16 px-16">
    <div class="bg-white container mx-auto px-6 lg:px-14 py-14 rounded-b-3xl">

      <!-- CTA Box -->
      <div
        class="bg-[#7ECF82] text-white rounded-3xl p-10 mb-16 flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Don’t build another website.
          </h2>
          <p class="text-lg leading-relaxed">
            Let your audience buy tickets where they already chat. <br />
            Sell more. Stress less. Impress your fans.
          </p>
        </div>

        <div class="flex space-x-4">
          <button class="bg-white text-gray-900 font-medium py-3 px-6 rounded-full shadow">
            Get Started
          </button>
          <button class="bg-white/30 border border-white text-white font-medium py-3 px-6 rounded-full">
            Book a demo
          </button>
        </div>
      </div>

      <!-- Footer Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-600">

        <!-- Logo + Description -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <img src="/logo.png" alt="TixApp" class="h-8" />
          </div>
          <p class="text-sm leading-relaxed">
            Intuitive ticketing presented in the simplest way. Sell tickets
            where your customers already are.
          </p>

          <p class="text-xs mt-10 text-gray-400">
            © 2025 TixApp Limited. All rights reserved.
          </p>
        </div>

        <!-- Products -->
        <div>
          <h3 class="font-semibold text-gray-900 mb-4">Products</h3>
          <ul class="space-y-2 text-sm">
            <li>WhatsApp Ticketing</li>
            <li>USSD Ticketing</li>
            <li>Event Dashboard</li>
            <li>Analytics</li>
            <li>Marketing Tools</li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="font-semibold text-gray-900 mb-4">Company</h3>
          <ul class="space-y-2 text-sm">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Help Center</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <!-- Get in Touch -->
        <div>
          <h3 class="font-semibold text-gray-900 mb-4">Get in Touch</h3>
          <p class="text-sm mb-4">
            Questions or feedback? <br />
            We’d love to hear from you.
          </p>

          <div class="flex space-x-4 text-xl mt-4">
            <u-icon name="i-fa6-brands-facebook" />
            <u-icon name="i-fa6-brands-whatsapp" />
            <u-icon name="i-fa6-brands-instagram" />
            <u-icon name="i-fa6-brands-x-twitter" />
            <u-icon name="i-fa6-brands-linkedin" />
          </div>
        </div>
      </div>

      <!-- Bottom Links -->
      <div class="mt-14 flex flex-col sm:flex-row md:justify-end sm:space-x-10 text-sm text-gray-500">
        <a href="#" class="hover:text-gray-700">Privacy Policy</a>
        <a href="#" class="hover:text-gray-700">Terms & Conditions</a>
        <a href="#" class="hover:text-gray-700">Cookie Policy</a>
      </div>
    </div>
  </footer>
</template>
