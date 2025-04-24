<script setup lang="ts">
  defineProps<{
    labelLink?: string;
    linkPath?:string;
    goLeft: () => void;
    goRight: () => void;
  }>();
  const currentPage = defineModel<any>('currentPage', { required: true });
  const totalPages = defineModel<any>('totalPages', { required: true });
</script>

<template>
  <div class="w-full max-w-full mx-auto px-4">
    <!-- Mobile Variant -->
    <div class="my-8 grid grid-flow-col justify-between gap-2 border-t-2 border-t-[#262626] pt-4 laptop:hidden">
      <NuxtLink
        v-if="labelLink"
        class="pad-fix:text-sm border-1 flex rounded-lg border-[#262626] bg-[#1A1A1A] px-4 py-4 text-center text-white"
        :to="`${linkPath}`"
      >
        {{ labelLink }}
      </NuxtLink>

      <div class="w-full flex items-center justify-between gap-3">
        <ArrowButton
          icon="/left-navigator.svg"
          :alt="'left-arrow'"
          :size="14"
          direction="left"
          :disabled="currentPage <= 1"
          @click="goLeft"
        />
        <CardPaginationStatus
          :current="currentPage"
          :total="totalPages"
          variant="flex gap-1"
        />

        <ArrowButton
          icon="/right-navigator.svg"
          :alt="'right-arrow'"
          :size="14"
          direction="right"
          :disabled="currentPage >= totalPages"
          @click="goRight"
        />
      </div>
    </div>

    <!-- Desktop Variant -->
    <div class="laptop-box items-center-2 mx-auto my-8 hidden justify-between border-t-2 border-t-[#262626] pt-4 laptop:flex">
      <div class="box-left space-x-2">
        <CardPaginationStatus :current="currentPage" :total="totalPages" variant="flex gap-3" />
      </div>

      <div class="inline-flex justify-between items-start gap-2.5">
        <ArrowButton
          icon="/left-navigator.svg"
          :alt="'left-arrow'"
          direction="left"
          :size="24"
          :disabled="currentPage <= 1"
          @click="goLeft"
        />
        <ArrowButton
          icon="/right-navigator.svg"
          :alt="'right-arrow'"
          direction="right"
          :disabled="currentPage >= totalPages"
          :size="24"
          @click="goRight"
        />
      </div>
    </div>
  </div>
</template>
