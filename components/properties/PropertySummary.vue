<script setup lang="ts">
const props =defineProps<{
	title: string;
	summary: string;
	loremIpsum: string;
}>()
</script>

<template>
	<h3 class="text-lg laptop:text-xl text-white font-sans font-semibold">{{ props.title }}</h3>
	<ReadMore :preview="props.summary" :full="props.loremIpsum" />
</template>
