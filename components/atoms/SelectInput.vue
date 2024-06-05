<script setup>
import { ref } from 'vue';

const props = defineProps({
  label: String,
  placeHolder: {
    type: String,
    required: true
  },
  showDropDown: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    required: true,
    default: () => []
  },
  selectHead: {
    type: String,
    required: false
  }
});

const selectedOption = ref('');
const dropdownVisible = ref(false);

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  dropdownVisible.value = false;
};
</script>ß

<template>
  <div class="w-11/12 mx-auto">
    <h3 class="font-sans font-semibold text-base text-white my-6">{{ props.selectHead }}</h3>
    <div class="flex items-center justify-between p-4 bg-[#141414] border border-[#262626] rounded-2xl cursor-pointer" @click="toggleDropdown">
      <div class="w-full pl-2 font-sans font-medium text-base text-[#999999] bg-[#141414]">
        <span v-if="selectedOption">{{ selectedOption }}</span>
        <span v-else class="text-sm">{{ props.placeHolder }}</span>
      </div>
      <svg v-if="!dropdownVisible" class="w-6 h-6 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
      <svg v-else class="w-6 h-6 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 15l-7-7-7 7"></path>
      </svg>
    </div>
    <div v-show="dropdownVisible" class="bg-[#141414] border border-[#262626] rounded-2xl mt-2 w-full">
      <ul class="list-none p-0 m-0">
        <li 
          v-for="option in props.options" 
          :key="option" 
          @click="selectOption(option)" 
          class="px-4 py-2 text-white cursor-pointer hover:bg-[#262626]"
        >
          {{ option }}
        </li>      
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* You can add additional styling if needed */
</style>
















