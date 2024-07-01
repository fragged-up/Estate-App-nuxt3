<script setup>
  import './assets/css/tailwind.css'
  useSeoMeta({
    title: 'Real-Estate Nuxt App',
    description: 'Oded Real Estate Company',
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

  :root {
    --main-fs: 'Urbanist', sans-serif;
    --wght-thin: 100;
    --wght-extr-light: 200;
    --wght-light: 300;
    --wght-regular: 400;
    --wght-medium: 500;
    --wght-semi-bold: 600;
    --wght-bold: 700;
    --wght-extra-bold: 800;
    --wght-heavy: 900;
    --main-clr: #ffffff;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
  }

  #__nuxt {
    min-height: 100vh;
    background-color: #141414;
  }

  /*
crazy overflow detecter  
* {
  outline: 1px solid red; /* Highlight all elements with a red outline 
} */
</style>
  
