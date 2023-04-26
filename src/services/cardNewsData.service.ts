import { ICardNews } from '@/interfaces/cardNews.interface';

import axios from 'axios';


export const CardNewsService={
	async getCardNews(page: Number, page_size: Number){
		const { data } = await axios.get<ICardNews>(`http://92.255.111.47/information/?page=${page}&page_size=${page_size}`)	
		return data;
	},

	async getCardNewsOne(page: Number, page_size: Number){
		const { data } = await axios.get<ICardNews>(`http://92.255.111.47/information/?page=${page}&page_size=${page_size}`)	
		return data.results;
	}
}