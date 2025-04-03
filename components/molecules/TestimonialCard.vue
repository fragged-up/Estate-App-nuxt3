<script setup lang="ts">
  import type { Testimonial } from '~/constants/types';
  import StarRating from '~/components/atoms/StarRating.vue';

  const props = defineProps<{
    testimonial: Testimonial;
  }>();
</script>

<template>
  <div class="row-auto grid w-full gap-y-6 rounded-xl border-2 border-[#262626] p-4">
    <div class="my-2 ml-3 flex gap-4">
      <StarRating :value="props.testimonial.stars" />
    </div>

    <div class="text-box">
      <h2 class="font-semibold text-white">
        {{ props.testimonial.headline }}
        <br >
        <br >
      </h2>
      <p class="text-sm text-white">
        {{ props.testimonial.review }}
      </p>
    </div>

    <div class="face-box flex gap-x-4 p-4">
      <div class="face-img-cont">
        <img :src="$loadImage(props.testimonial.avatarUrl)" alt="avatar" >
      </div>

      <div class="face-text">
        <p class="face-name text-white">{{ props.testimonial.fullName }}</p>
        <p class="face-review text-[#999999]">{{ props.testimonial.location }}</p>
      </div>
    </div>
  </div>
</template>
