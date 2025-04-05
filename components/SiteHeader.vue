<script setup lang="ts">
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/AboutUs', label: 'About Us' },
    { to: '/Properties', label: 'Properties' },
    { to: '/Services', label: 'Services' },
  ];
  const isOpen = ref(false)
</script>

<template>
  <PopUp />
  <!-- Mobile Header -->
  <div class="bg-mg laptop:hidden">
    <div class="flex items-center justify-between bg-[#1A1A1A] p-8">
      <NuxtLink to="/" class="cursor-pointer">
        <img :src="$loadImage('/images/HeaderLogo.svg')" class="inline-block" alt="HeaderLogo" >
        <h1 class="ml-4 text-white font-sans inline-block">Estatein</h1>
      </NuxtLink>
      <div class="hambu-container">
        <img :src="$loadImage('/icons/Hamburger.svg')" alt="Hamburger" >
      </div>
    </div>
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-8">
      <MobileMenu v-if="isOpen" @close="isOpen = false" />
    </Transition>
  </div>

  <!-- Desktop Header  -->
  <div class="laptop-box hidden items-center justify-evenly bg-hg py-6 laptop:flex">
    <NuxtLink to="/" class="cursor-pointer">
      <img :src="$loadImage('/images/HeaderLogo.svg')" class="inline-block" alt="HeaderLogo" >
      <h1 class="ml-4 font-sans text-2xl font-bold text-white inline-block">Estatein</h1>
    </NuxtLink>

    <div class="text-center space-x-4">
      <NuxtLink
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.to"
        class="font-sans text-lg font-medium text-white cursor-pointer"
        exact-active-class="rounded-xl border-2 border-gl bg-fgl px-8 py-4">
        {{ item.label }}
      </NuxtLink>
    </div>
    <div class="rounded-xl bg-[#703BF7] cursor-pointer px-8 py-4 text-center font-sans text-base font-medium text-white">
      <NuxtLink to="/Contact">Contact Us</NuxtLink>
    </div>
  </div>
</template>

