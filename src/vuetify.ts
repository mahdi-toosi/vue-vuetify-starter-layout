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
	defaults: {
		VTextField: {
			variant: 'underlined',
		},
		VSheet: {
			elevation: 4,
		},
	},
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
		themes: {
			light: {
				colors: {
					background: '#FFFFFF',
					surface: '#FFFFFF',
					'surface-variant': '#424242',
					'on-surface-variant': '#EEEEEE',
					primary: '#094bb7',
					'primary-darken-1': '#3700B3',
					secondary: '#58667a',
					'secondary-darken-1': '#018786',
					error: '#af0f0f',
					info: '#2196F3',
					success: '#4CAF50',
					warning: '#d78b09',
				},
			},
			dark: {
				colors: {
					background: '#121212',
					surface: '#212121',
					'surface-variant': '#BDBDBD',
					'on-surface-variant': '#424242',
					primary: '#094bb7',
					'primary-darken-1': '#3700B3',
					secondary: '#58667a',
					'secondary-darken-1': '#03DAC5',
					error: '#af0f0f',
					info: '#2196F3',
					success: '#4CAF50',
					warning: '#d78b09',
				},
			},
		},
	},
})

// Export for test.
export { components, directives }
