export interface IResult{
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