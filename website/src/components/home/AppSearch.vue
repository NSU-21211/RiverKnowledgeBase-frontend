<template>
	<div id="river-search">
		<h1>Информационный сервис о реках</h1>
		<p>Введите название реки:</p>
		<input type="text" v-model="riverName" />
		<button @click="searchRiver">Найти</button>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const riverName = ref('')
const router = useRouter()

const searchRiver = () => {
	router.push({ name: 'list', params: { name: riverName.value } })
}
</script>

<style scoped></style>
