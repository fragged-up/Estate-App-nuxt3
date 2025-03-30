<script setup lang="ts">
  import { usePaginationStore } from '~/stores/pagination';

  const pagination = usePaginationStore();
  const itemsPerPage = 1;

  const { data: properties } = await useFetch('/api/test'); 

  const paginatedProperties = computed(() => {
    if (!properties.value) return [];
    const start = (pagination.currentPage - 1) * itemsPerPage;
    return properties.value.slice(start, start + itemsPerPage);
  });

  watch(
    properties,
    (val: any) => {
      if (val) {
        pagination.setTotal(Math.ceil(val.length / itemsPerPage));
      }
    },
    { immediate: true },
  );
</script>

<template>
  <div class="mt-10 space-y-8">
    <PaginationWrapper :items="properties">
      <template #default="{ items }">
        <FeaturedPropertyCard
          v-for="property in items"
          :key="property.id"
          :image-key="property.image"
          :title="property.title"
          :description="property.description"
          :price="property.price"
          :location-text="property.locationText"
        />
      </template>
    </PaginationWrapper>
  </div>
</template>
