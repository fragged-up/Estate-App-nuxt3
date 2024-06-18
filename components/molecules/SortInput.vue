
<script setup>
import { ref } from 'vue';

const props = defineProps({
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
    default: false
  }
})

const isDropdownVisible = ref(props.showDropDown);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
</script>

<template>
  <div @click="toggleDropdown" class="relative flex items-center justify-between p-4 bg-[#141414] border border-[#262626] rounded-2xl mb-6 cursor-pointer">
    <div class="flex items-center">
      <img :src="$loadImage(inputImage)" alt="inputIcon" class="w-6 h-6 mx-3" />
      <span class="ml-2 pl-4 font-sans font-medium text-base text-[#999999] border-l border-[#666666]">{{ props.label }}</span>
    </div>
    <div>
      <svg v-if="!isDropdownVisible" class="w-6 h-6 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
      <svg v-else class="w-6 h-6 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 15l-7-7-7 7"></path>
      </svg>
    </div>
    <ul v-show="isDropdownVisible" class="absolute top-full mt-1 left-0 w-full bg-[#141414] border border-[#262626] text-white rounded-2xl z-10">
      <li class="p-4 hover:bg-[#262626] cursor-pointer">Option 1</li>
      <li class="p-4 hover:bg-[#262626] cursor-pointer">Option 2</li>
      <li class="p-4 hover:bg-[#262626] cursor-pointer">Option 3</li>
    </ul>
  </div>
</template>

<style scoped>
/* Ensure the dropdown list does not overlap and has proper z-index */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>