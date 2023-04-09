import type { AxiosInstance } from 'axios'
import type { DogsRepo } from './types'
export type { DogsRepo }

const dogsService = '/shibes'

export default (axios: AxiosInstance): DogsRepo => ({
	getDogs(params) {
		return axios.get(dogsService, { params })
	},
})
