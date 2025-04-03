<script setup lang="ts">
  import type { Property } from '~/types';
  import { getSlugId, loremIpsum } from '~/utils';

  const props = defineProps<{
    item: Property;
  }>();
</script>

<template>
  <div :id="`property-${props.item.slug}-${props.item.id}`" class="card-box">
    <PropertyImage :card-image="$loadImage(props.item.image)" />
    <PropertySummary :card-title="props.item.title" :card-text="props.item.summary" :lorem-ipsum="loremIpsum" />
    <PropertyPrice :price="props.item.price" />
    <NuxtLink
      :to="`/properties/${getSlugId(props.item.slug, props.item.id)}`"
      class="prp-cta text-sm px-2 py-3 lg:px-6">
      View Property
    </NuxtLink>
  </div>
</template>
