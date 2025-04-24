<!-- <script lang="ts" setup>
  const props = defineProps<{
    title?: string;
    description?: string;
    card: any[];
  }>();
</script>
<template>
  <div class="space-y-8 w-full touch-manipulation">
    <FaqsHeader :title="props.title" :description="props.description" />
    <div class="w-full max-w-full mx-auto px-4">
      <div :class="['gap-[20px]',width >= 1024 ? 'grid grid-cols-3' : width >= 640 ? 'grid grid-cols-2' : 'grid grid-cols-1',]">
        <slot :card="paginatedItems" />
      </div>
    </div>
    <div class="w-full max-w-full mx-auto px-4">
      <FaqContainer :button-text="'View All Properties'" />
    </div>
  </div>
</template> -->

Ï
<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core';
  import CardHeader from './CardHeader.vue';
  import CardNavigator from './CardNavigator.vue';

  const { width } = useWindowSize();

  const props = defineProps<{
    title?: string;
    description?: string;
    card: any[];
    buttonText?: string;
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
</script>
<!--   mx-4   40 from text section to block Gap 30 from section to buttons  -->

<template>
  <div class="space-y-8 w-full touch-manipulation">
    <CardHeader :title="props.title || 'hey'" :description="props.description || 'bye'" />
    <div class="w-full max-w-full mx-auto px-4">
      <div
        :class="[
          'gap-[20px]',
          width >= 1024 ? 'grid grid-cols-3' : width >= 640 ? 'grid grid-cols-2' : 'grid grid-cols-1',
        ]"
      >
        <slot :card="paginatedItems" />
      </div>
    </div>
    <CardNavigator
      v-model:current-page="currentPage"
      v-model:total-pages="totalPages"
      :button-text="buttonText"
      :go-left="goLeft"
      :go-right="goRight"
    />
  </div>
</template>
