<script setup>
  const blockContent = defineProps({
    headerText: String,
    paraText: String,
    contStyle: {
      type: String,
      required: false,
      default: '',
    },
    subContStyle: {
      type: String,
      required: false,
    },
    headerStyle: {
      type: String,
      required: false,
      default: '',
    },
    paraStyle: {
      type: String,
      required: false,
    },
    deskHeader: {
      type: Boolean,
      required: false,
      default: false,
    },
    override: {
      type: Boolean,
      requried: false,
      default: null,
    },
  })
</script>

<template>
  <div class="p4 my-6 w-full">
    <!-- from 1440px make hook to display viewButton wrap it in container of inline-flex width 
                                    width 155px and height 49px  -->

    <div :class="`${blockContent.contStyle} top-cont mx-auto w-11/12`">
      <div class="stars-cont">
        <img :src="$loadImage('/icons/stars.svg')" alt="stars" class="stars" />
      </div>

      <div :class="`${blockContent.subContStyle} mx-auto my-4 w-11/12 py-4`">
        <h1 :class="`${blockContent.headerStyle} font-sans text-3xl font-semibold text-white`">
          {{ headerText }}
        </h1>

        <div v-if="!blockContent.deskHeader" class="deskBlockCnt grid-auto-cols justify-between">
          <p :class="`${blockContent.paraStyle} font-urbanist py-4 text-sm font-medium leading-5 text-[#999999]`">
            {{ paraText }}
          </p>
          <!-- <Button
            :class="`pad-fix:text-sm bg-[#1A1A1A] border-1 border-[#262626] text-center col-span-1 py-4 px-8 text-white rounded-lg self-end`"
            :buttonTxt="'View All Properties'"
          /> -->
        </div>

        <p v-if="blockContent.deskHeader && blockContent.override" :class="`${blockContent.paraStyle} font-urbanist py-4 text-sm font-medium leading-5 text-[#999999]`">
          {{ paraText }}
        </p>

        <slot v-if="$slots.top" name="top"></slot>
      </div>
    </div>

    <div class="p4 w-full">
      <slot></slot>
    </div>

    <!-- inner Card need in the styling overflow-x auto for mobile  -->
    <!-- from 1440px wrap it in container & to display additional 2 FeaturedProperties components with different props values -->

    <!-- from 1440px make hook to display none this button   -->
    <!-- <viewButton :buttonText="viewAP" /> -->
  </div>
</template>

<style></style>
