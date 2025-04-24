<script setup lang="ts">
  defineProps<{
    btnText: string
    btnStyle?: string
  }>()
</script>

<template>
  <button :class="btnStyle">
    {{ btnText }}
  </button>
</template>

