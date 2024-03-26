<template>
	<div id="scheme-and-legend">
		<AppHeader />
		<AppLinearScheme />
		<AppLinearSchemeLegend />
	</div>
	<section>
		<router-view />
	</section>
</template>

<script setup lang="ts">
import AppLinearScheme from '@/components/scheme/LinearScheme.vue'
import AppHeader from '@/components/scheme/LinearSchemeHeader.vue'
import AppLinearSchemeLegend from '@/components/scheme/LinearSchemeLegend.vue'
</script>

<style scoped></style>
