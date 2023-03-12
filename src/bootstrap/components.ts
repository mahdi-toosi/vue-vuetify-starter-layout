import type { App, Component as VueComponent } from 'vue'

type Cmp = {
	name: string
	component: VueComponent
}

export default class Component {
	name!: 'Component'

	constructor() {
		this.name = 'Component'
	}

	public register<T extends Cmp>(app: App<Element>, cmp: T) {
		if (cmp.name === undefined) {
			throw 'Missing prop name in component'
		}

		app.component(cmp.name, cmp.component)
	}
}
