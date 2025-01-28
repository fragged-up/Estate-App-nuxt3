<script setup lang="ts">
  import { usePageStore } from '@/stores/modalStore'

  const pageStore = usePageStore()

  const emit = defineEmits<{
    (event: 'paginateBack'): void
  }>()
</script>

<template>
  <button
    class="arrows-background cursor-pointer"
    :class="[
      { active: pageStore.isLeftActive },
      { disabled: !pageStore.isLeftDisabled },
    ]"
    :disabled="pageStore.isLeftDisabled"
    @click="emit('paginateBack')"
  >
    <div class="svg-cont">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 16"
        class="h-5 w-5 transition-all duration-300"
        :class="!pageStore.isLeftDisabled ? 'fill-white' : 'fill-gray-400'"
      >
        <path
          d="M17.4004 8.00005C17.4004 8.49711 16.9974 8.90005 16.5004 8.90005L3.73489 8.90005L8.72419 13.6513C9.08248 13.9958 9.09365 14.5656 8.74914 14.9238C8.40463 15.2821 7.83489 15.2933 7.47659 14.9488L0.876594 8.6488C0.700122 8.47912 0.600391 8.24487 0.600391 8.00005C0.600391 7.75523 0.700123 7.52098 0.876594 7.3513L7.47659 1.0513C7.83489 0.706786 8.40463 0.717957 8.74914 1.07625C9.09365 1.43455 9.08248 2.00429 8.72419 2.3488L3.73489 7.10005L16.5004 7.10005C16.9974 7.10005 17.4004 7.50299 17.4004 8.00005Z"
        />
      </svg>
    </div>
  </button>
</template>

<style></style>
