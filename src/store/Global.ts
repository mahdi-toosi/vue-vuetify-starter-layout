import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('global', () => {
	// State

	const loading = ref<boolean>(true)
	const progress = ref<number | null>(null)

	// Actions

	function setLoading(display: boolean) {
		loading.value = display
		if (!display) {
			progress.value = null
		}
	}

	function setProgress(val: number | null = null) {
		progress.value = val
		loading.value = true
	}

	return { loading, progress, setLoading, setProgress }
})
