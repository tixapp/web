<template>
    <section class="bg-linear-to-br from-gray-900/40 via-blue-100  to-pink-800/40">
     <div class="lg:container lg:mx-auto lg:px-14 px-6 py-20">
           <!-- Hero -->
        <div class="text-center my-20">
            <h1 class="text-3xl lg:text-4xl font-bold text-gray-900">
                Transform your events into unforgettable experiences: sell tickets, collect payments, and engage
                audiences.
            </h1>
            <p class="text-gray-600 mt-4 lg:text-xl">
                Only pay when you sell. No monthly fees. No hidden charges.
            </p>
        </div>

        <!-- Pricing Cards -->
        <div class="grid md:grid-cols-3 gap-10">
            <!-- Free Plan -->
            <div class="border border-t-4 rounded-3xl p-8 shadow-sm bg-white border-blue-500">
                <div class="mb-2">
                    <p class="text-2xl font-semibold text-primary mb-1">Starter</p>
                    <P>Small events & community organizers</P>
                </div>
                <div class="flex space-x-2  mb-4 items-center">
                    <h2 class="text-4xl font-bold">10%</h2>
                    <p> /per ticket sale (no platform fee)</p>
                </div>
                <p class="text-gray-600 text-sm mb-8">
                    Pay Per Sale — only pay when you sell.
                </p>
                <u-button class="w-full py-3 rounded-lg flex items-center justify-center bg-blue-500 hover:bg-blue-800"
                    variant="solid">
                    Get Started with Starter Plan
                </u-button>
                <P class="pt-5">What you get:</P>

                <ul class="space-y-3 text-sm text-gray-700 mt-10">
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-blue-500" />
                        <span>Unlimited events creation </span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-blue-500" />
                        <span>Mobile Money & Card Payments</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-blue-500" />
                        <span>WhatsApp Ticketing Only</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-blue-500" />
                        <span>WhatsApp Boost to 100 audience </span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-blue-500" />
                        <span>Standard check-in tools i.e Mobile App for verification</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-blue-500" />
                        <span>Basic analytics dashboard</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-blue-500" />
                        <span>Payout automation (Orange/AfriMoney)</span>
                    </li>
                </ul>
            </div>

            <!-- pro Plan -->
            <div class="border border-t-4 rounded-3xl p-8 shadow-sm bg-white border-pink-500 relative">
                <div class="absolute -top-4 right-45 bg-primary text-white text-xs px-3 py-2 rounded-full">
                    Most Popular
                </div>
                <div class="mb-2">
                    <p class="text-2xl font-semibold text-primary mb-1">Pro</p>
                    <P>Mid-sized events & growing brands</P>
                </div>
                <div class="flex space-x-2  mb-4 items-center">
                    <h2 class="text-4xl font-bold">SLE 250</h2>
                    <p> /month</p>
                </div>
                <p class="text-gray-600 text-sm mb-8">
                    Billed Annually at SLE 3,000 + 15% per ticket sale
                </p>
                <u-button class="w-full py-3 rounded-lg flex items-center justify-center bg-pink-600 hover:bg-pink-800"
                    variant="solid">
                    Get Started with Pro Plan
                </u-button>
                <P class="pt-5">What you get:</P>

                <ul class="space-y-3 text-sm text-gray-700 mt-10">
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-pink-600 " />
                        <span>Everything in Starter, Plus: </span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-pink-600 " />
                        <span>Multi-channel ticketing: USSD, WhatsApp & Web </span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-pink-600 " />
                        <span>Priority exposure on event channels</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-pink-600 " />
                        <span>Advanced analytics & insights dashboard</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-pink-600 " />
                        <span>Generate Disposable QR Code Bracelet</span>
                    </li>
                    <li class="flex space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="30" class="text-pink-600 " />
                        <span>Portable 2D QR scanners that scale with your event from 300 to 20,000+ guests.</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-pink-600 " />
                        <span>Fast payouts (within 24 hrs)</span>
                    </li>
                </ul>
            </div>



            <!-- Enterprise Plan -->
            <div class="border border-t-4 rounded-3xl p-8 shadow-sm bg-white border-primary">
                <div class="mb-2">
                    <p class="text-2xl font-semibold  mb-1">Enterprise</p>
                    <P>Large-scale events & agencies</P>
                </div>
                <div class="flex space-x-2  mb-4 items-center">
                    <h2 class="text-4xl font-bold">SLE 417</h2>
                    <p>/month</p>
                </div>
                <p class="text-gray-600 text-sm mb-8">
                    Pay Per Sale — only pay when you sell.
                </p>
                <u-button class="w-full py-3 rounded-lg flex items-center justify-center bg-primary" variant="solid">
                    Contact Sales
                </u-button>
                <P class="pt-5">What you get:</P>

                <ul class="space-y-3 text-sm text-gray-700 mt-10">

                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-primary" />
                        <span>All Pro features +</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-primary" />
                        <span>Priority event placement across all channels</span>
                    </li>
                    <li class="flex space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="25" class="text-primary" />
                        <span>Exclusive campaigns & promotional slots on WhatsApp & SMS</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-primary" />
                        <span>Priority support </span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <u-icon name="i-heroicons-check-circle" size="21" class="text-primary" />
                        <span>Exclusive promotions & campaign support</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Compare Plans -->
        <section class="mt-24">
            <h2 class="text-3xl font-bold text-center mb-12">Compare Plans</h2>

            <div class="space-y-20">

                <!-- SECTION TEMPLATE -->
                <!-- Each category: title + grid with 4 columns -->

                <!-- 1. Core Features -->
                <div>
                    <div class="flex justify-between bg-pink-400 text-white  items-center mb-6 p-4 rounded-xl">
                        <h3 class="text-xl font-semibold ">Core Features</h3>
                        <h3 class="text-xl font-semibold">Starter</h3>
                        <h3 class="text-xl font-semibold ">Pro ⭐ Most Popular</h3>
                        <h3 class="text-xl font-semibold ">Enterprise</h3>
                    </div>

                    <div class="grid grid-cols-4 gap-6">
                        <!-- Column: Labels -->
                        <div class="space-y-5">
                            <p class="text-gray-800 font-medium">Unlimited Events</p>
                            <p class="text-gray-800 font-medium">WhatsApp Ticketing</p>
                            <p class="text-gray-800 font-medium">USSD & Web Ticketing</p>
                        </div>

                        <!-- Starter -->
                        <div class="space-y-5 text-center">
                            <p>✔️</p>
                            <p>Basic</p>
                            <p>—</p>
                        </div>

                        <!-- Pro -->
                        <div class="space-y-5 text-center">
                            <p>✔️</p>
                            <p>Advanced</p>
                            <p>✔️</p>
                        </div>

                        <!-- Enterprise -->
                        <div class="space-y-5 text-center">
                            <p>✔️</p>
                            <p>Premium</p>
                            <p>✔️</p>
                        </div>
                    </div>
                </div>

                <!-- 2. Settlement Options -->
                <div>
                    <div class="flex justify-between bg-pink-400 text-white  items-center mb-6 p-4 rounded-xl">
                        <h3 class="text-xl font-semibold ">Settlement Options</h3>
                        <h3 class="text-xl font-semibold">Starter</h3>
                        <h3 class="text-xl font-semibold ">Pro ⭐ Most Popular</h3>
                        <h3 class="text-xl font-semibold ">Enterprise</h3>
                    </div>
                    <div class="grid grid-cols-4 gap-6">
                        <!-- Labels -->
                        <div class="space-y-5">
                            <p class="text-gray-800 font-medium">Bank Settlement</p>
                            <p class="text-gray-800 font-medium">Mobile Money Settlement</p>
                            <p class="text-gray-800 font-medium">Instant Settlement</p>
                        </div>

                        <!-- Starter -->
                        <div class="space-y-5 text-center">
                            <p>✔️</p>
                            <p>✔️</p>
                            <p>—</p>
                        </div>

                        <!-- Pro -->
                        <div class="space-y-5 text-center">
                            <p>✔️</p>
                            <p>✔️</p>
                            <p>✔️</p>
                        </div>

                        <!-- Enterprise -->
                        <div class="space-y-5 text-center">
                            <p>✔️</p>
                            <p>✔️</p>
                            <p>Priority</p>
                        </div>
                    </div>
                </div>

                <!-- 3. Add-on Features -->
                <div>
                    <div class="flex justify-between bg-pink-400 text-white items-center mb-6 p-4 rounded-xl">
                        <h3 class="text-xl font-semibold ">Add-on Features</h3>
                        <h3 class="text-xl font-semibold">Starter</h3>
                        <h3 class="text-xl font-semibold ">Pro ⭐ Most Popular</h3>
                        <h3 class="text-xl font-semibold ">Enterprise</h3>
                    </div>
                    <div class="grid grid-cols-4 gap-6">
                        <!-- Labels -->
                        <div class="space-y-5">
                            <p class="text-gray-800 font-medium">Analytics</p>
                            <p class="text-gray-800 font-medium">Event Promotion</p>
                            <p class="text-gray-800 font-medium">Scanner & Check-in Tools</p>
                        </div>

                        <!-- Starter -->
                        <div class="space-y-5 text-center">
                            <p>Basic</p>
                            <p>Standard</p>
                            <p>Basic</p>
                        </div>

                        <!-- Pro -->
                        <div class="space-y-5 text-center">
                            <p>Advanced</p>
                            <p>Priority</p>
                            <p>Advanced</p>
                        </div>

                        <!-- Enterprise -->
                        <div class="space-y-5 text-center">
                            <p>Full Dashboard</p>
                            <p>Top-tier</p>
                            <p>Industrial Suite</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>


        <!-- CTA -->
        <div class="text-center mt-20">
            <h3 class="text-2xl font-bold mb-3">Ready to try TixApp?</h3>
            <p class="text-gray-600 mb-6">Set up your first event in minutes.</p>
            <u-button class="rounded-full px-8 py-4 text-lg" color="primary">
                Get Started
            </u-button>
        </div>
     </div>
    </section>
</template>
