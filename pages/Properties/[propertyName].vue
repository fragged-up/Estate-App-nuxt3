<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const propertyName = route.params.propertyName
</script>

<template>
  <div class="main-propertyId-cont">
    <h1>Property ID: {{ propertyName }}</h1>
  </div>
</template>
<!-- ← → -->
