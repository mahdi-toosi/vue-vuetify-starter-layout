import { beforeAll } from 'vitest'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(global as any).CSS = { supports: () => false }

beforeAll(() => {
	// eslint-disable-next-line no-console
	console.log('beforeAll')
	global.CSS = {
		supports: () => false,
		escape: (str: string) => str,
	}
	// eslint-disable-next-line no-console
	console.log('CSS.support:' + CSS.supports('selector(:focus-visible)'))
})
