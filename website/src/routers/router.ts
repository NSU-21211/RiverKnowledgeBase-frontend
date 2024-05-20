import { createRouter, createWebHistory } from 'vue-router'
import RiverListView from '@/core/views/RiverListView.vue'
import HomeView from '@/core/views/HomeView.vue'
import RiverInfoView from '@/core/views/RiverInfoView.vue'
import LinearSchemeView from '@/core/views/LinearSchemeView.vue'
import About from "@/core/views/About.vue";

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
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/river/info/:wikidataId',
			name: 'info',
			component: RiverInfoView,
			props: true,
			children: [
				{
					path: '/river/scheme/:wikidataId',
					name: 'scheme',
					component: LinearSchemeView
				}
			]
		}
	],
	history: createWebHistory()
})

export { router }
