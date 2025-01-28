<script>
  export default {
    name: 'AppHeader',
    setup() {
      const isShown = ref(true)
      return { isShown }
    },
  }
</script>

<template>
  <div
    v-show="isShown.value"
    class="flex items-center justify-around bg-hero-about-abst py-6"
  >
    <p class="font-sans text-sm font-medium text-white">
      ✨Discover Your Dream Property with Estatein
    </p>
    <small class="text-white underline">Learn More</small>
    <small class="ss" @click="() => (isShown.value = !isShown.value)">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 13L13 1M1 1L13 13"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </small>
  </div>

  <div class="mobile-box bg-mg laptop:hidden">
    <div class="flex items-center justify-between bg-[#1A1A1A] p-8">
      <div class="logo-container">
        <img
          :src="$loadImage('/images/HeaderLogo.svg')"
          class="logo"
          alt="HeaderLogo"
        >
        <h1 class="ml-4 text-white">Estatein</h1>
      </div>

      <div class="hambu-container">
        <img :src="$loadImage('/icons/Hamburger.svg')" alt="Hamburger" >
      </div>
    </div>
  </div>
  <div
    class="laptop-box hidden items-center justify-evenly bg-hg py-6 laptop:flex"
  >
    <div class="logo-container">
      <img
        :src="$loadImage('/images/HeaderLogo.svg')"
        class="logo"
        alt="HeaderLogo"
      >
      <h1 class="ml-4 font-sans text-2xl font-bold text-white">Estatein</h1>
    </div>

    <div class="center space-x-4">
      <NuxtLink
        to="/"
        class="font-sans text-lg font-medium text-white"
        exact-active-class="rounded-xl border-2 border-gl bg-fgl px-8 py-4"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/AboutUs"
        class="font-sans text-lg font-medium text-white"
        exact-active-class="rounded-xl border-2 border-gl bg-fgl px-8 py-4"
      >
        Abouts Us
      </NuxtLink>
      <NuxtLink
        to="/Properties"
        class="font-sans text-lg font-medium text-white"
        exact-active-class="rounded-xl border-2 border-gl bg-fgl px-8 py-4"
      >
        Properties
      </NuxtLink>
      <NuxtLink
        to="/Services"
        class="font-sans text-lg font-medium text-white"
        exact-active-class="rounded-xl border-2 border-gl bg-fgl px-8 py-4"
      >
        Services
      </NuxtLink>
    </div>
    <div
      class="rounded-xl border-2 border-gl bg-fgl px-8 py-4 text-center font-sans text-base font-medium text-white"
    >
      <NuxtLink to="/Contact">Contact Us</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  /* <!-- class="mx-auto my-2 w-full rounded-2xl border-2 border-[#262626] p-5 text-center font-sans text-base font-medium text-white" --> */
  /* exact-active-class="rounded-xl border-2 border-gl bg-fgl px-8 py-4">Home</nuxt-link> */
  .logo-container > * {
    display: inline-block;
  }
  .ss {
    background-color: rgba(102, 102, 102, 0.6);
    border-radius: 50%;
    padding: 10px;
    color: white;
  }
</style>
