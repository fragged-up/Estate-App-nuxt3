<script setup>
  const props = defineProps({
    buttonText: {
      type: String,
      required: false,
    },
    pagesNumber: {
      type: String,
      default: '01',
    },
    totalPagesNumber: {
      type: String,
      default: '60',
    },
    mobileView: {
      type: String,
      required: false,
      default: '',
    },
    deskView: {
      type: String,
      required: false,
      default: 'hidden',
    },
  })
</script>

<template>
  <div class="my-8 grid grid-flow-col justify-around gap-2 border-t-2 border-t-[#262626] pt-4 laptop:hidden">
    <!-- ${props.buttonHide} if you need top open the button dynamicly add this sentence to the div below  -->
    <button :class="`pad-fix:text-sm border-1 col-span-1 rounded-lg border-[#262626] bg-[#1A1A1A] px-8 py-4 text-center text-white`">
      {{ props.buttonText }}
    </button>

    <div class="col-span-2 flex items-center justify-around">
      <button class="arrows-bg text-[#808080]">&leftarrow;</button>

      <p class="pad-fix:whitespace-nowrap p-2">
        <span class="text-white">{{ props.pagesNumber }}</span>
        <span class="text-[#808080]">of</span>
        <span class="text-[#808080]">{{ props.totalPagesNumber }}</span>
      </p>

      <button class="arrows-bg text-white">&rightarrow;</button>
    </div>
  </div>

  <div class="laptop-box items-center-2 mx-auto my-8 hidden justify-between border-t-2 border-t-[#262626] pt-4 laptop:flex">
    <div class="box-left space-x-2">
      <span class="text-white">{{ props.pagesNumber }}</span>
      <span class="text-[#808080]">of</span>
      <span class="text-[#808080]">{{ props.totalPagesNumber }}</span>
    </div>
    <div class="box-left space-x-2">
      <button class="arrows-bg text-[#808080]">&leftarrow;</button>
      <button class="arrows-bg text-white">&rightarrow;</button>
    </div>
  </div>
</template>

<style>
  .arrows-bg {
    background-color: #1a1a1a;
    border: 2px solid #262626;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    text-align: center;
  }
</style>
