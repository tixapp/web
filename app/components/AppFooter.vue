<template>
  <footer class="bg-primary-600 text-gray-300/80">
    <div class="mx-auto container px-14 py-10 space-y-10">
      <div class="grid grid-cols-4 gap-5">
        <div>
          <nuxt-link to="/">
            <img src="/logo.png" class="h-8" />
          </nuxt-link>
          <p class="mt-4 pr-5">
            Intuitive ticketing presented in the simplest way. Sell tickets
            where your customers already are.
          </p>
          <div class="flex mt-7 space-x-4">
            <nuxt-link href="#" class="w-10 h-10 flex items-center justify-center border rounded-full border-gray-600 hover:bg-secondary-700 p-1">
              <u-icon name="proicons:x-twitter" />
            </nuxt-link>
            <nuxt-link href="#" class="w-10 h-10 flex items-center justify-center border rounded-full border-gray-600 hover:bg-secondary-700 p-1">
              <u-icon name="iconoir:facebook" class="text-xl" />
            </nuxt-link>
            <nuxt-link href="#" class="w-10 h-10 flex items-center justify-center border rounded-full border-gray-600 hover:bg-secondary-700 p-1">
              <u-icon name="qlementine-icons:instagram-16" />
            </nuxt-link>
            <nuxt-link href="#" class="w-10 h-10 flex items-center justify-center border rounded-full border-gray-600 hover:bg-secondary-700 p-1">
              <u-icon name="basil:linkedin-outline" />
            </nuxt-link>
          </div>
        </div>
        <div>
          <p class="text-lg text-white">Products</p>
          <ul class="mt-3 space-y-2">
            <li><nuxt-link to="#" class="flex space-x-2 items-center"><p class="w-1 h-1 bg-secondary-400 rounded-full block"></p><p>WhatsApp Ticketing</p></nuxt-link></li>
            <li><nuxt-link to="#" class="flex space-x-2 items-center"><p class="w-1 h-1 bg-secondary-400 rounded-full block"></p><p>USSD Ticketing</p></nuxt-link></li>
            <li><nuxt-link to="#" class="flex space-x-2 items-center"><p class="w-1 h-1 bg-secondary-400 rounded-full block"></p><p>Event Dashboard</p></nuxt-link></li>
            <li><nuxt-link to="#" class="flex space-x-2 items-center"><p class="w-1 h-1 bg-secondary-400 rounded-full block"></p><p>Analytics</p></nuxt-link></li>
            <li><nuxt-link to="#" class="flex space-x-2 items-center"><p class="w-1 h-1 bg-secondary-400 rounded-full block"></p><p>Marketing Tools</p></nuxt-link></li>
          </ul>
        </div>
        <div>
          <p class="text-lg text-white">Company</p>
          <ul class="mt-3 space-y-2">
            <li><nuxt-link to="#" class="flex space-x-2 items-center"><p class="w-1 h-1 bg-secondary-400 rounded-full block"></p><p>About Us</p></nuxt-link></li>
            <li><nuxt-link to="#" class="flex space-x-2 items-center"><p class="w-1 h-1 bg-secondary-400 rounded-full block"></p><p>Blog</p></nuxt-link></li>
            <li><nuxt-link to="#" class="flex space-x-2 items-center"><p class="w-1 h-1 bg-secondary-400 rounded-full block"></p><p>Careers</p></nuxt-link></li>
            <li><nuxt-link to="#" class="flex space-x-2 items-center"><p class="w-1 h-1 bg-secondary-400 rounded-full block"></p><p>Help Center</p></nuxt-link></li>
            <li><nuxt-link to="#" class="flex space-x-2 items-center"><p class="w-1 h-1 bg-secondary-400 rounded-full block"></p><p>Contact Us</p></nuxt-link></li>
          </ul>
        </div>
        <div>
          <p class="text-lg text-white">Get in Touch</p>
          <ul class="mt-3 space-y-2">
            <li>
              <nuxt-link href="" class="space-x-2 items-center flex">
                <u-icon
                  class="text-secondary-400 text-xl mt-0.5"
                  name="material-symbols-light:attach-email-outline-rounded"
                />
                <p>support@tixapp.com</p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link href="" class="space-x-2 items-center flex">
                <u-icon
                  class="text-secondary-400 text-xl"
                  name="proicons:phone"
                />
                <p>+232 79 999969</p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link href="" class="space-x-2 flex">
                <u-icon
                  class="text-secondary-400 mt-1 text-xl"
                  :name="LOCATION_ICON"
                />
                <p>23 Plum Health, Hill Station, <br>Freetown, Sierra Leone</br></p>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-between border-t border-gray-600 pt-5 text-sm">
        <p>© 2025 TixApp Limited. All rights reserved.</p>
        <ul class="flex space-x-4">
          <li>
            <nuxt-link to="#">Privacy Policy</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Terms & Conditions</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Cookie Policy</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
