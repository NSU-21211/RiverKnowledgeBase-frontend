<template>
	<div id="river-image">
		<img ref="imageSrc" alt="Фотография реки" src="" />
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const imageSrc = ref<HTMLImageElement>()

// TODO: add dynamic value
const setImageSource = () => {
	let imageSource =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/March_evening._The_sun_fell_across_the_Ob_river.jpg/1599px-March_evening._The_sun_fell_across_the_Ob_river.jpg'
	imageSrc.value!.src = imageSource
}

onMounted(() => {
	setImageSource()
})
</script>

<style scoped></style>
