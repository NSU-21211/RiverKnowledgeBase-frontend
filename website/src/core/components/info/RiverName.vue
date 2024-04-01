<template>
	<div id="river-name">
		<h1 id="river-label">Река</h1>
	</div>
</template>

<script setup lang="ts">
interface Props {
	riverName: string
}
let props = defineProps<Props>()

let riverLabel = document.getElementById('river-label')
if (riverLabel) {
	riverLabel.textContent = props.riverName
}
</script>

<style scoped></style>
