import type { IContext } from '@/bootstrap/context'

export default function (ctx: IContext) {
	ctx.Router.registerRoutes([
		{
			path: '/dogs',
			name: 'Dogs',
			meta: { title: 'Dogs', layout: 'admin' },
			component: () => import('./pages/Dogs.vue'),
		},
	])
}
