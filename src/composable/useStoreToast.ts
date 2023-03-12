// ? vue
import { ref } from 'vue'
// ? types
type TheToast = {
	severity?: 'success' | 'info' | 'warn' | 'error'
	life?: number
	detail?: string
}

const toast = ref({ severity: 'error', detail: '', life: 3000 } as TheToast)

export default function useStoreToast() {
	return {
		toast,

		showToast: (new_toast: TheToast) => {
			const defaultToast = { severity: 'error', detail: '', life: 3000 } as TheToast
			toast.value = { ...defaultToast, ...new_toast }
		},
	}
}
