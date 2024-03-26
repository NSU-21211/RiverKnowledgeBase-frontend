<template>
	<div id="home">
		<AppSearch />
	</div>
	<section>
		<router-view />
	</section>
</template>

<script setup lang="ts">
import AppSearch from '@/components/home/AppSearch.vue'
</script>

<style scoped></style>
