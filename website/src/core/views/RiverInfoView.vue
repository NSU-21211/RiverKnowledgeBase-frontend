<template>
	<!--	FIXME-->
	<RiverName river-name="{{riverName}}" />
	<div id="river-info-and-image">
		<RiverInfo />
		<!-- TODO: maybe add AppRiverImage here -->
		<!-- FIXME: use this parameter in river name class -->
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
import RiverInfo from '@/core/components/info/RiverInfo.vue'
import RiverName from '@/core/components/info/RiverName.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const props = defineProps(['riverName'])
const riverName = props.riverName
</script>

<style scoped></style>
