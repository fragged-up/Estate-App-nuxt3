<script setup lang="ts">
  defineProps<{
    title: string
    price?: string
    boxText?: string
    addBorder?: string
    singleText?: string
  }>()
</script>

<template>
  <div class="box-cont pt-2">
    <div class="div py-2">
      <p class="title font-sans text-sm font-medium text-gl">{{ title }}</p>
    </div>
    <div class="mx-auto flex items-center gap-6 pb-4" :class="addBorder">
      <p class="price inline-flex font-sans text-xl font-semibold text-white">
        {{ price }}
      </p>
      <div
        v-if="boxText"
        class="box-text inline-flex rounded-xl border border-hg bg-mg p-4"
      >
        <p class="text font-sans text-sm font-medium text-gl">{{ boxText }}</p>
      </div>
      <div v-if="singleText" class="box-text col-span-2">
        <p class="text self-center font-sans text-xl font-semibold text-white">
          {{ singleText }}
        </p>
      </div>
    </div>
  </div>
</template>
<!-- border-b border-hg -->
<!-- grid-cols-[25%_75%] -->
<style scoped></style>
