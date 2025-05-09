<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core';
  const { width } = useWindowSize();

  const props = defineProps<{
    title?: string | undefined;
    description?: string | undefined;
    card: any[];
    label?: string;
    path?: string;
    removeNavigator?:boolean
  }>();

  const currentPage = ref(1);

  const itemsPerPage = computed(() => {
    if (width.value >= 1440) return 3;
    if (width.value >= 1024) return 3;
    if (width.value >= 640) return 2;
    return 1;
  });

  const totalPages = computed(() => {
    return Math.ceil(props.card.length / itemsPerPage.value);
  });

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return props.card.slice(start, start + itemsPerPage.value);
  });

  const goLeft = () => {
    if (currentPage.value > 1) currentPage.value--;
  };

  const goRight = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
  };
  const shouldShowPaginator = ref(true)
</script>

<template>
  <div class="space-y-8 w-full touch-manipulation">
    <CardHeader :title="props.title || 'hey'" :description="props.description || 'bye'" />
    <div class="w-full max-w-full mx-auto px-4">
      <div
        :class="[
          'touch-manipulation gap-[20px]',
          width >= 1024 ? 'grid grid-cols-3' : width >= 640 ? 'grid grid-cols-2' : 'grid grid-cols-1',
        ]"
      >
        <slot :card="paginatedItems" />
      </div>
    </div>
    <CardPaginator
      v-if="!props.removeNavigator"
      v-model:current-page="currentPage"
      v-model:total-pages="totalPages"
      :label-link="label"
      :link-path="path"
      :go-left="goLeft"
      :go-right="goRight"
    />
  </div>
</template>
