<script setup lang="ts">
defineProps<{ 
	cardTitle?: string;
	cardText?: string;
	loremIpsum: string;
}>()
</script>

<template>
	<h3 class="text-lg laptop:text-xl text-white font-sans font-semibold">{{ cardTitle }}</h3>
	<ReadMore :preview="cardText" :full="loremIpsum" />
</template>
