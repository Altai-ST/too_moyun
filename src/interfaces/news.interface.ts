export interface IResult{
	img: string
	title: String
	text: String
}


export interface INews{
	count: Number
	next: Number
	pervious: Number
	results: IResult[]
}


export interface ICards{
	cards: INews
}