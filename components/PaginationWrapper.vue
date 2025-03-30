<script setup lang="ts">
  import { usePaginationStore } from '~/stores/pagination';
  import { useWindowSize } from '@vueuse/core';

  const pagination = usePaginationStore();
  const { width } = useWindowSize();

  const props = defineProps<{ items: any[] }>();

  const itemsPerPage = computed(() => {
    if (width.value >= 1440) return 3;
    if (width.value >= 1024) return 3;
    if (width.value >= 640) return 2;
    return 1;
  });

  const paginatedItems = computed(() => {
    const start = (pagination.currentPage - 1) * itemsPerPage.value;
    return props.items.slice(start, start + itemsPerPage.value);
  });

  watch( () => props.items,
  (val: any) => {
    pagination.setTotal(Math.ceil(val.length / itemsPerPage.value));
    }, { immediate: true },);
    
</script>

<template>
  <div class="space-y-8 w-full">
    <div class="w-full max-w-[1320px] mx-auto px-4">
      <div :class="[ 'gap-[20px]',  width >= 1024 ? 'grid grid-cols-3' : width >= 640 ? 'grid grid-cols-2' : 'grid grid-cols-1', ]">
        <slot :items="paginatedItems" />
      </div>
    </div>

    <div class="w-full max-w-[1320px] mx-auto px-4">
      <div
        class="flex items-center justify-between border-t border-[#2A2A2A] pt-6"
        :class="width < 1024 ? 'justify-center gap-8' : 'justify-between'">
        <PaginationButton direction="left" />
        <PaginationInfo :current-page="pagination.currentPage" :total-pages="pagination.totalPages" />
        <PaginationButton direction="right" />
      </div>
    </div>
  </div>
</template>
