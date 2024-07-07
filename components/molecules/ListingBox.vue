<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: false,
    },
    boxText: {
      type: String,
      required: false,
    },
    addBorder: {
      type: String,
      required: false,
      default: '',
    },
    singleText: {
      type: String,
      required: false,
    },
  })
</script>

<template>
  <div class="box-cont pt-2">
    <div class="div py-2">
      <p class="title font-sans text-sm font-medium text-gl">{{ props.title }}</p>
    </div>
    <div class="mx-auto flex items-center gap-6 pb-4" :class="props.addBorder">
      <p class="price inline-flex font-sans text-xl font-semibold text-white">{{ props.price }}</p>
      <div v-if="props.boxText" class="box-text inline-flex rounded-xl border border-hg bg-mg p-4">
        <p class="text font-sans text-sm font-medium text-gl">{{ props.boxText }}</p>
      </div>
      <div v-if="props.singleText" class="box-text col-span-2">
        <p class="text self-center font-sans text-xl font-semibold text-white">{{ props.singleText }}</p>
      </div>
    </div>
  </div>
</template>
<!-- border-b border-hg -->
<!-- grid-cols-[25%_75%] -->
<style scoped></style>
