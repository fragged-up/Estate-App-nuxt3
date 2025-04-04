<script setup lang="ts">
  import type { Property } from '~/types';
  import { getSlugId } from '~/utils';
import PropertyFeatures from '../PropertyFeatures.vue';

  const props = defineProps<{
    item: Property;
  }>();
</script>

<template>
  <div :id="`property-${props.item.slug}-${props.item.id}`" class="card-box">

    <PropertyImage :card-image="$loadImage(props.item.image)" />
    <PropertyHighlight :highlight="props.item.highlight" />
    <PropertySummary :title="props.item.title" :summary="props.item.summary" :read-more="props.item.readMore" />
    <PropertyPrice :price="props.item.price" />
    <NuxtLink
      :to="`/properties/${getSlugId(props.item.slug, props.item.id)}`"
      class="prp-cta text-sm max-h-11 -text-center px-2 py-3 lg:px-6 flex justify-center items-center"
    >
      View Property
    </NuxtLink>
  </div>
</template>
