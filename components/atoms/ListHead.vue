<script setup>
  const props = defineProps({
    textHead: String,
  })
</script>

<template>
  <div class="flex items-center justify-between border-b border-hg bg-fgl py-4">
    <p class="font-sans text-xl font-semibold text-white laptop:text-2xl">{{ props.textHead }}</p>
    <Button :buttonStyling="'border border-hg p-4 bg-mg text-white rounded-xl'" :buttonTxt="'Learn More'" />
  </div>
</template>

<style scoped></style>
