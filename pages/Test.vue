<script setup lang="ts">
interface Property {
  id: string;
  title: string;
  price: number;
  location: { city: string };
  areaSqFt: number;
  buildYear: number;
  image?: string;
}

interface ApiResponse<T = any> {
  data?: T;
  message?: string;
  error?: string;
}

const filters = ref({
  location: '',
  propertyType: '',
  priceRange: [null, null] as [number | null, number | null],
  areaRange: [null, null] as [number | null, number | null],
  buildYear: null as number | null,
});

const properties = ref<Property[]>([]);
const errorMessage = ref<string | null>(null);
const loading = ref(false);

const cities = ref<string[]>([]);
const propertyTypes = ref<string[]>([]);
const buildYears = ref<number[]>([]);
const filterLoading = ref(false);
const filterError = ref<string | null>(null);

const fetchFilterOptions = async () => {
  filterLoading.value = true;
  filterError.value = null;
  try {
    const response = await $fetch<ApiResponse<{
      locationOptions: { id: string; name: string }[];
      propertyTypeOptions: { id: string; type: string }[];
      buildYearOptions: { id: string; year: number }[];
    }>>('/api/test');
    if (response.data) {
      cities.value = response.data.locationOptions.map(option => option.name).filter((v, i, a) => a.indexOf(v) === i) as string[];
      propertyTypes.value = response.data.propertyTypeOptions.map(option => option.type).filter((v, i, a) => a.indexOf(v) === i) as string[];
      buildYears.value = response.data.buildYearOptions.map(option => option.year).filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => b - a) as number[]; // Sort descending and remove duplicates
    } else {
      filterError.value = response.message || 'Failed to load filter options.';
    }
  } catch (error) {
    console.error('Error fetching filter options:', error);
    filterError.value = 'Failed to load filter options.';
  } finally {
    filterLoading.value = false;
  }
};

const filteredProperties = computed(() => {
  return properties.value.filter((property: any) => {
    const locationMatch = !filters.value.location || property.location.city.toLowerCase().includes(filters.value.location.toLowerCase());
    const typeMatch = !filters.value.propertyType || property.propertyType.toLowerCase() === filters.value.propertyType.toLowerCase();
    const priceMatch = (!filters.value.priceRange[0] || property.price >= filters.value.priceRange[0]) &&
      (!filters.value.priceRange[1] || property.price <= filters.value.priceRange[1]);
    const areaMatch = (!filters.value.areaRange[0] || property.areaSqFt >= filters.value.areaRange[0]) &&
      (!filters.value.areaRange[1] || property.areaSqFt <= filters.value.areaRange[1]);
    const yearMatch = filters.value.buildYear === null || property.buildYear === filters.value.buildYear;
    return locationMatch && typeMatch && priceMatch && areaMatch && yearMatch;
  });
});

const fetchProperties = async () => {
  loading.value = true;
  errorMessage.value = null;
  try {
    const response = await $fetch<ApiResponse<Property[]>>('/api/test', { // Assuming a new endpoint for filtered properties
      method: 'POST',
      body: filters.value,
    });

    if (response.data) {
      properties.value = response.data;
    } else {
      errorMessage.value = response.message || 'No properties found.';
      properties.value = [];
    }
  } catch (error) {
    console.error('Error fetching properties:', error);
    errorMessage.value = 'Failed to fetch properties.';
    properties.value = [];
  } finally {
    loading.value = false;
  }
};

const resetFilters = () => {
  filters.value = {
    location: '',
    propertyType: '',
    priceRange: [null, null],
    areaRange: [null, null],
    buildYear: null,
  };
  fetchProperties();
};

onMounted(() => {
  fetchFilterOptions();
  fetchProperties(); // Optionally fetch all properties on initial load
});
</script>

<template>
  <div class="bg-gray-100 min-h-screen py-10">
    <div class="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-3xl font-semibold mb-6 text-gray-800">Find Your Dream Property</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label for="location" class="block text-gray-700 text-sm font-bold mb-2">Location:</label>
          <select id="location" v-model="filters.location" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :disabled="filterLoading">
            <option value="">Any</option>
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
          </select>
          <div v-if="filterError" class="text-red-500 text-xs italic">{{ filterError }}</div>
          <div v-if="filterLoading" class="text-gray-500 text-xs italic">Loading...</div>
        </div>

        <div>
          <label for="propertyType" class="block text-gray-700 text-sm font-bold mb-2">Property Type:</label>
          <select id="propertyType" v-model="filters.propertyType" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :disabled="filterLoading">
            <option value="">Any</option>
            <option v-for="type in propertyTypes" :key="type" :value="type">{{ type }}</option>
          </select>
          <div v-if="filterError" class="text-red-500 text-xs italic">{{ filterError }}</div>
          <div v-if="filterLoading" class="text-gray-500 text-xs italic">Loading...</div>
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">Price Range ($):</label>
          <div class="flex space-x-2">
            <input v-model.number="filters.priceRange[0]" type="number" placeholder="Min" class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input v-model.number="filters.priceRange[1]" type="number" placeholder="Max" class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">Area Range (sqft):</label>
          <div class="flex space-x-2">
            <input v-model.number="filters.areaRange[0]" type="number" placeholder="Min" class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input v-model.number="filters.areaRange[1]" type="number" placeholder="Max" class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
        </div>

        <div>
          <label for="buildYear" class="block text-gray-700 text-sm font-bold mb-2">Build Year:</label>
          <select id="buildYear" v-model="filters.buildYear" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :disabled="filterLoading">
            <option :value="null">Any</option>
            <option v-for="year in buildYears" :key="year" :value="year">{{ year }}</option>
          </select>
          <div v-if="filterError" class="text-red-500 text-xs italic">{{ filterError }}</div>
          <div v-if="filterLoading" class="text-gray-500 text-xs italic">Loading...</div>
        </div>

        <div class="flex items-end space-x-2">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :disabled="loading" @click="fetchProperties">
            Apply Filters
          </button>
          <button class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :disabled="loading || filterLoading" @click="resetFilters">
            Reset
          </button>
        </div>
      </div>

      <div v-if="loading" class="text-center py-4 text-gray-600">Loading properties...</div>

      <div v-else-if="filteredProperties.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="property in filteredProperties" :key="property.id" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img v-if="property.image" :src="property.image" alt="Property Image" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ property.title }}</h2>
            <p class="text-gray-600 mb-1"><i class="fas fa-map-marker-alt mr-2" />{{ property.location.city }}</p>
            <p class="text-indigo-600 font-bold text-lg mb-2">${{ property.price.toLocaleString() }}</p>
            <div class="flex space-x-4 text-gray-500 text-sm">
              <span><i class="fas fa-ruler-horizontal mr-2" />{{ property.areaSqFt }} sqft</span>
              <span><i class="fas fa-calendar-alt mr-2" />Built: {{ property.buildYear }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="!loading && filteredProperties.length === 0 && !errorMessage" class="text-center py-4 text-gray-600">
        No properties match your filters.
      </div>

      <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6" role="alert">
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">{{ errorMessage }}</span>
      </div>
    </div>
  </div>
</template>
