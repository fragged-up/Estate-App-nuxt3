<script setup lang="ts">
  defineProps<{
    stepsNo: string
    stepHead: string
    stepPara: string
  }>()
</script>

<template>
  <div class="neon-border-left step">
    <div class="neon-border-bottom p-3">
      <h4 class="font-sans text-xl font-semibold text-white">{{ stepsNo }}</h4>
    </div>

    <div
      class="step-box no-left-radius laptop:items-strech flex flex-col gap-[8px] rounded-2xl border-2 border-[#262626] p-6 text-mg laptop:h-56 laptop:p-12"
    >
      <h5 class="p-2 font-sans text-lg font-semibold text-white">
        {{ stepHead }}
      </h5>
      <p class="font-sans text-sm font-medium text-[#999999]">{{ stepPara }}</p>
    </div>
  </div>
</template>

<style scoped>
  /* neon-left-side-adjustments */

  /* #region */
  .neon-border-left {
    position: relative;
  }
  .neon-border-left::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    width: 0.5px; /* Adjust the width as needed */
    background: linear-gradient(180deg, #703bf7, #703bf7); /* Gradient color */
    box-shadow:
      0 0 5px #703bf7,
      0 0 10px #703bf7,
      0 0 15px #703bf7,
      0 0 20px #703bf7;
    border-radius: 2px;
  }
  .no-left-radius {
    border-top-left-radius: 0 !important;
  }

  /* #endregion */

  .neon-border-bottom {
    position: relative;
  }

  .neon-border-bottom::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 15%;
    height: 0.5px; /* Adjust the height as needed */
    background: linear-gradient(90deg, #703bf7, #703bf7); /* Gradient color */
    box-shadow:
      0 0 5px #703bf7,
      0 0 10px #703bf7,
      0 0 15px #703bf7,
      0 0 20px #703bf7;
    border-radius: 2px;
  }
</style>
