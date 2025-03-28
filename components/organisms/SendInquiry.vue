<script setup lang="ts">
  const props = defineProps<{ propertyId: string }>()
  const message = ref('')

  async function sendInquiry() {
    await useFetch('/api/inquiries', {
      method: 'POST',
      body: { propertyId: props.propertyId, message: message.value },
    })
  }
</script>

<template>

  <div>

    <h3>Contact Agent</h3>

    <textarea v-model="message" placeholder="Your message"></textarea>

    <button @click="sendInquiry">Send</button>

  </div>

</template>
