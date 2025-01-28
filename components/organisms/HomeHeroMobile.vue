<script setup lang="ts">
  const heroSquaresHome = [
    {
      centerIcon: '/icons/homeIcon.svg',
      title: 'Find Your Dream\n Home',
    },
    {
      centerIcon: '/icons/cameraIcon.svg',
      title: 'Unlock Property\n Value',
    },
    {
      centerIcon: '/icons/buildingIcon.svg',
      title: 'Effortless Property\n Management',
    },
    {
      centerIcon: '/icons/sunIcon.svg',
      title: 'Smart Investments,\n Informed Decisions',
    },
  ]
</script>

<template>
  <main class="w-full bg-[#141414]">
    <div class="container mx-auto grid justify-center bg-[#141414]">
      <div class="bg-image mx-auto my-4 rounded-3xl">
        <div class="circle-box leading-7">
          <div id="outer-circle">
            <div class="circle-text">D</div>
            <div class="circle-text">i</div>
            <div class="circle-text">s</div>
            <div class="circle-text">c</div>
            <div class="circle-text">o</div>
            <div class="circle-text">v</div>
            <div class="circle-text">e</div>
            <div class="circle-text">r</div>
            <div class="circle-text" />
            <div class="circle-text">Y</div>
            <div class="circle-text">o</div>
            <div class="circle-text">u</div>
            <div class="circle-text">r</div>
            <div class="circle-text" />
            <div class="circle-text">D</div>
            <div class="circle-text">r</div>
            <div class="circle-text">e</div>
            <div class="circle-text">a</div>
            <div class="circle-text">m</div>
            <div class="circle-text" />
            <div class="circle-text">P</div>
            <div class="circle-text">r</div>
            <div class="circle-text">o</div>
            <div class="circle-text">p</div>
            <div class="circle-text">e</div>
            <div class="circle-text">r</div>
            <div class="circle-text">t</div>
            <div class="circle-text">y</div>
            <div class="circle-text">✨</div>
            <div id="inner-circle" />
          </div>
        </div>
      </div>
    </div>
  </main>

  <div class="mx-auto mt-12 w-11/12 space-y-8">
    <div class="first-template my-18 mx-auto">
      <h1 class="mb-[20px] font-sans text-3xl font-semibold text-white">
        Discover Your Dream
        <br >
        Property with Estatein
      </h1>
      <p class="mb-[20px] pt-4 text-base font-medium text-[#999999]">
        Your journey to finding the perfect property begins here. Explore our
        listings to find the home that matches your dreams.
      </p>
      <button
        class="mx-auto my-2 w-full rounded-2xl border-2 border-[#262626] p-5 text-center font-sans text-base font-medium text-white"
      >
        Learn More
      </button>
      <button
        class="mx-auto my-2 w-full rounded-2xl bg-[#703BF7] p-5 text-center font-sans text-base font-medium text-white"
      >
        Browse Properties
      </button>
    </div>
    <CardThree />
    <div
      class="second-template grid max-w-[100%] grid-cols-2 grid-rows-2 gap-x-2.5 gap-y-2.5 rounded-md border-2 border-[#262626] p-4 laptop:grid-flow-col laptop:grid-cols-none laptop:grid-rows-none laptop:border-[7px]"
    >
      <BoxAtom
        v-for="(square, index) in heroSquaresHome"
        :key="index"
        :center-icon="square.centerIcon"
        :title="square.title"
      />
    </div>
  </div>
</template>

<style scoped>
  .bg-image {
    height: 300px;
    width: 90%;
    background-image: url('~/assets/images/backMobile.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: end;
  }

  .circle-box {
    height: 100%;
  }

  #outer-circle {
    position: relative;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    background-color: #141414;
    border-radius: 50%;
    left: 0;
    top: 65%;
    z-index: 15;
    border: 2.5px solid #262626;
  }

  #inner-circle {
    position: absolute;
    background-color: #1a1a1a;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    height: 65px;
    width: 65px;
    z-index: 1;
    transform: translate(-50%, -50%);
    border: 2.5px solid #262626;
  }

  .circle-text {
    position: absolute;
    transform-origin: 50% 73px;
    text-align: center;
    font-family: var(--main-fs);
    font-weight: var(--wght-semi-bold);
    font-size: 12.6px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--main-clr);
    /* line-height:2.25rem; */
  }

  /* #region */
  .circle-text:nth-child(1) {
    transform: rotate(0deg) translateX(-50%);
  }

  .circle-text:nth-child(2) {
    transform: rotate(10.59deg) translateX(-50%);
  }

  .circle-text:nth-child(3) {
    transform: rotate(21.18deg) translateX(-50%);
  }

  .circle-text:nth-child(4) {
    transform: rotate(31.77deg) translateX(-50%);
  }

  .circle-text:nth-child(5) {
    transform: rotate(42.35deg) translateX(-50%);
  }

  .circle-text:nth-child(6) {
    transform: rotate(52.94deg) translateX(-50%);
  }

  .circle-text:nth-child(7) {
    transform: rotate(63.94deg) translateX(-50%);
  }

  .circle-text:nth-child(8) {
    transform: rotate(74.94deg) translateX(-50%);
  }

  .circle-text:nth-child(9) {
    transform: rotate(86.94deg) translateX(-50%);
  }

  .circle-text:nth-child(10) {
    transform: rotate(97.94deg) translateX(-50%);
  }

  .circle-text:nth-child(11) {
    transform: rotate(108.94deg) translateX(-50%);
  }

  .circle-text:nth-child(12) {
    transform: rotate(118.94deg) translateX(-50%);
  }

  .circle-text:nth-child(13) {
    transform: rotate(126.94deg) translateX(-50%);
  }

  .circle-text:nth-child(14) {
    transform: rotate(137.94deg) translateX(-50%);
  }

  .circle-text:nth-child(15) {
    transform: rotate(146.94deg) translateX(-50%);
  }

  .circle-text:nth-child(16) {
    transform: rotate(154.94deg) translateX(-50%);
  }

  .circle-text:nth-child(17) {
    transform: rotate(164.94deg) translateX(-50%);
  }

  .circle-text:nth-child(18) {
    transform: rotate(176.94deg) translateX(-60%);
  }

  .circle-text:nth-child(19) {
    transform: rotate(189.94deg) translateX(-10%);
  }

  .circle-text:nth-child(20) {
    transform: rotate(199.94deg) translateX(-50%);
  }

  .circle-text:nth-child(21) {
    transform: rotate(209.94deg) translateX(-50%);
  }

  .circle-text:nth-child(22) {
    transform: rotate(218.94deg) translateX(-50%);
  }

  .circle-text:nth-child(23) {
    transform: rotate(230.94deg) translateX(-50%);
  }

  .circle-text:nth-child(24) {
    transform: rotate(242.94deg) translateX(-50%);
  }

  .circle-text:nth-child(25) {
    transform: rotate(256.94deg) translateX(-50%);
  }

  .circle-text:nth-child(26) {
    transform: rotate(270.94deg) translateX(-50%);
  }

  .circle-text:nth-child(27) {
    transform: rotate(280.94deg) translateX(-50%);
  }

  .circle-text:nth-child(28) {
    transform: rotate(296.94deg) translateX(-50%);
  }

  .circle-text:nth-child(29) {
    transform: rotate(312.94deg) translateX(-50%);
  }

  .circle-text:nth-child(30) {
    transform: rotate(322.94deg) translateX(-50%);
  }

  /*#endregion*/
</style>
