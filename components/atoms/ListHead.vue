<script setup lang="ts">
  defineProps<{
    textHead: string
  }>()
</script>

<template>
  <div class="flex items-center justify-between border-b border-hg bg-fgl py-4">
    <p class="font-sans text-xl font-semibold text-white laptop:text-2xl">
      {{ textHead }}
    </p>
    <NuxtLink to="/aboutUs">
      <Button
        :btn-style="'border border-hg p-4 bg-mg text-white rounded-xl'"
        :btn-text="'Learn More'" />
    </NuxtLink>
  </div>
</template>

