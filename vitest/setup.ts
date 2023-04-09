/**
 * Vitest setup function
 */
export async function setup() {
	global.CSS = {
		supports: () => false,
		escape: (str: string) => str,
	}
	// eslint-disable-next-line no-console
	console.log('📝 vitest globalSetup2.')
	// console.log("CSS.support:" + CSS.supports("selector(:focus-visible)"));
}

/**
 * Vitest Teardown function
 */
export async function teardown() {
	// eslint-disable-next-line no-console
	console.log('📝 vitest globalTeardown')
}
