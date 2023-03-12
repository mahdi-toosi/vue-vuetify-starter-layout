import { ref } from 'vue'
import { defineStore } from 'pinia'

/** Config Store */
export default defineStore(
	'dashboard',
	() => {
		const isDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

		function toggleTheme() {
			isDark.value = !isDark.value
		}
		// Data persistence destination

		return { isDark, toggleTheme }
	},
	{
		persist: {
			key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE || 'vuetify',
			storage: window.localStorage,
		},
	}
)
