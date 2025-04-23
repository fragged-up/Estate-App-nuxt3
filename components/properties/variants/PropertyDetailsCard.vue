<script setup lang="ts">
  import type { PropertyDetailsProps } from '~/types';
  const props = defineProps<{
    propertyId:PropertyDetailsProps
  }>();

  const emit = defineEmits<{ updateIndex: [index: number] }>();
  const currentIndex = ref<number>(0);

  const changeIndex = (delta: number | string) => {
    const newIndex = currentIndex.value + delta;
    emit('updateIndex', newIndex);
  };
  const current = ref(0);
  const total = 5;
</script>

<template>
  <div class="content-title mx-auto my-4 w-[90%]">
    <h1 class="font-sans text-xl font-semibold text-white"> {{ props.propertyId.slug }} </h1>

    <div class="mx-auto grid grid-flow-col">
      <div class="flex justify-between items-center my-5">
        <IconBadge
          :svg-icon="'tabler:map-pin-filled'"
          :container-wrapper="'border border-hg bg-fgl rounded-xl p-1 md:p-3 max-w-fit'"
          :gapped-value="'gap-1'"
          :head="props.propertyId.location"
        />
        <div class="flex md:flex-col gap-2 md:gap-3 items-center justify-center">
        <p class="font-sans text-sm md:text-lg font-medium text-gl">Price</p>
        <p class="font-sans text-base md:text-xl font-semibold text-white">${{ props.propertyId.price }}</p>
      </div>
      </div>

    </div>
  </div>

  <!-- max-w-[414px] deleted for now  -->
  <div class="card-id-cont grid-flow-rows mx-auto my-6 grid max-w-[25rem] auto-rows-max items-center justify-center rounded-xl bg-mg px-4 py-8 laptop:w-[91.66%] laptop:max-w-[100%]">
    <!-- MOBILE BOX  -->
    <div class="mobile-box laptop:hidden">
      <div class="img-cont mx-auto w-auto min-w-full rounded-xl">
        <img
          :src="$loadImage(props.propertyId.image)"
          alt="property-image"
          class="card-img h-full min-h-[15.5rem] w-full min-w-[20rem]" >

      </div>
      <div class="gallery-cont min-w-full">
        <imageGallery :images="props.propertyId.imageGallery" :active-image="currentIndex" @update-active-index="currentIndex" />
      </div>

      <div class="navigator-cont">
        <imageNavigator @update-index="changeIndex" />
      </div>
    </div>

    <!-- END MOBILEBOX  -->

    <!-- laptop BOX  -->
    <div class="laptop-box mx-auto hidden bg-hg laptop:block">
      <div class="mx-auto">
        <imageGallery :images="props.propertyId.imageGallery!" :active-index="currentIndex" @update-active-index="changeIndex" />
      </div>
      <div class="images-cnt mx-auto flex h-auto w-full items-center gap-4 p-4">
        <img :src="$loadImage('/images/leftSeaSide.svg')" style="width: 50%" class="responsive-img" alt="mini-image" >
        <img :src="$loadImage('/images/rightSeaSide.svg')" style="width: 50%" class="responsive-img" alt="mini-image" >
      </div>
      <div class="navigator-cont py-8">
        <NavigatorDots :total="total" :current="current" @update:current="(val: any) => (current = val)" />

        <!-- <imageNavigator @update-index="changeIndex" /> -->
      </div>
    </div>
    <!-- END LAPTOPBOX  -->
  </div>
</template>

<style scoped>
/* switch to tailwind here : bg-blend-color bg-black */
  .bg-filter {
    background-color: black;
    background-blend-mode: color;
  }
</style>

<!--
<style scoped>
  .bg-filter {
    background-color: black;
    background-blend-mode: color;
    /* background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
    /* backdrop-filter: blur(55px); */
    /* Adjust the alpha value for opacity */
  }
</style>
 -->
