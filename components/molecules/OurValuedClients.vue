<script setup>
// import Button from '@/components/atoms/Button.vue';

</script>

<template>
  <div class="p-6 border-2 border-[#262626] rounded-xl shadow-frame grid gap-y-6">

    <div class="py-5">
      <p class="font-sans font-medium text-sm text-[#999999]"> Since 2019 </p>
      <h2 class="laptop:hidden py-5 font-sans font-semibold text-xl text-white"> ABC Corporation </h2>
      <div class="hidden laptop:flex justify-between items-center">
        <h2 class="py-5 font-sans font-semibold text-xl text-white"> ABC Corporation </h2>
        <Button :class="'bg-mg py-4 px-8 rounded-xl border-2 border-hg text-white font-sans font-medium text-sm'" :buttonTxt="'View Website'" />
      </div>
      <div class="laptop:hidden p-4 bg-mg text-center border border-[#262626] rounded-xl">
        <Button :class="'text-white font-sans font-medium text-sm'" :buttonTxt="'View Website'" />
      </div>
    </div>


    <div class="grid grid-cols-2">
      <div class="cols-span-1 px-3">
        <div class="row-inside flex gap-x-4">
          <img :src="$loadImage('/icons/DomainVec.svg')" alt="DomainVec">
          <p class="font-sans font-medium text-xs text-[#999999]">Domain</p>
        </div>
        <h3 class="font-sans font-medium text-sm text-white">Commercial Real Estate</h3>
      </div>
      <div class="cols-span-2 border-l-2 border-[#999999] px-3">
        <div class="row-inside">
          <img :src="$loadImage('/icons/BlitzVec.svg')" alt="BlitzVec">
          <p class="font-sans font-medium text-xs text-[#999999]">Category</p>
        </div>
        <h3 class="font-sans font-medium text-sm text-white">Luxury Home Development</h3>
      </div>
    </div>

    <div class="what-they-said p-6 border-2 border-[#262626] rounded-xl">
      <h3 class="font-sans font-medium text-sm text-[#999999]">
        What They Said 🤗
      </h3>
      <p class="py-5 font-sans font-medium text-sm text-white">
        Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly
        understand our business needs.
      </p>
    </div>

  </div>
  <!-- Arrows Continer -->
  <!-- <div class="flex justify-between items-center mb-10">
    <button class="arrows-bg text-[#808080]">
      &leftarrow;
    </button>
    pad-fix screen max-width 376px  deleted
    <p class="pad-fix:whitespace-nowrap p-2">
      <span class="text-white">{{ pagesNumber="01" }}</span>
      <span class="text-[#808080]"> of </span>
      <span class="text-[#808080]">{{ totalPagesNumber="10" }}</span>
    </p>
    <button class="arrows-bg text-white">
      &rightarrow;
    </button>
  </div> -->

</template>

<style scoped>
.shadow-frame {
  box-shadow: 1px -1px 18px 1px #262626;
}

.arrows-bg {
  background-color: #1A1A1A;
  border: 2px solid #262626;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  text-align: center;
}

</style>