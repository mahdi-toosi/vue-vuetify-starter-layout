import Router from './routes'
import Components from './components'

export type ProviderNames = 'Router' | 'Component'

export interface IContext {
	Router: Router
	Component: Components
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
type Constructor<T> = new (...args: any[]) => T

class ContextAdapter {
	#providerNames: ProviderNames[]

	constructor() {
		this.#providerNames = []
	}

	register<T extends { name: ProviderNames }>(Provider: Constructor<T>) {
		const service = new Provider()
		const providerName = service.name

		if (this.#providerNames.includes(providerName)) {
			throw `provider ${providerName} exists!`
		}

		this.#providerNames.push(providerName)
		// @ts-ignore
		this[providerName] = service
	}
}

const context = new ContextAdapter()

context.register(Router)
context.register(Components)

export default context as unknown as IContext
