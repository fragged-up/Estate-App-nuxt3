<script lang="ts" setup>
import { usePaginationStore } from '~/stores/pagination'

const allProperties = [
  {
    id: 1,
    title: 'Property Title 1',
    description: 'Property description 1',
    image: '/images/properties/desk-seaside.png',
    price: '$100000',
  },
  {
    id: 2,
    title: 'Property Title 2',
    description: 'Property description 2',
    image: '/images/properties/desk-metro.png',
    price: '$200000',
  },
  {
    id: 3,
    title: 'Property Title 3',
    description: 'Property description 3',
    image: '/images/properties/desk-rustic.png',
    price: '$300000',
  },
  {
    id: 4,
    title: 'Property Title 4',
    description: 'Property description 4',
    image: '/images/properties/desk-seaside.png',
    price: '$400000',
  },
  {
    id: 5,
    title: 'Property Title 5',
    description: 'Property description 5',
    image: '/images/properties/desk-metro.png',
    price: '$500000',
  },
  {
    id: 6,
    title: 'Property Title 6',
    description: 'Property description 6',
    image: '/images/properties/desk-rustic.png',
    price: '$600000',
  },
  {
    id: 7,
    title: 'Property Title 7',
    description: 'Property description 7',
    image: '/images/properties/desk-seaside.png',
    price: '$700000',
  },
  {
    id: 8,
    title: 'Property Title 8',
    description: 'Property description 8',
    image: '/images/properties/desk-metro.png',
    price: '$800000',
  },
  {
    id: 9,
    title: 'Property Title 9',
    description: 'Property description 9',
    image: '/images/properties/desk-rustic.png',
    price: '$900000',
  },
]

const pagination = usePaginationStore()
const itemsPerPage = 3

const paginatedProperties = computed(() => {
  const start = (pagination.currentPage - 1) * itemsPerPage
  const end = start + itemsPerPage
  return allProperties.slice(start, end)
})

onMounted(() => {
  pagination.setTotal(Math.ceil(allProperties.length / itemsPerPage))
})
</script>

<template>
  <div class="space-y-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NewMarkup
        v-for="property in paginatedProperties"
        :key="property.id"
        v-bind="property"
      />
    </div>

    <PaginationCard />
  </div>
</template>
