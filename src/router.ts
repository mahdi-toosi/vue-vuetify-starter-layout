import { createRouter, createWebHistory } from 'vue-router'
import { beforeEach, afterEach } from './composable/useDefineGuards'
// ? types
import type { RouteRecordRaw } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [],
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export function registerRoutes(routes: RouteRecordRaw[]) {
	routes.forEach(_routes => router.addRoute(_routes))
}

export default router
