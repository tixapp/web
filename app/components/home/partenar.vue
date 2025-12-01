<script setup lang="ts">
const partners = [
  { src: "https://framerusercontent.com/images/1opuIW6T0WHQf3cPFfdvcOo1s.jpg?width=301&height=102", alt: "Access" },
  { src: "https://framerusercontent.com/images/YYYoNJ44u7zzgRELCIdTuoh0Mk.png?scale-down-to=512&width=669&height=143", alt: "Elephant Bet" },
  { src: "https://framerusercontent.com/images/TNmwyszJ0EPezxeASkUBERpOaRU.png?width=440&height=154", alt: "Orange Money" },
  { src: "https://framerusercontent.com/images/QbnD7J7zzvmsTRjcSmproyjdeQ.png?width=368&height=368", alt: "Gtco" },
  { src: "https://framerusercontent.com/images/mVRmbH4DmoUVlBTmUPcHdDnrT5c.png?width=500&height=170", alt: "Interswitch" },
  { src: "https://framerusercontent.com/images/lNNMVj9TMhvfgkyikMIQWpQeQHw.png?width=314&height=117", alt: "Diakem" },
  { src: "https://framerusercontent.com/images/45e8Cfr3huP3o4qMF3OeGzF5ETQ.png?width=357&height=128", alt: "Watu" },
  { src: "https://framerusercontent.com/images/Xq5RbKsQLBOvb0iy8fLkhqCB4M.jpeg?scale-down-to=512&width=819&height=112", alt: "The Community" },
  { src: "https://framerusercontent.com/images/nVR5QsEsD9xj8X7F9YmYh3U6Eo.png?width=424&height=120", alt: "Africell" },
  { src: "https://framerusercontent.com/images/wRKzXdElT9taORz0rPkptL2aw1Y.png?width=180&height=180", alt: "Partner" },
  { src: "https://framerusercontent.com/images/gro49jfNjTjQj5hf8SnTNBmIPQo.jpeg?width=375&height=427", alt: "SLCB" },
  { src: "https://framerusercontent.com/images/NibqVcJ9CrouGTOVtU7FeGMMHfY.jpeg?width=224&height=224", alt: "Big Bits" },
];
</script>

<template>
  <section class="py-10  overflow-hidden bg-white">
    <div class="relative w-full">
        <p class="text-center mb-8">Trusted by Leading Organizations Across Sierra Leone</p>
      <div class="flex animate-scroll gap-12 whitespace-nowrap">
        <!-- duplicate logos for seamless loop -->
        <div v-for="n in 2" :key="n" class="flex gap-12">
          <div v-for="partner in partners" :key="`${partner.alt}-${n}`" >
            <img
              :src="partner.src"
              :alt="partner.alt || 'Partner logo'"
              class="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 25s linear infinite;
}
</style>