 <script setup lang="ts">
const props = defineProps<{
  variant?: "properties" | "contact" | "services"
}>()

const heroConfigs = {
  properties: {
    title: "Find Your Dream Property",
    description: "Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey ",
  },
  contact: {
    title: "Get in Touch with Estatein",
    description: "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.",
  },
  services: {
    title: "Elevate Your Real Estate Experience",
    description: "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.",
  },
}
</script>

<template>
  <header class="bg-[linear-gradient(135deg,_#262626_0%,_#0D0D0D_53%)]  px-10 py-32">
    <h1 class="text-3xl font-semibold text-white">
      <slot name="title">{{ heroConfigs[props.variant || "properties"].title }}</slot>
    </h1>
    <p class="py-6 text-sm text-[#999999]">
      <slot name="description">{{ heroConfigs[props.variant || "properties"].description }}</slot>
    </p>
    <slot />
  </header>
</template>
