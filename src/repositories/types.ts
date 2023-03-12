export type Res<A = 'success', B = undefined, C = undefined, D = undefined> = Promise<A | B | C | D>

export interface Paginate<T> {
	data: T[]
	to: number
	path: string
	total: number
	from: number
	per_page: number
	last_page: number
	current_page: number
}
