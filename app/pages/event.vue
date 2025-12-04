<template>
  <div>

    <!-- HERO -->
    <section class="py-20">
      <div class="container mx-auto px-6 lg:p-14 flex flex-col items-center text-center">

        <h1 class="text-4xl lg:text-5xl font-bold tracking-tight">
          Discover Events Happening Near You
        </h1>

        <p class="text-gray-600 mt-3 max-w-xl">
          From concerts to conferences — explore, book, and enjoy the best events around you.
        </p>

        <!-- Search Row -->
        <div class="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
          <input
            v-model="search"
            type="text"
            placeholder="Search events..."
            class="w-full sm:flex-1 h-12 px-4 border rounded-lg focus:ring focus:ring-primary/20"
          />

          <select
            v-model="category"
            class="h-12 px-4 border rounded-lg"
          >
            <option value="">All Categories</option>
            <option 
              v-for="cat in categories" 
              :key="cat" 
              :value="cat"
            >
              {{ cat }}
            </option>
          </select>

          <u-button color="primary" class="h-12 px-6">
            Search
          </u-button>
        </div>

      </div>
    </section>

    <!-- EVENT LIST -->
    <section class="py-16">
      <div class="container mx-auto px-6 lg:px-14">

        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold tracking-tight">All Events</h2>

          <p class="text-gray-600 text-sm">
            Showing {{ filteredEvents.length }} events
          </p>
        </div>

        <!-- Grid -->
        <div class="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <event
            v-for="row in filteredEvents"
            :key="row.id"
            :data="row"
          />
        </div>

        <!-- No results -->
        <div 
          v-if="filteredEvents.length === 0" 
          class="text-center py-20 text-gray-500"
        >
          No events found. Try a different search or category.
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const search = ref('')
const category = ref('')

const categories = [
  "Music",
  "Technology",
  "Culture",
  "Business",
  "Community",
  "Charity"
]

const events: Ticket[] = [
  {
    id: "evt-001",
    name: "AfroBeat Music Festival",
    image: "https://picsum.photos/seed/afrobeat/800/600",
    location: "Lumley Beach, Freetown, Sierra Leone",
    date: "2025-12-20",
    category: "Music",
    prices: [
      { name: "Regular", amount: 0 },
      { name: "VIP", amount: 250 },
      { name: "VVIP", amount: 500 },
    ],
  },
  {
    id: "evt-002",
    name: "Tech Innovators Conference 2025",
    image: "https://picsum.photos/seed/techconf/800/600",
    location: "Bintumani Conference Centre, Aberdeen, Freetown",
    date: "2025-11-15",
    category: "Technology",
    prices: [
      { name: "Early Bird", amount: 150 },
      { name: "Standard", amount: 300 },
      { name: "VIP", amount: 500 },
    ],
  },
  {
    id: "evt-003",
    name: "Sierra Leone Food & Culture Expo",
    image: "https://picsum.photos/seed/foodexpo/800/600",
    location: "National Stadium Grounds, Freetown",
    date: "2025-12-05",
    category: "Culture",
    prices: [
      { name: "Single Entry", amount: 50 },
      { name: "Family Ticket", amount: 100 },
    ],
  },
  {
    id: "evt-004",
    name: "Startup Pitch Night",
    image: "https://picsum.photos/seed/pitchnight/800/600",
    location: "Limkokwing Innovation Hub, Hill Station, Freetown",
    date: "2025-11-30",
    category: "Business",
    prices: [
      { name: "General Admission", amount: 0 },
      { name: "Supporter", amount: 100 },
    ],
  },
  {
    id: "evt-005",
    name: "Community Beach Cleanup & BBQ",
    image: "https://picsum.photos/seed/beachcleanup/800/600",
    location: "Lumley Beach, Freetown",
    date: "2025-11-10",
    category: "Community",
    prices: [
      { name: "Volunteer", amount: 0 },
      { name: "Support Ticket", amount: 50 },
    ],
  },
  {
    id: "evt-006",
    name: "Christmas Charity Gala",
    image: "https://picsum.photos/seed/charitygala/800/600",
    location: "Radisson Blu Mammy Yoko Hotel, Freetown",
    date: "2025-12-24",
    category: "Charity",
    prices: [
      { name: "Standard", amount: 300 },
      { name: "VIP", amount: 600 },
      { name: "Table of 4", amount: 1000 },
    ],
  },
]

const filteredEvents = computed(() => {
  return events.filter((e) => {
    const matchesSearch = e.name.toLowerCase().includes(search.value.toLowerCase())
    const matchesCategory = !category.value || e.category === category.value
    return matchesSearch && matchesCategory
  })
})
</script>
