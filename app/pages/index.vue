<template>
  <div>
    <!-- Hero -->
    <home-hero />
    <home-partenar />
    <!-- Built For -->
    <section class="py-24 bg-linear-to-b from-white to-pink-50">
      <div class="container mx-auto px-6 lg:px-14">

        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900">Built for Everyone</h2>
          <p class="text-gray-600 mt-2">Simple for hosts. Seamless for attendees.</p>
        </div>

        <!-- Cards -->
        <div class="space-y-6">
          <!-- Large Card -->
          <div
            class="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-start justify-between gap-8">

              <!-- Left Section -->
              <div class="flex-1 p-8 ">
                <!-- Icon -->
                <div
                  class="w-16 h-16 rounded-2xl bg-linear-to-br from-pink-500 to-pink-50/70 flex items-center justify-center shadow-md">
                  <u-icon :name="EVENT_ICON" class="text-4xl text-white" />
                </div>

                <div class="mt-6 space-y-4">
                  <p class="text-xl font-semibold text-gray-900">Event Organizers</p>
                  <p class="text-gray-600 leading-relaxed">
                    Create, manage, and track your events without stress.
                  </p>

                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-center gap-2">
                      <dot /><span>Live dashboards</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <dot /><span>Instant alerts</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <dot /><span>Automated earnings</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Right Image -->
              <div class="hidden md:block w-1/2">
                <img src="/1.png" class="w-full h-auto" alt="">
              </div>

            </div>
          </div>

          <!-- Bottom Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Card -->
            <div
              class="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
              <div class="">
                <!-- Left -->
                <div class="flex-1 p-8 ">
                  <div
                    class="w-16 h-16 rounded-2xl bg-linear-to-br  from-pink-500 to-pink-50/70  flex items-center justify-center shadow-md">
                    <u-icon :name="ARTIST_ICON" class="text-4xl text-white" />
                  </div>

                  <div class="mt-6 space-y-4">
                    <p class="text-xl font-semibold text-gray-900">Artists & Creatives</p>
                    <p class="text-gray-600 leading-relaxed">
                      Grow your audience while we handle the operations.
                    </p>

                    <ul class="space-y-2 text-gray-700">
                      <li class="flex items-center gap-2">
                        <dot /><span>Direct fan connection</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <dot /><span>Built-in promotion</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <dot /><span>Performance analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Image -->
                <div class="hidden md:block mt-4 w-full">
                  <img src="/2.png" class="rounded-b-3xl h-[300px] object-fill w-full" alt="">
                </div>

              </div>
            </div>

            <!-- Card -->
            <div
              class="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
              <div class="">

                <!-- Left -->
                <div class="flex-1 p-8">
                  <div
                    class="w-16 h-16 rounded-2xl bg-linear-to-br  from-pink-500 to-pink-50/70 flex items-center justify-center shadow-md">
                    <u-icon :name="TICKET_ICON" class="text-4xl text-white" />
                  </div>

                  <div class="mt-6 space-y-4">
                    <p class="text-xl font-semibold text-gray-900">Ticket Buyers</p>
                    <p class="text-gray-600 leading-relaxed">
                      Find, book, and enjoy events with zero friction.
                    </p>

                    <ul class="space-y-2 text-gray-700">
                      <li class="flex items-center gap-2">
                        <dot /><span>Instant confirmation</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <dot /><span>Automatic reminders</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <dot /><span>Secure digital tickets</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Image -->
                <div class="hidden md:block mt-4 w-full h-full">
                  <img src="/3.png" class="rounded-b-3xl " alt="">
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>


    <div class="bg-white">

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
              <div class="w-10 flex justify-center items-center h-10 rounded-xl bg-red-500">
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
              <div class="w-10 flex justify-center items-center h-10 rounded-xl bg-green-500">
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
    </div>
    <home-popular-events />
    <!-- FAQ -->
    <div class="py-20 bg-white">
      <div class="flex flex-col justify-center items-center  mb-10">
        <p class="text-[#7008E7] bg-[#F5F3FF] border rounded-3xl p-1 px-3 border-[#DDD6FF] mb-2">AFQ</p>
        <h2 class="text-3xl font-bold  mb-4">Frequently Asked Questions</h2>
        <P>everything you need to know about TixApp</P>
      </div>


      <div class="max-w-3xl mx-auto space-y-6">
        <details class="p-5 border rounded-xl bg-pink-50">
          <summary class="font-semibold cursor-pointer">How do I book tickets on TikApp?</summary>
          <p class="mt-2 text-gray-600 text-sm">
            Simply browse events, select the one you want, choose your ticket tier, and complete the booking via
            WhatsApp. You'll receive confirmation instantly!
          </p>
        </details>

        <details class="p-5 border rounded-xl bg-pink-50">
          <summary class="font-semibold cursor-pointer">Is WhatsApp booking secure?</summary>
          <p class="mt-2 text-gray-600 text-sm">
            Yes! All transactions are verified and secure. We partner with trusted payment providers and verified event
            organizers to ensure your safety.
          </p>
        </details>

        <details class="p-5 border rounded-xl bg-pink-50">
          <summary class="font-semibold cursor-pointer">Can i get a refund if I can’t attend?</summary>
          <p class="mt-2 text-gray-600 text-sm">
            Simply browse events, select the one you want, choose your ticket tier, and complete the booking via
            WhatsApp. You'll receive confirmation instantly!
          </p>
        </details>

        <details class="p-5 border rounded-xl bg-pink-50">
          <summary class="font-semibold cursor-pointer">How do I receive my tickets?</summary>
          <p class="mt-2 text-gray-600 text-sm">
            Simply browse events, select the one you want, choose your ticket tier, and complete the booking via
            WhatsApp. You'll receive confirmation instantly!
          </p>
        </details>

        <details class="p-5 border rounded-xl bg-pink-50">
          <summary class="font-semibold cursor-pointer">What types of events are available?</summary>
          <p class="mt-2 text-gray-600 text-sm">
            Simply browse events, select the one you want, choose your ticket tier, and complete the booking via
            WhatsApp. You'll receive confirmation instantly!
          </p>
        </details>

        <details class="p-5 border rounded-xl bg-pink-50">
          <summary class="font-semibold cursor-pointer">Can I vote for reality shows on TikApp?</summary>
          <p class="mt-2 text-gray-600 text-sm">
            Simply browse events, select the one you want, choose your ticket tier, and complete the booking via
            WhatsApp. You'll receive confirmation instantly!
          </p>
        </details>
        <details class="p-5 border rounded-xl bg-pink-50">
          <summary class="font-semibold cursor-pointer">Are there early bird discounts?</summary>
          <p class="mt-2 text-gray-600 text-sm">
            Simply browse events, select the one you want, choose your ticket tier, and complete the booking via
            WhatsApp. You'll receive confirmation instantly!
          </p>
        </details>
        <details class="p-5 border rounded-xl bg-pink-50">
          <summary class="font-semibold cursor-pointer">How do i contact support?</summary>
          <p class="mt-2 text-gray-600 text-sm">
            Simply browse events, select the one you want, choose your ticket tier, and complete the booking via
            WhatsApp. You'll receive confirmation instantly!
          </p>
        </details>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Tixapp | Event Tracking Simpfly",
});
</script>
