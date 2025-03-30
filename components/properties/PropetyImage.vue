<script lang="ts" setup>
defineProps<{cardImage:string}>()
</script>
<template>
  <div class="container">
    <img :src="cardImage" :alt="`prop-${cardImage}`" class="rounded-xl w-full h-52 md:h-56 object-cover" >
  </div>
</template>
