<script setup lang="ts">
 import { useWindowSize } from '@vueuse/core';
import HeroMobile from './HeroMobile.vue'
import HeroDesktop from './HeroDesktop.vue'
const { width } = useWindowSize()
const isDesktop = computed(() => width.value >=1440) 
</script>

<template>
 <nav>
    <component :is="isDesktop ? HeroDesktop : HeroMobile" />
 </nav>
</template>
