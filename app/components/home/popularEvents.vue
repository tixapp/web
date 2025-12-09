<template>
  <div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-14 py-10">
      
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p class="text-title">Popular Events</p>
          <p class="mt-1 text-gray-600 text-sm sm:text-base">
            Discover amazing events near you. Book tickets instantly via WhatsApp
          </p>
        </div>

        <u-button 
          variant="outline" 
          color="neutral"
          class="w-full sm:w-auto"
        >
          View All Events
        </u-button>
      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <event :data="row" v-for="row in events" :key="row.id" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
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
];
</script>