<script lang="ts" setup>

const props = defineProps<{
  tabsCount: string[];
  activeIndicator: number;
}>();

const emit = defineEmits<{ (e: 'updateActiveIndex', index: number): void }>();
const internalActiveTab = ref(props.activeIndicator);

watch(() => props.activeIndicator, (newActiveIndicator:number) => {
  internalActiveTab.value = newActiveIndicator;
});

const updateActiveTab = (index: number) => {
  internalActiveTab.value = index;
  emit('updateActiveIndex', index);
};

const goLeft = () => {
  if (internalActiveTab.value > 0) {
    updateActiveTab(internalActiveTab.value - 1);
  }
};

const goRight = () => {
  if (internalActiveTab.value < props.tabsCount.length - 1) {
    updateActiveTab(internalActiveTab.value + 1);
  }
};
</script>

<template>
<div class="flex justify-center items-center">
    <div class="slider-control bg-fgl max-w-[19.875rem] laptop:max-w-[12.875rem] rounded-full inline-flex items-center justify-center p-2 gap-4">
      <ArrowButton
        icon="/left-navigator.svg"
        direction="right"
        :disabled="internalActiveTab === 0"
        @click="goLeft"
      />

      <TabIndicator
        :tabs="props.tabsCount"
        :active-tab="internalActiveTab"
        @update:active-tab="updateActiveTab"
      />

      <ArrowButton
        icon="/right-navigator.svg"
        direction="right"
        :disabled="internalActiveTab === props.tabsCount.length - 1"
        @click="goRight"
      />
    </div>
</div>
</template>


