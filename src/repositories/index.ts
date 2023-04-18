import axios from './api'
import { provide, inject } from 'vue'
import repositoryContainer from '@/repositories'
// ? types
import type { AxiosInstance } from 'axios'
// ? services
import dogs, { type DogsRepo } from './dogs'

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
	} as T
}

export const RepositoryIdentifier = Symbol('api repositories')
export function useRepositoryProvider() {
	provide(RepositoryIdentifier, repositoryContainer(axios))
}
export function useRepositoryContext() {
	return inject(RepositoryIdentifier) as ReturnType<typeof repositories>
}

export default function repositories(axios: AxiosInstance) {
	return {
		get dogs() {
			return lazyBind<DogsRepo>(() => import('./dogs'), dogs(axios), axios)
		},
	}
}
