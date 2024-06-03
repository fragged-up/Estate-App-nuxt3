<template>
  <div class="grid grid-flow-col justify-around gap-2 my-8 pt-4 border-t-2 border-t-[#262626]">
    <button class="pad-fix:text-sm bg-[#1A1A1A] border-1 border-[#262626] text-center col-span-1 py-4 px-8 text-white rounded-lg">
      {{ buttonText }}
    </button>


     
    <div class="flex justify-around items-center col-span-2">

      <button class="arrows-bg text-[#808080]">
        &leftarrow;
      </button>

          <p class="pad-fix:whitespace-nowrap p-2">
            <span class="text-white">{{ pagesNumber }}</span>
            <span class="text-[#808080]"> of </span>
            <span class="text-[#808080]">{{ totalPagesNumber }}</span>
          </p>

      <button class="arrows-bg text-white">
           &rightarrow;
      </button>

    </div>

  </div>
</template>

<script setup>

const button = defineProps({
  buttonText: {
    type: String,
    required: true
  },
  pagesNumber:{
    type:String,
    default:"01"
  },
  totalPagesNumber:{
    type:String,
    default:"60"
  }
})


</script>

<style>
.arrows-bg { 
  background-color:#1A1A1A;
  border:2px solid #262626;
  border-radius:50%;
  width:44px;
  height:44px;
  text-align:center;
}
</style>