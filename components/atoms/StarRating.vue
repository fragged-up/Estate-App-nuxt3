<script setup lang="ts">
  const props = defineProps<{
    value: number;
    max?: number;
  }>();

  const maxStars = props.max ?? 5;

  const getIcon = (index: number) => {
    const starValue = index - 1;
    if (props.value >= index) return 'tabler:star-filled';
    if (props.value > starValue && props.value < index) return 'tabler:star-half-filled';
    return 'tabler:star';
  };
</script>
<template>
  <div class="flex items-center gap-1 bg-[#1a1a1a] border border-[#262626] text-[#FFE500]">
    <Icon v-for="i in maxStars" :key="i" :name="getIcon(i)" class="w-4 h-4" />
  </div>
</template>
