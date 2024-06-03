<script setup>
const props = defineProps({
  stepsNo: String,
  stepHead: String,
  stepPara: String
});
</script>

<template>
  <div class="neon-border-left step">
    <div class="p-3 neon-border-bottom">
      <h4 class="font-sans font-semibold text-xl text-white">{{ props.stepsNo }}</h4>
    </div>

    <div class="step-box p-6 flex flex-col rounded-2xl gap-[8px] text-mg border-2 border-[#262626] no-left-radius">
      <h5 class="p-2 font-sans font-semibold text-lg text-white">{{ props.stepHead }}</h5>
      <p class="font-sans font-medium text-sm text-[#999999]">{{ props.stepPara }}</p>
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
  width: .5px; /* Adjust the width as needed */
  background: linear-gradient(180deg, #703BF7, #703BF7); /* Gradient color */
  box-shadow: 0 0 5px #703BF7, 0 0 10px #703BF7, 0 0 15px #703BF7, 0 0 20px #703BF7;
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
  height: .5px; /* Adjust the height as needed */
  background: linear-gradient(90deg, #703BF7, #703BF7); /* Gradient color */
  box-shadow: 0 0 5px #703BF7, 0 0 10px #703BF7, 0 0 15px #703BF7, 0 0 20px #703BF7;
  border-radius: 2px;
}






</style>
















































