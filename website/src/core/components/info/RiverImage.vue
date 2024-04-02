<template>
	<div id="river-image">
		<img ref="imageSrc" alt="Фотография реки" src="" />
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { imageSourceMock } from '@/assets/mocks/mocks'

const imageSrc = ref<HTMLImageElement>()

// TODO: add dynamic value
const setImageSource = (imageSource: string) => {
	imageSrc.value!.src = imageSource
}

onMounted(() => {
	let imageSource = imageSourceMock
	setImageSource(imageSource)
})
</script>

<style scoped></style>
