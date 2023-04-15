export interface IResult{
	id: number
	title: string
	img: string
	text: string
	bottom_title: string
	bottom_text: string
	img_1: string
	img_2: string
	img_3: string
}


export interface ICardNews{
	count: Number
	next: Number
	pervious: Number
	results: IResult[]
}


export interface ICardsData{
	cardNews: ICardNews
}