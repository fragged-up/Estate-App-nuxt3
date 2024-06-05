<script setup>
const props = defineProps({
  inputType:{
    type:String,
     required:true
  },
  placeholder:{
    type:String,
    required:true
  },
  label:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  }
  
})
</script>

<template>
  <div class="w-11/12 flex flex-col gap-y-4 my-6 mx-auto">
    <label :for="props.id" class="font-sans font-medium text-base text-white">{{ props.label }}</label>
    <input :type="props.inputType" :name="props.name" :id="props.name" :placeholder="props.placeholder" class="w-full p-4 bg-[#141414] border border-[#262626] rounded-2xl cursor-pointer placeholder:text-[#666666] placeholder:text-sm placeholder:font-medium focus:outline-none" />
  </div>
</template>

<style scoped>

</style>