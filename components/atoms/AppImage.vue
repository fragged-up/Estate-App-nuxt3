<script setup lang="ts">
  defineProps<{
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    loading?: 'lazy' | 'eager';
    placeholder?: string;
  }>();
</script>

<template>
  <NuxtImg
    :src="src"
    :alt="alt || 'Image'"
    :width="width || 600"
    :height="height || 400"
    :class="className"
    :loading="loading || 'lazy'"
    :placeholder="placeholder || 'blur'"
    format="webp"
    quality="80"
  />
</template>
