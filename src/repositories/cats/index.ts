import { VERSION_1 } from '../version'
import type { AxiosInstance } from 'axios'
import type { CatsRepo } from './types'
export type { CatsRepo }

const catsService = VERSION_1 + '/auth'

export default (axios: AxiosInstance): CatsRepo => ({
	getCats(params) {
		return axios.get(`${catsService}/login`, { params })
	},
})
