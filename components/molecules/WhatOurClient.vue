<script setup>
  const { viewAllTestimonials } = whichButton()
  const viewAllTest = viewAllTestimonials.value
</script>

<template>
  <div>
    <div class="what-our-clients-say">
      <img :src="$loadImage('/icons/stars.svg')" alt="stars" class="stars" />
    </div>

    <div class="container py-4">
      <h1 class="text-4xl text-white">What Our Clients Say</h1>
      <p class="font-urbanist py-4 text-sm font-medium leading-5 text-[#999999]">
        Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
      </p>
    </div>

    <ViewButton :buttonText="viewAllTest" :totalPagesNumber="'10'" />
  </div>
</template>

<style></style>
