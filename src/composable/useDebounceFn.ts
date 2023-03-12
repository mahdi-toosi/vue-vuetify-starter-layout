/* eslint-disable @typescript-eslint/no-explicit-any */
export default function useDebounceFn(fn: any, timeout: number) {
	let timerId = 0

	return function (this: any, ...args: any[]) {
		if (timerId) {
			clearTimeout(timerId)
		}

		timerId = window.setTimeout(() => {
			fn.apply(this, args)
			clearTimeout(timerId)
		}, timeout)
	}
}
