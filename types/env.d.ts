/* eslint spaced-comment: off */
/// <reference types="vite/client" />

// Vuetify color fix.
declare module 'vuetify/lib/util/colors.mjs'

interface ImportMetaEnv {
	// see https://vitejs.dev/guide/env-and-mode.html#env-files
	// add .env variables.
	readonly NODE_ENV: string
	readonly VITE_BASE_URL: string
	readonly VITE_DEFAULT_TITLE: string
	readonly VITE_APP_WEBSTORAGE_NAMESPACE: string
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
	readonly env: ImportMetaEnv
}
