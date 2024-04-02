<template>
	<div id="river-list">
		<h2>Список рек</h2>
		<div v-if="isQueryDone">
			<ul>
				<li v-for="(river, index) in rivers" :key="index">
					<a @click="getRiverInfo(river.label)">Река {{ river.label }}</a>
					<p>&emsp;территориальная принадлежность:</p>
					<ul>
						<li
							v-for="(territorialUnit, index) in river.administrativeTerritorial"
							:key="index"
						>
							{{ territorialUnit }}
						</li>
					</ul>
					<br />
				</li>
			</ul>
		</div>
		<div v-else>
			<button class="btn btn-primary" type="button" disabled>
				<span
					class="spinner-border spinner-border-sm"
					role="status"
					aria-hidden="true"
				></span>
				<span class="sr-only">Пожалуйста, подождите</span>
			</button>
		</div>
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
import { ref } from 'vue'
import RiverService from '@/core/services/RiverService'
import type { RiverOverviewDto } from '@/core/models/river/RiverOverviewDto'

const router = useRouter()

const props = defineProps(['riverName'])
const riverName = props.riverName

const isQueryDone = ref<boolean>(false)
const rivers = ref<RiverOverviewDto[] | null>(null)

const getRiverList = async (riverName: string) => {
	const response = await RiverService.getRiverListByName(riverName)
	rivers.value = response.data
	isQueryDone.value = true
	console.log(rivers.value)
}
getRiverList(riverName)

const getRiverInfo = (riverName: string) => {
	router.push({ name: 'info', params: { riverName: riverName } })
}
</script>

<style scoped></style>
