import { createRouter, createWebHistory } from 'vue-router'
import RiverListView from '@/core/views/RiverListView.vue'
import HomeView from '@/core/views/HomeView.vue'
import RiverInfoView from '@/core/views/RiverInfoView.vue'
import LinearSchemeView from '@/core/views/LinearSchemeView.vue'

const router = createRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/river/list/:riverName',
			name: 'list',
			props: true,
			component: RiverListView
		},
		{
			path: '/river/info/:riverName', // TODO: use wikidataId instead of riverName
			name: 'info',
			component: RiverInfoView,
			props: true,
			children: [
				{
					path: '/river/scheme/:riverName',
					name: 'scheme',
					component: LinearSchemeView
				}
			]
		}
	],
	history: createWebHistory()
})

export { router }
