<script setup lang="ts">

const props = defineProps<{
  to: string
  openInNewTab?: boolean
  exact?: boolean
  icon?: string
}>()

const route = useRoute()

const isExternal = computed(() => /^https?:\/\//.test(props.to))

const isActive = computed(() => {
  if (isExternal.value) return false
  return props.exact
    ? route.path === props.to
    : route.path.startsWith(props.to)
})
</script>

<template>
  <component
    :is="isExternal ? 'a' : NuxtLink"
    :to="!isExternal ? to : undefined"
    :href="isExternal ? to : undefined"
    :target="isExternal && openInNewTab ? '_blank' : undefined"
    :rel="isExternal && openInNewTab ? 'noopener noreferrer' : undefined"
    v-bind="$attrs"
    :class="[
      'inline-flex items-center gap-2 px-4 py-2 text-gray-700 transition-colors duration-200 hover:text-blue-600',
      { 'font-semibold border-b-2 border-blue-600': isActive }
    ]"
  >
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