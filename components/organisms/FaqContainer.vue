<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core';

  const props = defineProps<{
    buttonText?: string;
    items: any[];
  }>();

  const { width } = useWindowSize();
  const emit = defineEmits(['page-changed']);
  const currentPage = ref(1);
  const itemsPerPage = computed(() => {
    if (width.value >= 1440) return 3;
    if (width.value >= 1024) return 3;
    if (width.value >= 640) return 2;
    return 1;
  });
  const totalPages = computed(() => {
    return Math.ceil(props.items.length / itemsPerPage.value);
  });

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return props.items.slice(start, start + itemsPerPage.value);
  });

  const goLeft = () => {
    if (currentPage.value > 1) currentPage.value--;
  };

  const goRight = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
  };
</script>

<template>
  <div class="my-8 grid grid-flow-col justify-around gap-2 border-t-2 border-t-[#262626] pt-4 laptop:hidden">
    <NuxtLink v-if="buttonText" to="/properties">
      <button
        class="pad-fix:text-sm border-1 col-span-1 rounded-lg border-[#262626] bg-[#1A1A1A] px-8 py-4 text-center text-white"
      >
        {{ buttonText }}
      </button>
    </NuxtLink>

    <div class="col-span-2 flex items-center justify-around">
      <ArrowButton
        icon="/left-navigator.svg"
        :alt="'left-arrow'"
        direction="left"
        :disabled="currentPage <= 1"
        @click="goLeft"
      />

      <p class="pad-fix:whitespace-nowrap space-x-1 p-2">
        <span class="text-white">{{ currentPage }}</span>
        <span class="text-[#808080]">of</span>
        <span class="text-[#808080]">{{ totalPages }}</span>
      </p>

      <ArrowButton
        icon="/right-navigator.svg"
        :alt="'right-arrow'"
        direction="right"
        :disabled="currentPage>=totalPages"
        @click="goRight"
      />
    </div>
  </div>

  <div
    class="laptop-box items-center-2 mx-auto my-8 hidden justify-between border-t-2 border-t-[#262626] pt-4 laptop:flex"
  >
    <div class="box-left space-x-2">
      <span class="text-white">{{ currentPage }}</span>
      <span class="text-[#808080]">of</span>
      <span class="text-[#808080]">{{ totalPages }}</span>
    </div>
    <div class="inline-flex justify-between items-start gap-2.5">
      <ArrowButton
        icon="/left-navigator.svg"
        :alt="'left-arrow'"
        direction="left"
        :disabled="currentPage <= 1"
        @click="goLeft"
      />
      <ArrowButton
        icon="/right-navigator.svg"
        :alt="'right-arrow'"
        direction="right"
        :disabled="currentPage>=totalPages"
        @click="goRight"
      />
    </div>
  </div>
</template>
