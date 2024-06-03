<script setup>
import RepeatedBlock from '../molecules/RepeatedBlock.vue';
const h1 = 'Trust';
const h2 = 'Excellence';
const h3 = 'Client-Centric';
const h4 = 'Our Commitment';

const p1 = 'Trust is the cornerstone of every successful real estate transaction.';
const p2 = 'We set the bar high for ourselves. From the properties we list to the services we provide.';
const p3 = 'Your dreams and needs are at the center of our universe. We listen, understand.';
const p4 = 'We are dedicated to providing you with the highest level of service, professionalism';
</script>

<template>
  <div class="grid grid-rows-4 gap-y-4 shadow-frame p-6 rounded-xl">

    <div class="">
      <RepeatedBlock :image="'/assets/icons/TrustIcon.svg'" :head="h1" :para="p1" />
    </div>

    <div class="]">
      <RepeatedBlock :image="'/assets/icons/ExcellenceIcon.svg'" :head="h2" :para="p2" />
    </div>

    <div class="">
      <RepeatedBlock :image="'/assets/icons/CentricIcon.svg'" :head="h3" :para="p3" />
    </div>

    <div class="">
      <RepeatedBlock :image="'/assets/icons/CommitIcon.svg'" :head="h4" :para="p4" />
    </div>

  </div>
</template>

<style scoped>
.shadow-frame {
  box-shadow: 1px -1px 18px 1px #262626;
}
</style>