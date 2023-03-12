/**
 * Vuetify3 Plugin
 */
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createVuetify } from 'vuetify'
// For test use. Do not include createVuetify()
// see https://next.vuetifyjs.com/en/features/treeshaking/
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Translations provided by Vuetify
import { fa } from 'vuetify/locale'
// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
	// Global configuration
	// https://next.vuetifyjs.com/en/features/global-configuration/
	/*
	defaults: {
		global: {
		ripple: false,
		},
		VSheet: {
		elevation: 4,
		},
	},
  */
	// Icon Fonts
	// https://next.vuetifyjs.com/en/features/icon-fonts/
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: { mdi },
	},
	// Internationalization (i18n)
	// https://next.vuetifyjs.com/en/features/internationalization/#internationalization-i18n
	locale: {
		locale: 'fa',
		fallback: 'fa',
		messages: { fa },
		rtl: { fa: true },
	},
	// Theme
	// https://next.vuetifyjs.com/en/features/theme/
	theme: {
		defaultTheme: 'dark',
	},
})

// Export for test.
export { components, directives }
