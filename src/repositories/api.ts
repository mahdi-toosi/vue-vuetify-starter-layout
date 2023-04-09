/* eslint-disable @typescript-eslint/no-non-null-assertion */
import router from '../router'
import { showToast } from '@/composable/useToast'
import useDebounceFn from '@/composable/useDebounceFn'
import axios, {
	type AxiosResponse,
	type AxiosRequestConfig,
	type InternalAxiosRequestConfig,
} from 'axios'

export const baseURL = import.meta.env.VITE_BASE_URL

const axiosInstance = axios.create({ baseURL })

function handleRequest(config: AxiosRequestConfig) {
	const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY_IN_LOCAL_STORAGE)
	if (token) {
		// config.headers!['Authorization'] = token
	}
	return config as InternalAxiosRequestConfig
}

function handleResponse(response: AxiosResponse) {
	return response.data
}

axiosInstance.interceptors.request.use(handleRequest)

axiosInstance.interceptors.response.use(handleResponse, error => {
	if (!error) return

	if (error.response?.status === 401 && window.location.pathname !== '/auth') {
		localStorage.clear()
		router.push({ name: 'login' })
		return
	}

	let sended = 0
	function showError(msg: string) {
		++sended
		showToast({ msg })
	}

	if (error.response?.data) {
		const errors = error.response.data.errors
		for (const errorKey in errors) {
			const err = errors[errorKey]
			err.forEach((error_msg: string) => showError(error_msg))
		}
	}

	if (!sended) showError(error.response?.data.message || error.message)
})

export default axiosInstance
