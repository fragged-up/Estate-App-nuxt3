<script setup>
  // import Button from '@/components/atoms/Button.vue';
</script>

<template>
  <div class="shadow-frame grid gap-y-6 rounded-xl border-2 border-[#262626] p-6">
    <div class="py-5">
      <p class="font-sans text-sm font-medium text-[#999999]">Since 2019</p>
      <h2 class="py-5 font-sans text-xl font-semibold text-white laptop:hidden">ABC Corporation</h2>
      <div class="hidden items-center justify-between laptop:flex">
        <h2 class="py-5 font-sans text-xl font-semibold text-white">ABC Corporation</h2>
        <Button :class="'rounded-xl border-2 border-hg bg-mg px-8 py-4 font-sans text-sm font-medium text-white'" :buttonTxt="'View Website'" />
      </div>
      <div class="rounded-xl border border-[#262626] bg-mg p-4 text-center laptop:hidden">
        <Button :class="'font-sans text-sm font-medium text-white'" :buttonTxt="'View Website'" />
      </div>
    </div>

    <div class="grid grid-cols-2">
      <div class="cols-span-1 px-3">
        <div class="row-inside flex gap-x-4">
          <img :src="$loadImage('/icons/DomainVec.svg')" alt="DomainVec" />
          <p class="font-sans text-xs font-medium text-[#999999]">Domain</p>
        </div>
        <h3 class="font-sans text-sm font-medium text-white">Commercial Real Estate</h3>
      </div>
      <div class="cols-span-2 border-l-2 border-[#999999] px-3">
        <div class="row-inside">
          <img :src="$loadImage('/icons/BlitzVec.svg')" alt="BlitzVec" />
          <p class="font-sans text-xs font-medium text-[#999999]">Category</p>
        </div>
        <h3 class="font-sans text-sm font-medium text-white">Luxury Home Development</h3>
      </div>
    </div>

    <div class="what-they-said rounded-xl border-2 border-[#262626] p-6">
      <h3 class="font-sans text-sm font-medium text-[#999999]">What They Said 🤗</h3>
      <p class="py-5 font-sans text-sm font-medium text-white">
        Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.
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
    background-color: #1a1a1a;
    border: 2px solid #262626;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    text-align: center;
  }
</style>
