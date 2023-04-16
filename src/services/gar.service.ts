import { INews } from './../interfaces/news.interface';
import axios from 'axios';
import { IGar } from '@/interfaces/gar.interface'

export const GarService = {
	async getGarCards(page: Number, page_size:Number){
		const { data } = await axios.get<IGar[]>(`http://92.255.111.47/ads/?page=${page}&page_size=${page_size}`)	
		return data;
	}
}