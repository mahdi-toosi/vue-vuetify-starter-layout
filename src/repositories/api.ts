/* eslint-disable @typescript-eslint/no-non-null-assertion */
import router from '../router'
import useStoreToast from '@/composable/useStoreToast'
import useDebounceFn from '@/composable/useDebounceFn'
import axios, {
	type AxiosResponse,
	type AxiosRequestConfig,
	type InternalAxiosRequestConfig,
} from 'axios'

const { showToast } = useStoreToast()

export const baseURL = localStorage.getItem('baseUrl') || (import.meta.env?.VITE_BASE_URL as string)

const axiosInstance = axios.create({ baseURL })

function handleRequest(config: AxiosRequestConfig) {
	const token = localStorage.getItem('token')
	if (token) {
		config.headers!['Authorization'] = token
	}

	const workspace_uuid = localStorage.getItem('workspace_uuid')
	if (workspace_uuid) config.headers!['X-WORKSPACE-UUID'] = workspace_uuid

	return config as InternalAxiosRequestConfig
}

const show490Toast = useDebounceFn(async (detail: string) => {
	showToast({ detail })
}, 2000)

function handleResponse(response: AxiosResponse) {
	return response.data
}

axiosInstance.interceptors.request.use(handleRequest)

axiosInstance.interceptors.response.use(handleResponse, error => {
	if (!error) return

	if (error.response?.status === 490) {
		show490Toast(error.response?.data.message)

		if (!localStorage.getItem('redirect'))
			localStorage.setItem('redirect', window.location.pathname)
		router.push({ name: 'MobileVerification' })
		return
	}

	if (error.response?.status === 401 && window.location.pathname !== '/auth') {
		localStorage.clear()
		router.push({ name: 'login' })
		return
	}

	let sended = 0
	function showError(msg: string) {
		++sended
		showToast({ detail: msg })
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
