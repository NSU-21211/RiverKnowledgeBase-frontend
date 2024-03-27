import { createRouter, createWebHistory } from 'vue-router'
import RiverListView from '@/views/RiverListView.vue'
import HomeView from '@/views/HomeView.vue'
import RiverInfoView from '@/views/RiverInfoView.vue'
import LinearSchemeView from '@/views/LinearSchemeView.vue'

const router = createRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/river/list',
			name: 'list',
			component: RiverListView
		},
		{
			path: '/river/info/:riverName',
			name: 'info',
			component: RiverInfoView,
			props: true,
			children: [
				{
					path: '/river/scheme',
					name: 'scheme',
					component: LinearSchemeView
				}
			]
		}
	],
	history: createWebHistory()
})

export { router }
