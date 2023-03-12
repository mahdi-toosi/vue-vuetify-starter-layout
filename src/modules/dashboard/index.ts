import type { IContext } from '@/bootstrap/context'

export const dashboard_bread = { title: 'داشبورد', name: 'Home' }

export default function (ctx: IContext) {
	ctx.Router.registerRoutes([
		{
			path: '/',
			name: dashboard_bread.name,
			meta: { title: dashboard_bread.title, layout: 'default' },
			component: () => import('./pages/Home.vue'),
		},
		{
			path: '/about',
			name: 'About',
			meta: { title: 'About', layout: 'default' },
			component: () => import('./pages/TestToast.vue'),
		},
		{
			path: '/cats',
			name: 'Cats',
			meta: { title: 'Cats', layout: 'default' },
			component: () => import('./pages/TestToast.vue'),
		},
	])
}
