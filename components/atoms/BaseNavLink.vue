<script setup lang="ts">
import { NuxtLink } from '#components'
const props = defineProps<{
  to: string
  openInNewTab?: boolean
  exact?: boolean
  icon?: string
  extra?:string;
}>()
const route = useRoute()

const isExternal = computed(() => /^https?:\/\//.test(props.to))

const isActive = computed(() => {
  if (isExternal.value) return false
  return props.exact  ? route.path === props.to: route.path.startsWith(props.to) })



// const viewProperties ='bg-[#703BF7] cursor-pointer font-sans hover:bg-purple-500 text-white text-sm font-medium px-2 py-3 lg:px-6 rounded-xl'

const baseClass = () => computed(() =>
['cursor-pointer', 'font-sans', 'transition-colors', 'duration-200',  `${props.extra || ''}` ].join(' '))

</script>

<template>
  <component
    :is="isExternal ? 'a' : NuxtLink"
    :to="!isExternal ? to : undefined"
    :href="isExternal ? to : undefined"
    :target="isExternal && openInNewTab ? '_blank' : undefined"
    :rel="isExternal && openInNewTab ? 'noopener noreferrer' : undefined"
    v-bind="$attrs"
    :class="[baseClass,{ 'font-semibold border-b-2 border-blue-600': isActive }]"  >

    <Icon v-if="icon" :name="icon" />
    <slot />
  </component>
</template>


<!-- usage 
 
<BaseNavLink to="/settings" icon="settings">
  הגדרות
</BaseNavLink>

<BaseNavLink to="https://external.com" icon="external-link" :openInNewTab="true">
  אתר חיצוני
</BaseNavLink>


-->