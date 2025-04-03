<script setup lang="ts">
  import type { PropertyCardProps } from '~/types';
  import HomeCard from '~/components/properties/variants/HomeCard.vue';
  import PropertiesPageCard from '~/components/properties/variants/PropertiesPageCard.vue';
  const props = defineProps<PropertyCardProps>();
</script>

<template>
  <component :is="props.variant === 'homePage' ? HomeCard : PropertiesPageCard" :item="props.item" />
</template>
