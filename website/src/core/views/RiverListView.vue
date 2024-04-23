<template>
	<div id="river-list">
		<h2>Список рек</h2>
		<div v-if="isQueryDone">
			<ul>
				<li v-for="(river, index) in rivers" :key="index">
					<a @click="getRiverInfo(river.id)">Река {{ river.label }}</a>
					<p>&emsp;территориальная принадлежность:</p>
					<ul>
						<li
							v-for="(territorialUnit, index) in river.administrativeTerritorials"
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
		<div v-if="selectedRiverFacts.length > 0">
			<h3>{{ selectedRiverFacts[selectedIndex].riverName }}</h3>
			<p>{{ selectedRiverFacts[selectedIndex].fact }}</p>
			<button @click="previousFact" :disabled="selectedIndex === 0">Назад</button>
			<button @click="nextFact" :disabled="selectedIndex === selectedRiverFacts.length - 1">Вперед</button>
		</div>
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

const selectedRiverFacts = ref([
	{ riverName: 'Интересный факт о реке Дон', fact: 'Река Дон, одна из крупнейших в России, не уникальна в плане названия. Реки с таким названием есть в Англии, Шотландии, Лаосе, Канаде, Франции и Австралии.' },
	{ riverName: 'Интересный факт о реке Волга', fact: 'У Волги есть собственный праздник, который отмечается ежегодно 20 мая.' },
	{ riverName: 'Интересный факт о реке Енисее', fact: 'Самая глубокая река в России – Енисей, протекающий по Сибири и впадающий в Карское море. Его максимальная глубина достигает 70 метров' },
	{ riverName: 'Интересный факт о реке Нил', fact: 'Самая древняя река в мире - это протекающий в Африке Нил' },
	{ riverName: 'Интересный факт о реках Финляндии', fact: 'Страна с наибольшим количеством рек — Финляндия. По её территории протекает 650 рек.' },
	{ riverName: 'Интересный факт о реке Нил', fact: 'Самой длинной рекой считается Нил. Ее длина составляет примерно 6853 км.' },
	{ riverName: 'Интересный факт о реках Саудовской Аравии', fact: 'Есть страна, на территории которой нет ни одной реки. Это Саудовская Аравия.' },
	{ riverName: 'Интересный факт о реке Урал', fact: 'Естественной водной границей между Азией и Европой считается река Урал.' },
	{ riverName: 'Интересный факт о российских реках', fact: 'Суммарная протяжённость российских рек превышает 12,4 млн км. Это в 32 с лишним раза больше расстояния от Земли до Луны.' },
	{ riverName: 'Интересный факт о самой маленькой реке', fact: 'Длина самой маленькой реки составляет всего лишь 18 метров.' },
	{ riverName: 'Интересный факт о реке Амазонка', fact: 'Амазонку в 2011 году признали одним из чудес света.' },
	{ riverName: 'Интересный факт о реке с самым смешным названием', fact: 'Самое веселое название имеет река Куку-река.' },
	{ riverName: 'Интересный факт о реке Нил', fact: 'В 9 и 11 веках река Нил дважды покрывалась льдом.' },
	{ riverName: 'Интересный факт о реке Инд', fact: 'Название Индии произошло именно от названия реки Инд, потому что долины, где протекает данная река, стали жильем первых поселенцев государства.'},
	{ riverName: 'Интересный факт о реке Рейн', fact: 'Фотография с изображение реки Рейн считается самой дорогой в мире. За 4 миллиона она была продана на аукционе.' },
	{ riverName: 'Интересный факт о приговоре реке', fact: 'Случалось, когда реку приговорили к смертной казни. Когда царь Кир, перенаправляясь через реку, потерял жизнь своего коня, он приказал убрать реку.' },
])

const selectedIndex = ref(0)

const getRiverInfo = (wikidataId: string) => {
	router.push({ name: 'info', params: { wikidataId: wikidataId } })
}

const previousFact = () => {
	if (selectedIndex.value > 0) {
		selectedIndex.value -= 1
	}
}

const nextFact = () => {
	if (selectedIndex.value < selectedRiverFacts.value.length - 1) {
		selectedIndex.value += 1
	}
}
</script>

<style scoped></style>

