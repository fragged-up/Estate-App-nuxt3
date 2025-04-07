<script setup lang="ts">
  const emit = defineEmits(['close']);
  const emitClose = () => emit('close');

  interface NavItem {
    label: string;
    to: string;
    isPrimary?: boolean;
  }

  const navItems: NavItem[] = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/AboutUs' },
    { label: 'Properties', to: '/properties' },
    { label: 'Services', to: '/services' },
    { label: 'Contact Us', to: '/contact', isPrimary: true },
  ];
</script>

<template>
  <div class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-start p-6 pt-10 gap-8 text-white laptop:hidden">
    <div class="flex justify-between items-center">
      <span class="text-3xl font-sans font-extrabold tracking-wider">Estatein</span>
      <button class="absolute top-6 right-6 text-3xl text-white" @click="emitClose">&times;</button>
    </div>

    <nav class="flex flex-col gap-5 mt-10 text-xl font-sans font-semibold tracking-wide">
      <NuxtLink
        v-for="(item, idx) in navItems"
        :key="idx"
        :to="item.to"
        class="transition hover:underline hover:text-purple-400"
        :class="[item.isPrimary ? 'mt-6 bg-purple-600 rounded-xl py-3 text-center font-bold' : '']"
        @click="emitClose" >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </div>
</template>
