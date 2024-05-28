<template>
	<div v-if="isQueryDone">
	  <h1 id="river-label">Река {{ riverInfo?.label }}</h1>
	  <div id="river-info-and-image" class="river-info-and-image-container">
		<RiverInfo v-model="riverInfo" />
		<button @click="navigateToScheme">Отобразить линейную схему</button>
	  </div>
	</div>
	<div v-else>
	  <button class="btn btn-primary btn-center" type="button" disabled>
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
  import { ref } from 'vue'
  import RiverService from '@/core/services/RiverService'
  import { useRiverStore } from '../../store/riverStore'
  import type { RiverInfoDto } from '@/core/models/river/RiverInfoDto'
  
  const router = useRouter()
  const riverStore = useRiverStore()
  const props = defineProps<{ wikidataId: string }>()
  const wikidataId = props.wikidataId
  
  const isQueryDone = ref<boolean>(false)
  const riverInfo = ref<RiverInfoDto | null>(null)
  
  const getRiverInfo = async (wikidataId: string) => {
	try {
	  const response = await RiverService.getRiverInfoByWikidataId(wikidataId)
	  if (response.data !== null) {
		riverInfo.value = response.data
		if (riverInfo.value) {
		  riverInfo.value.wikidata_id = wikidataId
		  const geoResponse = await RiverService.getRiverGeoInfo(riverInfo.value.label)
		  riverStore.setRiverGeoData(geoResponse.data)
		}
		isQueryDone.value = true
		console.log(riverInfo.value)
	  } else {
		console.error('Request for river with WikidataID: %s failed!', wikidataId)
	  }
	} catch (error) {
	  console.error('Error fetching river info:', error)
	}
  }
  
  const navigateToScheme = () => {
	router.push({ name: 'scheme' })
  }
  
  getRiverInfo(wikidataId)
  </script>
  
  <style scoped></style>
  