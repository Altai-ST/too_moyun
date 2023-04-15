export interface IResult{
	id: number
	photo: string
	description: string
}


export interface IGallery{
	count: Number
	next: Number
	pervious: Number
	results: IResult[]
}


export interface IGalleryData{
	gallery: IGallery
}