<template>
	<div id="river-list">
		<h2>Список рек</h2>
		<ul>
			<!-- FIXME: create class for river and use field -->
			<li v-for="river in rivers" :key="river">
				<a @click="getRiverInfo(river)">{{ river }}</a>
			</li>
		</ul>
	</div>
	<section>
		<router-view />
	</section>
	<footer>
		<router-link :to="{ name: 'home' }"> На главную </router-link>
	</footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { riverListMock } from '@/assets/mocks/mocks'

const router = useRouter()

const rivers = riverListMock

const getRiverInfo = (riverName: string) => {
	router.push({ name: 'info', params: { riverName: riverName } })
}
</script>

<style scoped></style>
