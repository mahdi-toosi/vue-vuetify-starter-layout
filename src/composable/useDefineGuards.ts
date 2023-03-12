// ? vue
import { nextTick } from 'vue'
import { useGlobalStore } from '@/store'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export async function beforeEach(
	_to: RouteLocationNormalized,
	_from: RouteLocationNormalized,
	next: NavigationGuardNext
) {
	const globalStore = useGlobalStore()
	globalStore.setLoading(true)
	await nextTick()

	next()
}

export function afterEach(to: RouteLocationNormalized) {
	const globalStore = useGlobalStore()
	globalStore.setLoading(false)

	if (to.meta.title) document.title = to.meta.title || ''
}
