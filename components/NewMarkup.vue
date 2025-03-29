<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  price: string
}>()
</script>

<template>
  <div class="bg-[#121212] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col gap-4 max-w-sm">
    <!-- Image -->
    <img :src="image" :alt="title" class="rounded-xl w-full h-56 object-cover" >

    <!-- Category Tag -->
    <span class="bg-[#1D1D1D] text-white text-sm px-4 py-1 rounded-full w-max">
      Coastal Escapes – Where Waves Beckon
    </span>

    <!-- Title -->
    <h3 class="text-white text-xl font-semibold">{{ title }}</h3>

    <!-- Description -->
    <p class="text-[#999999] text-sm leading-relaxed">
      {{ description }}
      <a href="#" class="text-white underline hover:text-purple-400">Read More</a>
    </p>

    <!-- Price -->
    <div class="text-white text-sm mt-auto">
      <span class="text-[#999999] block">Price</span>
      <span class="text-xl font-bold">{{ price }}</span>
    </div>

    <!-- Button -->
    <button class="bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium px-6 py-3 rounded-xl transition">
      View Property Details
    </button>
  </div>
</template>

<style scoped></style>



<!-- Current Mission : 

# Create A PropertyCard, 
With two Templates 
First : Is this Exactly Template Called Feature Property Template 
Second : Is Home Template That Already is Finished



-->