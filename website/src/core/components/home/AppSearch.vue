<template>
	<div id="river-search">
		<h1 class="search-title">Информационный сервис о реках</h1>
		<label for="river-name-input">Введите название реки:</label><br />
		<input
			type="text"
			placeholder="Название реки"
			maxlength="100"
			id="river-name-input"
			v-model="riverName"
		/>
		<button @click="searchRiver">Найти</button>
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
