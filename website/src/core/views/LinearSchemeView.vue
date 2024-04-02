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
import AppLinearScheme from '@/core/components/scheme/LinearScheme.vue'
import AppHeader from '@/core/components/scheme/LinearSchemeHeader.vue'
import AppLinearSchemeLegend from '@/core/components/scheme/LinearSchemeLegend.vue'
</script>

<style scoped></style>
