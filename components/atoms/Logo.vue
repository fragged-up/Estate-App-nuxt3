<script setup></script>

<template>
  <div class="pt-4">
    <div class="logo-container p-4">
      <img
        :src="$loadImage('/images/HeaderLogo.svg')"
        class="logo"
        alt="HeaderLogo"
      >
      <h1 class="header-text font-semibold">Estatein</h1>
    </div>
  </div>
</template>

<style scoped>
  .logo-container > * {
    display: inline-block;
  }

  /* .logo{

} */
  .header-text {
    color: white;
    font-size: 16px;
    margin-left: 15px;
  }
</style>
