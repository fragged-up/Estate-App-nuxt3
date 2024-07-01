<script setup>
  const isShown = ref(true)
  const hideButt = () => {
    isShown.value = !isShown.value
  }
</script>

<template class="bg-header-clr">
  <div v-show="isShown" class="flex items-center justify-around bg-hero-about-abst py-6">
    <p class="font-sans text-sm font-medium text-white">✨Discover Your Dream Property with Estatein</p>
    <small class="fs">Learn More</small>
    <small @click="hideButt" class="ss">X</small>
  </div>

  <div class="flex items-center justify-between bg-[#1A1A1A] p-8">
    <div class="logo-container">
      <img :src="$loadImage('/images/HeaderLogo.svg')" class="logo" alt="HeaderLogo" />
      <h1 class="header-text">Estatein</h1>
    </div>

    <div class="hambu-container">
      <img :src="$loadImage('/icons/Hamburger.svg')" alt="Hamburger" />
    </div>
  </div>
</template>

<style scoped>
  .bg-header-clr {
    background-color: #1a1a1a;
  }

  .logo-container > * {
    display: inline-block;
  }

  .fs {
    color: white;
    text-decoration: underline;
  }
  .ss {
    background-color: rgba(102, 102, 102, 0.6);
    border-radius: 50%;
    padding: 10px;
    color: white;
  }
  /* .logo{

} */
  .header-text {
    color: white;
    margin-left: 15px;
  }
</style>
