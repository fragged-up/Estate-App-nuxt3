<script setup lang="ts">
  defineProps<{
    cWrapStyle?: string
  }>()
  // const props = defineProps({
  //   cWrapStyle: {
  //     type: String,
  //     required: false,
  //     default: '',
  //   },
  // })
  const h1 = 'Trust'
  const h2 = 'Excellence'
  const h3 = 'Client-Centric'
  const h4 = 'Our Commitment'

  const p1 =
    'Trust is the cornerstone of every successful real estate transaction.'
  const p2 =
    'We set the bar high for ourselves. From the properties we list to the services we provide.'
  const p3 =
    'Your dreams and needs are at the center of our universe. We listen, understand.'
  const p4 =
    'We are dedicated to providing you with the highest level of service, professionalism'
</script>

<template>
  <div
    class="shadow-frame grid grid-rows-4 gap-y-4 rounded-xl p-6"
    :class="props.cWrapStyle">
    <div class="">
      <RepeatedBlock :image="'/icons/TrustIcon.svg'" :head="h1" :para="p1" />
    </div>

    <div class="">
      <RepeatedBlock
        :image="'/icons/ExcellenceIcon.svg'"
        :head="h2"
        :para="p2" />
    </div>

    <div class="">
      <RepeatedBlock :image="'/icons/CentricIcon.svg'" :head="h3" :para="p3" />
    </div>

    <div class="">
      <RepeatedBlock :image="'/icons/CommitIcon.svg'" :head="h4" :para="p4" />
    </div>
  </div>
</template>

<style scoped>
  .shadow-frame {
    box-shadow: 1px -1px 18px 1px #262626;
  }
</style>
