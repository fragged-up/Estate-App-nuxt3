
  <script lang="ts" setup>
  defineProps<{highlight?:string}>()
  </script>
  <template>
   <span class="bg-[#1D1D1D] text-white font-sans font-medium text-sm px-3 py-1 rounded-full w-max">
    {{ highlight }}
  </span>
  </template>

