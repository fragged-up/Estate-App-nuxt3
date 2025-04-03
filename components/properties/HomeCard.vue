<script lang="ts" setup>
  const props = defineProps<{
    id: number;
    slug: string;
    title: string;
    image: string;
    summary: string;
    bedrooms: string;
    bathrooms: string;
    location?: string;
    price: number | string;
  }>();
  const loremIpsum = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porronecessitatibus...`;
  const slugify = (text: string): string => {
    return text
      .toLowerCase() // Convert to lowercase
      .normalize('NFD') // Normalize accented characters
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
      .replace(/[^a-z0-9 ]/g, '') // Remove invalid characters
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/-+/g, '-') // Replace multiple dashes with one
      .replace(/^-|-$/g, ''); // Trim dashes from start and end
  };

  const styleNav =
    'bg-[#703BF7] cursor-pointer font-sans hover:bg-purple-500 text-white text-sm font-medium px-2 py-3 lg:px-6 rounded-xl';
</script>
<template>
  <div :id="props.id" class="card-box grid w-full max-w-[29rem] gap-y-6 rounded-xl border-2 border-[#262626] p-6">
    <PropertyImage :card-image="$loadImage(props.image)" />
    <PropertyTextBlock :card-title="props.title" :card-text="props.summary" :lorem-ipsum="loremIpsum" />
    <PropertyBadges :bed-rooms="props.bedrooms" :bath-rooms="props.bathrooms" />
    <div class="my-4 grid grid-cols-[.4fr_1fr] gap-x-2">
      <div class="text-center">
        <p class="text-start font-sans font-semibold text-[#999999]">Price</p>
        <p class="text-start font-sans font-semibold text-white">
          {{ props.price ? formatPrice(props.price) : 'There is Error With Price' }}
        </p>
      </div>
      <button
        class="bg-[#703BF7] cursor-pointer font-sans hover:bg-purple-500 text-white text-sm font-medium px-2 py-3 lg:px-6 rounded-xl text-center"
        @click="pushRoute()"
      >
        View Properties
      </button>
    </div>
  </div>
  ƒ
</template>
