<script setup>
  const but = defineProps({
    buttonTxt: String,
    buttonStyling: String,
  })
</script>

<template>
  <button :class="but.buttonStyling">
    {{ but.buttonTxt }}
  </button>
</template>

<style scoped>
  .btn {
    padding: 0.5em 1em;
    border: none;
    cursor: pointer;
  }

  .btn-primary {
    background-color: #007bff;
    color: white;
  }

  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }

  /* Add more variants as needed */
</style>
