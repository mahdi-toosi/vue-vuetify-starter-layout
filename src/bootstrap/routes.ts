import type { RouteRecordRaw } from 'vue-router'

export default class Router {
	name!: 'Router'
	#routes!: RouteRecordRaw[]

	constructor() {
		this.name = 'Router'
		this.#routes = []
	}

	public registerRoutes(routes: RouteRecordRaw[] = []) {
		this.#routes = [...this.#routes, ...routes]
	}

	get routes(): RouteRecordRaw[] {
		return [
			...this.#routes,
			{
				path: '/:catchAll(.*)',
				name: '404',
				meta: { title: 'page not found', layout: 'none' },
				component: () => import('@/modules/dashboard/pages/404.vue'),
			},
		]
	}
}
