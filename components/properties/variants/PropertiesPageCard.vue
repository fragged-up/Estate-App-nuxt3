<script setup lang="ts">
  import type { Property } from '~/types';
  import { getSlugId } from '~/utils';

  const props = defineProps<{
    item: Property;
  }>();
</script>

<template>
  <div :id="`property-${props.item.slug}-${props.item.id}`" class="card-box">
    <PropertyImage :card-image="$loadImage(props.item.image)" />
    <PropertyHighlight :highlight="props.item.highlight" />
    <PropertySummary :title="props.item.title" :summary="props.item.summary" :read-more="props.item.readMore" />
    <div class="flex justify-between items-center">
      <PropertyPrice :price="props.item.price" />
      <NuxtLink
       class="prp-cta text-sm max-h-11 text-center px-2 py-3 lg:px-6 flex justify-center items-center"
        :to="`/properties/${getSlugId(props.item.slug, props.item.id)}`">
        View Property
      </NuxtLink>
    </div>
  </div>
</template>
