import { ref } from 'vue'
// ? types
export type Mode = 'error' | 'success' | 'warning' | 'info' | 'secondary'
interface Toast {
	msg: string
	mode?: Mode
	timeout?: number
	hideCloseButton?: boolean
}

// State
const queue = ref<Toast[]>([])
export const show = ref(false)
const defaultMode: Mode = 'error'
export const toast = ref({} as Toast)

// Actions
export function showToast(payload: Toast) {
	const _toast = { ...payload, mode: payload.mode || defaultMode } as Toast
	queue.value.push(_toast)
	updateQueue()
}

export function updateQueue() {
	if (show.value) return
	if (!queue.value.length) return
	setTimeout(() => {
		toast.value = queue.value[0]
		show.value = true
	}, 200)
}

export function hideToast() {
	show.value = false
	queue.value.shift()
	updateQueue()
}
