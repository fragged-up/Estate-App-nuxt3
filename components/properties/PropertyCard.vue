<script setup lang="ts">
  import { NuxtLink } from '#components';
  type ImageGallery = { path: string }[];
  const props = defineProps<{
    id: number | string;
    slug: string;
    image: string;
    title: string;
    summary: string;
    price: number;
    imageGallery?: ImageGallery;
    location: string;
    tagline: string;
  }>();
  const { id } = props;
  const loremIpsum = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porronecessitatibus...`;
</script>

<template>
  <div :id="props.id" class="card-box grid w-full max-w-[29rem] gap-y-6 rounded-xl border-2 border-[#262626] p-6">
    <PropertyImage :card-image="$loadImage(props.image)" />
    <PropertyTagLine :tag="props.tagline" />
    <PropertyTextBlock :card-title="props.title" :card-text="props.summary" :lorem-ipsum="loremIpsum" />
    <div class="my-4 grid grid-cols-[.4fr_1fr] gap-x-2">
      <div class="text-center">
        <p class="text-start font-sans font-semibold text-[#999999]">Price</p>
        <p class="text-start font-sans font-semibold text-white">
          {{ props.price ? formatPrice(props.price) : 'There is Error With Price' }}
        </p>
      </div>
      <NuxtLink
        class="bg-[#703BF7] cursor-pointer font-sans hover:bg-purple-500 text-white text-sm font-medium px-2 py-3 lg:px-6 rounded-xl text-center"
        :to="`/properties/${id}`"
      >
        View Properties
      </NuxtLink>
    </div>
  </div>
</template>
