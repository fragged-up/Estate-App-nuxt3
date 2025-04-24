<script setup lang="ts">
  // const emit = defineEmits(['updateIndex'])
  const emit = defineEmits<{
    updateIndex: [index: number]
  }>()

  const prev = (index:number) => {
    emit('updateIndex', index-1)
  }
  const next = (index:number) => {
    emit('updateIndex', index+1)
  }


// const activePointStyle:string = 'font-semibold text-pr'

const middleTab = ['-','-','-','-','-','-'];


const activeTab = ref(0).value;




</script>

<template>
  <div class="mx-auto max-w-[19rem]">


    <ImageGallery />


    <div class="heavy-arrows-cont flex items-center justify-between rounded-full border-gl bg-fgl p-2">
      <div class="left-box" @click="prev">
        <LeftNavigator />
      </div>

      <div class="middle-lines flex items-center justify-center gap-2 rounded-3xl">
        <p
         v-for="(t,index) in middleTab"
         :key="index"
         class="line text-[2rem] text-gl"
         :class="[activeTab === index ? 'font-semibold text-pr' : '' ]"
        >
        {{ t }}
        </p>
      </div>

      <div class="right-box" @click="next">
        <RightNavigator />
      </div>
    </div>
  </div>
</template>

