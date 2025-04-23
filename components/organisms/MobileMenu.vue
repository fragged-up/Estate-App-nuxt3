<!-- MobileMenu.vue -->
<script setup lang="ts">
const emit = defineEmits(['close'])
const emitClose = () => emit('close')

interface NavItem {
  label: string
  to: string
  isPrimary?: boolean
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/aboutUs' },
  { label: 'Properties', to: '/properties' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact', isPrimary: true },
]
</script>

<template>
  <div class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md text-white laptop:hidden flex flex-col pt-10 px-6 gap-8">
    <button class="absolute top-6 right-6 text-3xl text-white" @click="emitClose">&times;</button>
    <div class="flex items-center justify-between">
      <span class="text-3xl font-extrabold tracking-wider">Estatein</span>
    </div>
    <div class="h-[1px] bg-white/20 w-full mt-2" />
    <nav class="flex flex-col gap-6 mt-4 text-xl font-semibold tracking-wide">
      <NuxtLink
        v-for="(item, idx) in navItems"
        :key="idx"
        :to="item.to"
        class="transition hover:text-purple-400 hover:translate-x-1"
        :class="[item.isPrimary ? 'mt-6 bg-purple-600 rounded-xl py-3 text-center font-bold' : '']"
        @click="emitClose">
        {{ item.label }}
      </NuxtLink>
    </nav>
  </div>
</template>
