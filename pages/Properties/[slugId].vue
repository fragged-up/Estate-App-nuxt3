<script setup lang="ts">
  import { getPropertyById } from '~/server/utils/';
  import { useRoute } from '#imports';
  import { extractIdFromSlug } from '~/utils/formatters';
  useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
  ],
})

  const route = useRoute();
  const slugId = route.params.slugId as string;
  const id = extractIdFromSlug(slugId);
  const propertyItemId = getPropertyById(id);

  const activeTab = ref(0);
  const activeImage = ref(0);
  const handleTabChange = (newTab: number) => (activeTab.value = newTab);
  const handleImageChange = (newImage: number) => (activeImage.value = newImage);
</script>

<template>
  <div class="main touch-manipulation">
    <header class="w-[90%] flex flex-col gap-5 mx-auto my-14">
      <SlugCardHeader :slug-head="propertyItemId" />
      <SlugCard
        :images="propertyItemId.imageGallery"
        :active-image="activeImage"
        @update:active-tab="handleTabChange"
        @update:active-image="handleImageChange"
      />
    </header>
    <main class="w-full">
      <SlugContent :slug-props="propertyItemId" />
    </main>
  </div>
</template>
