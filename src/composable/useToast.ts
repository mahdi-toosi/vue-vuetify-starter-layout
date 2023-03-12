import { ref } from 'vue'
// ? types
export type Variant = 'error' | 'success' | 'warning' | 'info'
type Variants = Record<Variant, { color: string }>
interface ToastPayload {
	msg: string
	mode?: Variant
	timeout?: number
	hideCloseButton?: boolean
}
interface Toast extends ToastPayload {
	variant: { color: string }
}

// State
const queue = ref<Toast[]>([])
export const show = ref(false)
export const toast = ref({} as Toast)
const defaultVariant: Variant = 'error'
const variants = {
	error: { color: 'red' },
	info: { color: 'blue-grey' },
	success: { color: 'green' },
	warning: { color: 'orange' },
} as Variants

// Actions
export function showToast(payload: ToastPayload) {
	const _toast = { ...payload, variant: variants[payload.mode || defaultVariant] } as Toast
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
