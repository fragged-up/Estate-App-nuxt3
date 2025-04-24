<script setup lang="ts">
  import { formatSelectedProperty } from '~/utils';
  const props = defineProps<{
    slugHead: {
      slug: string;
      location: string;
      price: number;
    };
  }>();

  const formatAssetName = (item: string) => item.replace(/-/g, ' ');

</script>

<template>
  <div class="flex flex-col gap-2.5">
    <div>
      <h1 class="font-sans text-xl font-semibold text-white">{{ formatAssetName(props.slugHead.slug) }}</h1>
    </div>
    <div class="grid grid-flow-col">
      <div class="flex justify-between items-center">
        <IconBadge
          :svg-icon="'tabler:map-pin-filled'"
          :head="props.slugHead.location"
          :container-wrapper="'border border-hg bg-fgl rounded-xl p-1 md:p-3 max-w-fit'"
          :gapped-value="'gap-1'"
        />
        <div class="flex md:flex-col gap-2 md:gap-3 items-center justify-center">
          <p class="font-sans text-sm md:text-lg font-medium text-gl">Price</p>
          <p class="font-sans text-base md:text-xl font-semibold text-white">{{ `$ ${props.slugHead.price}` }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
