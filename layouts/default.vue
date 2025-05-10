<script setup>
  import { Toaster } from 'vue-sonner';
</script>

<template>
  <div>
    <SiteHeader />
    <main>
      <NuxtPage />
      <Toaster />
    </main>
    <SiteFooter />
  </div>
</template>
