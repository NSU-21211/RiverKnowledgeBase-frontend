<template>
	<div v-if="isQueryDone">
		<h1 id="river-label">Река {{ riverInfo?.label }}</h1>
		<div id="river-info-and-image">
			<RiverInfo v-model="riverInfo" />
			<button @click="router.push({ name: 'scheme' })">Отобразить линейную схему</button>
		</div>
	</div>
	<div v-else>
		<button class="btn btn-primary" type="button" disabled>
			<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
			<span class="sr-only">Пожалуйста, подождите</span>
		</button>
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
import { useRouter } from 'vue-router'
import { type Ref, ref } from 'vue'
import RiverService from '@/core/services/RiverService'
import type { RiverInfoDto } from '@/core/models/river/RiverInfoDto'

const router = useRouter()

const props = defineProps(['wikidataId'])
const wikidataId = props.wikidataId

const isQueryDone = ref<boolean>(false)
const riverInfo: Ref<RiverInfoDto | null> = ref<RiverInfoDto | null>(null)

const getRiverInfo = async (wikidataId: string) => {
	const response = await RiverService.getRiverInfoByWikidataId(wikidataId)
	if (response.data !== null) {
		riverInfo.value = response.data
		if (riverInfo.value) {
			riverInfo.value.wikidata_id = wikidataId
		}
		isQueryDone.value = true
		console.log(riverInfo.value)
	} else {
		console.error('Request for river with WikidataID: %s failed!', wikidataId)
	}
}
getRiverInfo(wikidataId)
</script>

<style scoped></style>
