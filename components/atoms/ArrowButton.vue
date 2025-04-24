<script lang="ts" setup>
const emit = defineEmits<{ (e: 'click'): void }>()



const props = defineProps<{
  icon: string
  alt?: string
  size?: number
  disabled?: boolean
}>()
</script>

<template>
  <div
    :class="[
      'cursor-pointer rounded-full border-2 border-hg bg-fgl p-3 text-gl transition',
      props.disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : 'hover:bg-hg',
    ]"
    @click="!disabled && emit('click')"
  >
    <img
      :src="props.icon"
      :alt="props.alt || `${props.icon}`"
      :style="{ width: `${props.size || 24}px`, height: `${props.size || 24}px` }"
    >
  </div>
</template>





















<!-- ussage :


<script setup lang="ts">
const arrow = useAsset('/icons/leftArrow.svg')

const handleArrowClick = () => {
  console.log('Arrow clicked!');
  // Add your navigation logic here
}
</script>

<ArrowNavigator
  :icon="arrow"
  direction="left"
  @click="handleArrowClick"
  :disabled="false"
  :size="28"
/>

-->









<!--
My VERSION :
<script lang="ts" setup>

defineProps<{
  icon:string
  direction: 'left' | 'right';
  alt?:string
  size?:number;
  disabled?:boolean

}>()




</script>
<template>
  <div class="cursor-pointer rounded-full border-2 border-hg bg-fgl p-3 text-gl">

    <img :src="icon" class="w-6 h-6" :alt="alt || 'arrow-icon'">


  </div>
</template>

<style lang="css" scoped>
</style> -->
