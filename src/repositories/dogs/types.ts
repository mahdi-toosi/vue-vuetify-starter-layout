import type { Res } from '../types'

export type Dog = string

export interface DogsRepo {
	getDogs(params: { count: number }): Res<Dog[]>
}
