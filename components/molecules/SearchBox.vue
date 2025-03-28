<script setup lang="ts">
import MiniSearch from 'minisearch'

const query = ref('')
const searchResults = ref([])

const documents = [
  { id: 1, title: "Nuxt 3 Guide", content: "Learn Nuxt 3 step by step" },
  { id: 2, title: "Vue 3 Best Practices", content: "Master Vue 3 with best practices" },
  { id: 3, title: "Pinia State Management", content: "Manage state in Vue 3 using Pinia" }
]

const miniSearch = new MiniSearch({
  fields: ['title', 'content'],
  storeFields: ['title', 'content'],
  searchOptions: { prefix: true, fuzzy: 0.2 }
})

miniSearch.addAll(documents)

watch(query, (newQuery:any) => {
  searchResults.value = newQuery ? miniSearch.search(newQuery) : []
})
</script>

<template>
  <div class="p-4">
    <input v-model="query" placeholder="Search..." class="p-2 border rounded w-full">
    <ul v-if="searchResults.length">
      <li v-for="result in searchResults" :key="result.id" class="mt-2">
        <strong>{{ result.title }}</strong>
        <p class="text-gray-500 text-xs">{{ result.content }}</p>
      </li>
    </ul>
    <p v-else class="text-gray-400 text-sm">No results found</p>
  </div>
</template>
