const riverInfoResponseJsonMock = `{
        "riverLink": "http://www.wikidata.org/entity/Q973",
        "label": "Обь",
        "length": "3650",
        "watershedArea": 2990000,
        "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Ob%20u%20Barnaulu.jpg",
        "tributaries": [
        "Панинский",
        "Чемровка",
        "Алей",
        "Квеш",
        "Ларьёган",
        "Вычьях",
        "Большая Мегипугольская",
        "Ламская",
        "Хатасъюган",
        "Повалиха"
        ],
        "origin": ["Катунь"],
        "administrativeTerritorial": "Ханты-Мансийский автономный округ — Югра",
        "mouth": ["Карское море"],
        "country": "Россия"
    }`

const linearSchemeDataMock = {
	name: 'Река',
	children: [
		{ name: 'Алей \n  10 km' },
		{ name: 'Иня \n  20 km' },
		{ name: 'Песчаная \n  30 km' },
		{ name: '' }
	]
}

const linearSchemeCoordinatesMock = [
	{ x: 100, y: 100 },
	{ x: 600, y: 300 },
	{ x: 100, y: 500 },
	{ x: 350, y: 800 }
]

const imageSourceMock =
	'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/March_evening._The_sun_fell_across_the_Ob_river.jpg/1599px-March_evening._The_sun_fell_across_the_Ob_river.jpg'

const riverListMock = ['Обь', 'Енисей', 'Катунь']

export { riverInfoResponseJsonMock }
export { linearSchemeDataMock }
export { linearSchemeCoordinatesMock }
export { imageSourceMock }
export { riverListMock }
