<script setup lang="ts">
 import { useWindowSize } from '@vueuse/core';
import HeroMobile from '~/components/organisms/HeroMobile.vue'
import HeroDesktop from '~/components/organisms/HeroDesktop.vue'
const { width } = useWindowSize()
const isDesktop = computed(() => width.value >=1440)
</script>

<template>
 <nav>
    <component :is="isDesktop ? HeroDesktop : HeroMobile" />
 </nav>
</template>
