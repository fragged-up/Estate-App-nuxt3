<script lang="ts" setup>
  const props = defineProps<{
    tabs: string[];
    activeTab: number;
  }>();

  const emit = defineEmits<{ (e: 'update:activeTab', newTab: number): void }>();
  const handleTabClick = (index: number) => {
    emit('update:activeTab', index);
  };
</script>

<template>
  <div class="middle-lines inline-flex items-center justify-center gap-[3px] rounded-3xl">
    <p
      v-for="(tab, index) in props.tabs"
      :key="index"
      class="cursor-pointer text-2xl md:text-3xl text-[#4D4D4D] transition-all duration-300 ease-in-out"
      :class="{ 'font-semibold text-pr rounded-full': props.activeTab === index }"
      @click="handleTabClick(index)"
    >
      - {{ tab.length }}
    </p>
  </div>
</template>
