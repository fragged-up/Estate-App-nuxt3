
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const propertyId = route.params.propertyId
</script>


<template>
  <div>
    <h1>Property ID: {{ propertyId }}</h1>
    <!-- Your component content here -->
  </div>
</template>
