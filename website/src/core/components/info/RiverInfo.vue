<template>
	<div id="river-info" class="image-offset">
		<div v-if="riverInfo.countries && riverInfo.countries.length">
			<p>Река находится в следующих странах:</p>
			<ul id="countries-river">
				<li v-for="(country, index) in riverInfo.countries" :key="index">
					{{ country }}
				</li>
			</ul>
		</div>
		<div
			v-if="
				riverInfo.administrative_territorials &&
				riverInfo.administrative_territorials.length
			"
		>
			<p>Административные территории:</p>
			<ul id="administrative-territorials-river">
				<li
					v-for="(territorialUnit, index) in riverInfo.administrative_territorials"
					:key="index"
				>
					{{ territorialUnit }}
				</li>
			</ul>
		</div>
		<div v-if="riverInfo.origins && riverInfo.origins.length">
			<p>Истоки реки:</p>
			<ul id="origins-river">
				<li v-for="(origin, index) in riverInfo.origins" :key="index">
					{{ origin }}
				</li>
			</ul>
		</div>
		<div v-if="riverInfo.mouths && riverInfo.mouths.length">
			<p>Река впадает в:</p>
			<ul id="mouths-river">
				<li v-for="(mouth, index) in riverInfo.mouths" :key="index">
					{{ mouth }}
				</li>
			</ul>
		</div>
		<div v-if="riverInfo.length">
			<p id="length">Длина: {{ riverInfo.length }} км</p>
		</div>
		<div v-if="riverInfo.watershed_area">
			<p id="watershed-area">Площадь бассейна: {{ riverInfo.watershed_area }} км²</p>
		</div>
		<div v-if="riverInfo.tributaries && riverInfo.tributaries.length">
			<p>Притоки реки:</p>
			<ul id="tributaries-river">
				<li v-for="(tributary, index) in riverInfo.tributaries" :key="index">
					{{ tributary }}
				</li>
			</ul>
		</div>
		<p>
			Подробная информация:
			<a v-bind:href="'https://www.wikidata.org/wiki/' + riverInfo.wikidata_id">Wikidata</a>
		</p>
	</div>
	<RiverImage :imageSource="riverInfo.image" class="image-offset" />
</template>

<script setup lang="ts">
import RiverImage from '@/core/components/info/RiverImage.vue'
import type { RiverInfoDto } from '@/core/models/river/RiverInfoDto'
import { ref } from 'vue'

const props = defineProps({
	modelValue: {
		type: Object as () => RiverInfoDto,
		required: true
	}
})
const emits = defineEmits(['update:modelValue'])

const internalModelValue = ref(props.modelValue)
const riverInfo = internalModelValue.value
</script>

<style scoped></style>
