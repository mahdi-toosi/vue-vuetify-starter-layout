import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

//  ? RouterMeta
declare module 'vue-router' {
	interface RouteMeta {
		title: string
		layout: 'admin' | 'none'
	}
	NavigationGuardNext
	RouteLocationNormalized
}
//  ? ENd RouterMeta
