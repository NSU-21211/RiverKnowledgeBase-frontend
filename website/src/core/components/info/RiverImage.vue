<template>
	<div v-if="imageUrl && imageUrl !== 'null'">
		<div>
			<img id="river-image" v-fullscreen-img v-bind:src="imageUrl" alt="Фотография реки" />
		</div>
	</div>
	<div v-else>
		<div>
			<img
				id="empty-river-image"
				v-fullscreen-img
				src="@/assets/images/default-river-image.webp"
				alt="Фотография реки не указана"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { vFullscreenImg } from 'maz-ui'

const props = defineProps({
	imageSource: {
		type: String,
		required: true
	}
})
const imageUrl = props.imageSource
console.log('Image URL: ', imageUrl)
</script>

<style scoped></style>
