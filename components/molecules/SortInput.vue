<script setup>
const props = defineProps({
  inputImage:{
   type: String,
   required:false
  },
  label: String,
  labelClass:{
   type: String,
   required:false
  },
  showDropDown:{
    type:Boolean,
    required:true,
    default:false
  }
})

</script>


<template>
  <div class="flex items-center justify-between p-4 bg-[#141414] border border-[#262626] rounded-2xl mb-6 cursor-pointer">
    <div class="flex items-center appearance-none">
      <img :src="props.inputImage" alt="inputIcon" class="w-6 h-6 mx-3" />
      <span :class="[props.labelClass,'ml-2', 'pl-4', 'font-sans', 'font-medium', 'text-base', 'text-[#999999]', 'border-l', 'border-[#666666]']">{{ props.label }}</span>
    </div>
   <div v-show="showDropDown">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
   </div>
  </div>
</template>


<style scoped>

</style>