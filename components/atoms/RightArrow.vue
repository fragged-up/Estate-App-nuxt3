<script setup lang="ts">
  import { usePageStore } from '@/stores/modalStore'

  const pageStore = usePageStore()
  // js version
  // const emit = defineEmits(['paginateForward'])

  // ts version

  const emit = defineEmits<{
    (event: 'paginateForward'): void
  }>()
</script>

<template>
  <button
    class="arrows-background cursor-pointer"
    :class="[
      { active: pageStore.isRightActive },
      { disabled: pageStore.isRightDisabled },
    ]"
    :disabled="pageStore.isRightDisabled"
    @click="emit('paginateForward')"
  >
    <div class="svg-cont">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 16"
        class="h-5 w-5 transition-all duration-300"
        :class="!pageStore.isRightDisabled ? 'fill-white' : 'fill-gray-400'"
      >
        <path
          d="M0.599609 8.00005C0.599609 8.49711 1.00256 8.90005 1.49961 8.90005H14.2651L9.27581 13.6513C8.91752 13.9958 8.90635 14.5656 9.25086 14.9238C9.59537 15.2821 10.1651 15.2933 10.5234 14.9488L17.1234 8.6488C17.2999 8.47912 17.3996 8.24487 17.3996 8.00005C17.3996 7.75523 17.2999 7.52098 17.1234 7.3513L10.5234 1.0513C10.1651 0.706786 9.59537 0.717957 9.25086 1.07625C8.90635 1.43455 8.91752 2.00429 9.27581 2.3488L14.2651 7.10005H1.49961C1.00256 7.10005 0.599609 7.50299 0.599609 8.00005Z"
        />
      </svg>
    </div>
  </button>
</template>
