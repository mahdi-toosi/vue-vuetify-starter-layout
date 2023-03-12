import type { IContext } from '@/bootstrap/context'

const modules = import.meta.glob('../modules/*/index.ts')

export default async function bootstrap(context: IContext) {
	const mods: IContext[] = []

	for (const path in modules) {
		const mod = await modules[path]()
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		mods.push((mod as any).default(context))
	}

	return Promise.all(mods)
}
