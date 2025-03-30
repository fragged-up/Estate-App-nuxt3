
  <script lang="ts" setup>
  defineProps<{tagLine:string}>()
  </script>
  <template>
   <span class="bg-[#1D1D1D] text-white font-sans font-medium text-sm px-3 py-1 rounded-full w-max">
    {{ tagLine }}
  </span>
  </template>
  
  <style lang="css" scoped>
  </style>