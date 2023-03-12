import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

//  ? RouterMeta
declare module 'vue-router' {
	interface RouteMeta {
		title: string
	}
	NavigationGuardNext
	RouteLocationNormalized
}
//  ? ENd RouterMeta
