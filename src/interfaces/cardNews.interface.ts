export interface IResult{
	img: string
	text: string
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