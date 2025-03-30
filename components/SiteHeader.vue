<script setup lang="ts">
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/AboutUs', label: 'About Us' },
    { to: '/Properties', label: 'Properties' },
    { to: '/Services', label: 'Services' },
  ];
</script>

<template>
  <PopUp />
  <!-- Mobile Header -->
  <div class="mobile-box bg-mg laptop:hidden">
    <div class="flex items-center justify-between bg-[#1A1A1A] p-8">
      <NuxtLink to="/" class="cursor-pointer logo-container">
        <img :src="$loadImage('/images/HeaderLogo.svg')" class="logo" alt="HeaderLogo" >
        <h1 class="ml-4 text-white font-sans">Estatein</h1>
      </NuxtLink>
      <div class="hambu-container">
        <img :src="$loadImage('/icons/Hamburger.svg')" alt="Hamburger" >
      </div>
    </div>
  </div>

  <!-- Desktop Header  -->
  <div class="laptop-box hidden items-center justify-evenly bg-hg py-6 laptop:flex">
    <NuxtLink to="/" class="logo-container">
      <img :src="$loadImage('/images/HeaderLogo.svg')" class="logo" alt="HeaderLogo" >
      <h1 class="ml-4 font-sans text-2xl font-bold text-white">Estatein</h1>
    </NuxtLink>

    <div class="center space-x-4">
      <NuxtLink
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.to"
        class="font-sans text-lg font-medium text-white cursor-pointer"
        exact-active-class="rounded-xl border-2 border-gl bg-fgl px-8 py-4">
        {{ item.label }}
      </NuxtLink>
    </div>
    <div class="rounded-xl bg-[#703BF7] px-8 py-4 text-center font-sans text-base font-medium text-white">
      <NuxtLink to="/Contact">Contact Us</NuxtLink>
    </div>
  </div>
</template>






<style scoped>
  
  .logo-container > * {
    display: inline-block;
  }
</style>
