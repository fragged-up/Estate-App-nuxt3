<script setup lang="ts">
import { useFetch } from '@vueuse/core';

const contacts = ref<any[] | null>(null);
const error = ref<Error | null>(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const { data, error: fetchError } = await useFetch('/api/admin/get-contacts');

    if (fetchError.value) {
      error.value = new Error(fetchError.value.message || 'Failed to fetch contacts');
      return;
    }

    if (data.value) {
      contacts.value = data.value.data;
    }
  } catch (err: any) {
      error.value = err;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Contact Form Submissions</h1>

    <div v-if="loading">
      <p>Loading contacts...</p>
    </div>

    <div v-else-if="error">
      <p class="text-red-500">Error: {{ error.message }}</p>
    </div>

    <div v-else-if="contacts && contacts.length > 0">
      <table class="min-w-full border border-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">First Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Last Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Email</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Phone</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Message</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Terms</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="contact in contacts" :key="contact.id">
            <td class="px-6 py-4 whitespace-nowrap border-b text-sm">{{ contact.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap border-b text-sm">{{ contact.data.firstName }}</td>
            <td class="px-6 py-4 whitespace-nowrap border-b text-sm">{{ contact.data.lastName }}</td>
            <td class="px-6 py-4 whitespace-nowrap border-b text-sm">{{ contact.data.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap border-b text-sm">{{ contact.data.phone }}</td>
            <td class="px-6 py-4 whitespace-nowrap border-b text-sm">{{ contact.data.message }}</td>
            <td class="px-6 py-4 whitespace-nowrap border-b text-sm">{{ contact.data.termsAccepted }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p>No contact form submissions found.</p>
    </div>
  </div>
</template>
