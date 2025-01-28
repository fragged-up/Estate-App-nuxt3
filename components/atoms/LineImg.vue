<script setup lang="ts">
  defineProps<{
    image?: string
    svgIcon?: string
    head: string
    containerWrapper?: string
    gappedValue?: string
    para?: string
  }>()
  // const props = defineProps({
  //   image: {
  //     type: String,
  //     requried: false,
  //   },
  //   svgIcon: {
  //     type: String,
  //     required: false,
  //   },
  //   head: String,
  //   containerWraper: {
  //     type: String,
  //     required: false,
  //     default: '',
  //   },
  //   gappedValue: {
  //     type: String,
  //     required: false,
  //     default: '',
  //   },
  //   para: {
  //     type: String,
  //     required: false,
  //   },
  // })
</script>

<template>
  <div class="flex flex-col gap-4" :class="containerWrapper">
    <div class="flex items-center gap-4" :class="gappedValue">
      <div v-if="image">
        <img :src="$loadImage(image)" class="h-[52px] w-[52px]" alt="image" >
      </div>
      <div v-if="svgIcon">
        <svg v-if="svgIcon" class="h-[52px] w-[52px]">
          <use :xlink:href="svgIcon" />
        </svg>
      </div>
      <h3 class="font-sans text-lg font-semibold text-white">{{ head }}</h3>
    </div>
    <div v-if="para" class="my-3">
      <p class="font-sans text-sm font-medium text-[#999999]">{{ para }}</p>
    </div>
  </div>
</template>

<style scoped></style>

<!-- <template>
  <div :class="props.dadContainer">

    <div class="repeated-father">
      <img :src="$loadImage(image)" class="w-[52px] h-[52px] inline-block" alt="image">
      <h3 class="font-sans font-semibold text-white text-lg ml-4 inline-block">{{ props.head }}</h3>
    </div>
    <div class="py-6">
      <p class="font-sans font-medium text-[#999999] text-sm">{{ props.para }}</p>
    </div>

  </div>
</template> -->
