<template>
	<AppRiverName />
	<div id="river-info-and-image">
		<AppRiverInfo />
		<!-- TODO: maybe add AppRiverImage here -->
		<!-- FIXME: use this parameter in river name class -->
		<p>River: {{ riverName }}</p>
		<button @click="router.push({ name: 'scheme' })">Отобразить линейную схему</button>
	</div>
	<section>
		<router-view />
	</section>
	<footer>
		<router-link :to="{ name: 'home' }"> На главную </router-link>
	</footer>
</template>

<script setup lang="ts">
import AppRiverInfo from '@/components/info/RiverInfo.vue'
import AppRiverName from '@/components/info/RiverName.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const props = defineProps(['riverName'])
const riverName = ref(props.riverName)
</script>

<style scoped></style>
