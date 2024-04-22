<template>
	<div id="river-search">
		<h1 class="search-title">Информационный сервис о реках</h1>
		<div id="river-search-container" class="center">
			<input
				id="river-name-input"
				type="text"
				placeholder="Название реки"
				maxlength="100"
				v-model="riverName"
			/>
			<button id="confirm-river-button" @click="searchRiver">Найти</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const riverName = ref('')
const router = useRouter()

const searchRiver = () => {
	router.push({ name: 'list', params: { riverName: riverName.value } })
}
</script>

<style scoped></style>
