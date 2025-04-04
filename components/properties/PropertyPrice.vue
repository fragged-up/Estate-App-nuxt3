<script lang="ts" setup>
  const props = defineProps<{
    price: number;
  }>();
  const formattedPrice = props.price ? formatPrice(props.price) : 'There is Error With Price';
</script>
<template>
  <div class="grid grid-cols-[.4fr_1fr] gap-x-2">
    <div class="text-center">
      <p class="text-start font-sans font-semibold text-[#999999]">Price</p>
      <p class="text-start font-sans font-semibold text-white">
        {{ formattedPrice }}
      </p>
    </div>
  </div>
</template>
