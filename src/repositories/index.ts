import axios from './api'
import { provide, inject } from 'vue'
import type { AxiosInstance } from 'axios'
import repositoryContainer from '@/repositories'
// ? services
import cats, { type CatsRepo } from './cats'

interface Services {
	cats: CatsRepo
}

function lazyBind<T>(repoFactory: any, repoInterface: T, axios: AxiosInstance) {
	return {
		...Object.keys(repoInterface as any).reduce((acc, method: any) => {
			const resolvedMethod = async (...args: any[]) => {
				const repo: any = await repoFactory()
				return repo.default(axios)[method](...args)
			}
			return {
				...acc,
				[method]: resolvedMethod,
			}
		}, {}),
	}
}

export const RepositoryIdentifier = Symbol('api repositories')
export function useRepositoryProvider() {
	provide(RepositoryIdentifier, repositoryContainer(axios))
}
export function useRepositoryContext() {
	return inject(RepositoryIdentifier) as Services
}

export default function repositories(axios: AxiosInstance) {
	return {
		get cats() {
			return lazyBind<CatsRepo>(() => import('./cats'), cats(axios), axios)
		},
	}
}
