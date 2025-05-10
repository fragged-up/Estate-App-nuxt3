<script setup>
  import '~/assets/css/tailwind.css'
  useSeoMeta({
    title: 'Real-Estate Nuxt App',
    description: 'Real Estate Company',
  })

  useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />

  </NuxtLayout>
</template>

<style>
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
    min-height: 100dvh;
    touch-action: manipulation;
  }

  #__nuxt {
    min-height: 100vh;
    background-color: #141414;
    touch-action: manipulation;
  }


</style>
