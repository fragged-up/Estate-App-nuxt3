<script lang="ts" setup>
  import { formatPrice }from "~/utils"

  const props = defineProps<{ price: number; }>();
  const formattedPrice = props.price ? formatPrice(props.price) : 'There is Error With Price';

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <p class="text-start font-sans font-semibold text-[#999999] text-sm md:text-base">Price</p>
    <p class="text-start font-sans font-semibold text-white text-sm md:text-base">{{ `$ ${props.price}` }}</p>
  </div>
</template>
