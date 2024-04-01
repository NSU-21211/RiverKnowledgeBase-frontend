<template>
	<div id="river-info">
		<p id="river_name">Название:</p>
		<p id="river_length">Длина:</p>
		<p id="river_area">Площадь:</p>
		<p id="river_origin">Исток водотока:</p>
		<p id="river_territorial">Административная территория:</p>
		<p id="river_tributaries">Притоки:</p>
		<p id="river_country">Страна:</p>
		<p id="river_mouth">Впадает в:</p>
		<p id="river-map">Река на карте: <a href="#" id="map-link">link to river</a></p>
	</div>
	<RiverImage />
</template>

<script setup lang="ts">
import RiverImage from '@/core/components/info/RiverImage.vue'
import { onMounted } from 'vue'
import { riverInfoResponseJsonMock } from '@/assets/mocks/mocks'

// TODO: add dynamic parameters
const parseRiverInfo = (riverInfoResponseJson: string) => {
	// TODO: add class for it
	const riverObj = JSON.parse(riverInfoResponseJson)

	let river_name = document.getElementById('river_name')
	let river_length = document.getElementById('river_length')
	let river_tributaries = document.getElementById('river_tributaries')
	let river_area = document.getElementById('river_area')
	let river_origin = document.getElementById('river_origin')
	let river_territorial = document.getElementById('river_territorial')
	let river_mouth = document.getElementById('river_mouth')
	let river_country = document.getElementById('river_country')
	let river_image = document.getElementById('river_image')

	if (river_name && !river_name.textContent!.includes(riverObj.label)) {
		river_name.textContent += riverObj.label
	}
	if (river_length && !river_length.textContent!.includes(riverObj.length)) {
		river_length.textContent += riverObj.length + ' км'
	}
	if (river_area && !river_area.textContent!.includes(riverObj.watershedArea)) {
		river_area.textContent += riverObj.watershedArea + ' км^2'
	}
	if (
		river_tributaries &&
		!river_tributaries.textContent!.includes(riverObj.tributaries.join(', '))
	) {
		river_tributaries.textContent += riverObj.tributaries.join(', ')
	}
	if (river_origin && !river_origin.textContent!.includes(riverObj.origin)) {
		river_origin.textContent += riverObj.origin.join(', ')
	}
	if (
		river_territorial &&
		!river_territorial.textContent!.includes(riverObj.administrativeTerritorial)
	) {
		river_territorial.textContent += riverObj.administrativeTerritorial
	}
	if (river_mouth && !river_mouth.textContent!.includes(riverObj.mouth.join(', '))) {
		river_mouth.textContent += riverObj.mouth.join(', ')
	}
	if (river_country && !river_country.textContent!.includes(riverObj.country)) {
		river_country.textContent += riverObj.country
	}
	if (river_image) {
		// TODO: call method from RiverImage
	}
}

onMounted(() => {
	let riverInfoResponseJson = riverInfoResponseJsonMock
	parseRiverInfo(riverInfoResponseJson)
})
</script>

<style scoped></style>
