import { INews } from './../interfaces/news.interface';
import axios from 'axios';

// const API_URL = 'aimesh777.pythonanywhere.com/';

// axios.defaults.baseURL = API_URL;

export const NewsService = {
	async getSix(page: Number, page_size:Number){
		const { data } = await axios.get<INews[]>(`http://92.255.111.47/news/?page=${page}&page_size=${page_size}`)	
		return data;
	},
	async getNewsOne(page: Number, page_size: Number){
		const { data } = await axios.get<INews>(`http://92.255.111.47/information/?page=${page}&page_size=${page_size}`)	
		return data.results;
	}
}