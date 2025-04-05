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
    { label: 'About Us', to: '/about' },
    { label: 'Properties', to: '/properties' },
    { label: 'Services', to: '/services' },
    { label: 'Contact Us', to: '/contact', isPrimary: true },
  ];
</script>

<template>
  <div class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-6 gap-6 text-white laptop:hidden">
    <div class="flex justify-between items-center">
      <span class="text-2xl font-bold">Estatein</span>
      <button class="text-3xl" @click="emitClose">&times;</button>
    </div>

    <nav class="flex flex-col gap-4 mt-6 text-lg font-medium">
      <NuxtLink
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.to"
        :class="[item.isPrimary ? 'mt-4 bg-purple-600 rounded-xl py-2 text-center' : '']"
        @click="emitClose" >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </div>
</template>
