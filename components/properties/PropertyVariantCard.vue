<script setup lang="ts">
  defineProps<{
    variant?: 'home' | 'properties';
    propertyName?: string | number;
    propertyLocation?: string;
    cardImage: string;
    cardTitle: string;
    cardText?: string;
    bedRooms?: number;
    bathRooms?: number;
    cardPrice?: string | number;
    propertyImages?: string[];
    description?: string;
    squareFeet?: string;
    tagline?: string;
  }>();

  const loremIpsum = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porronecessitatibus...`;
</script>

<template>
  <div class="card-box grid w-full max-w-[29rem] gap-y-6 rounded-xl border-2 border-[#262626] p-6">
    <PropetyImage :card-image="$loadImage(cardImage)" />
    <!-- Properties Version -->
    <template v-if="variant === 'properties'">
      <PropertyTagLine :tag="tagline" />
      <PropertyTextBlock :card-title="cardTitle" :card-text="cardText" :lorem-ipsum="loremIpsum" />
    </template>
    <!-- HomePage Version -->
    <template v-else>
      <PropertyTextBlock :card-title="cardTitle" :card-text="cardText" :lorem-ipsum="loremIpsum" />
      <PropertyBadges :bed-rooms="bedRooms" :bath-rooms="bathRooms" />
    </template>
    <!-- Footer Constitancy -->
    <PropertyCardFooter :card-price="cardPrice" />
  </div>
</template>
