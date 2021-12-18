export interface ICreateCategory {
	id?: string
	description: string
	name?: string
}

export interface VideosReq {
	id?: string
	name: string
	duration: number
	description: string
	category_id: string
}
