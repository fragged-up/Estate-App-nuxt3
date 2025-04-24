<script setup lang="ts">
  defineProps<{
    labelLink?:string;
    goLeft: () => void;
    goRight: () => void;
  }>();
  const currentPage = defineModel<any>('currentPage', { required: true });
  const totalPages = defineModel<any>('totalPages', { required: true });
</script>

<template>
  <div class="w-full max-w-full mx-auto px-4">
    <div class="my-8 grid grid-flow-col justify-around gap-2 border-t-2 border-t-[#262626] pt-4 laptop:hidden">
      <NuxtLink
        v-if="labelLink"
        class="pad-fix:text-sm border-1 col-span-1 rounded-lg border-[#262626] bg-[#1A1A1A] px-8 py-4 text-center text-white"
        to="/properties">

        {{ labelLink }}
      </NuxtLink>

      <!-- Mobile Variant -->
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
          :disabled="currentPage >= totalPages"
          @click="goRight"
        />
      </div>
    </div>

    <!-- Desktop Variant -->
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
          :disabled="currentPage >= totalPages"
          @click="goRight"
        />
      </div>
    </div>
  </div>
</template>
