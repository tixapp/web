<template>
  <section class="relative overflow-hidden">
    <!-- Hero Image -->
    <img src="/hero.png" alt="Chat Hero" class="w-full rounded-2xl object-cover" />

    <!-- Chat mockup overlay -->
    <div class="absolute bottom-10 left-0 right-0 top-2 flex flex-col space-y-3 px-8 sm:px-12 md:px-14 ">
      <!-- CHAT AREA -->
      <div class="flex-1 p-4 space-y-6 overflow-y-auto h-full">
        <!-- User Message -->
        <CoreChatBubbleUser> 
           <p class="text-[10px]"> Hi!</p>
        </CoreChatBubbleUser>



        <!-- Bot Welcome Message -->
        <CoreChatBubbleBot>
          <p class="text-[10px]">Hello 👋 Lamin, and welcome to TixApp.<br />
            I’m your Ticket Assistant. How can I help you today?</p>

          <u-button size="xs" class="mt-4 w-full bg-[#C6F7D0] hover:bg-[#C6F7D0] text-gray-800 py-2 text-sm font-medium flx justify-center items-center">
            Explore Events
          </u-button>
        </CoreChatBubbleBot> 

        <!-- User Message -->
        <CoreChatBubbleUser>
         <p class="text-[10px]"> Explore Events</p>
        </CoreChatBubbleUser>


        <!-- Event Card (Inside Bot Bubble) -->
        
          <core-event-card title="TixApp Fest Volume I" subtitle="Live Band Night" location="Stadium Swimming Pool"
            date="Dec 12" price="150" />

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
