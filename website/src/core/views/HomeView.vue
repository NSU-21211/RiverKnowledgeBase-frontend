<template>
	<div id="home">
		<AppSearch />
	</div>
	<div id="river-svg-logo">
		<img src="" alt="" />
	</div>
	<section>
		<router-view />
	</section>
</template>

<script setup lang="ts">
import AppSearch from '@/core/components/home/AppSearch.vue'
</script>

<style scoped></style>
