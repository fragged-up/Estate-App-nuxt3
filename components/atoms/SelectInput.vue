<script setup>
import { ref } from 'vue';

const props = defineProps({
  showInputImage: {
    type: Boolean,
    required: false,
    default: false
  },
  inputImage: {
    type: String,
    required: false
  },
  label: String,
  labelClass: {
    type: String,
    required: false
  },
  showDropDown: {
    type: Boolean,
    required: true,
    default: false
  },
  options: {
    type: Array,
    required: true,
    default: () => []
  }
});

const selectedOption = ref('');
</script>

<template>
  <div class="flex items-center justify-between p-4 bg-[#141414] border border-[#262626] rounded-2xl mb-6 cursor-pointer">
    <div class="flex items-center w-full">
      <img v-if="props.showInputImage" :src="props.inputImage" alt="inputIcon" class="w-6 h-6 mx-3" />
      <select v-model="selectedOption" :class="[props.labelClass,'w-4/5', 'ml-2', 'pl-4', 'font-sans', 'font-medium', 'text-base', 'text-[#999999]', 'bg-[#141414]', 'appearance-none']">
        <option disabled value="" class="text-white">{{ props.label }}</option>
        <option v-for="option in props.options" class="w-full" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
    <div v-show="props.showDropDown">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles if needed */
</style>