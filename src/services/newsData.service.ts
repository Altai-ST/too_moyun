import { INews } from './../interfaces/news.interface';
import axios from 'axios';

// const API_URL = 'aimesh777.pythonanywhere.com/';

// axios.defaults.baseURL = API_URL;

export const NewsService = {
	async getSix(){
		console.log("he");
		const { data } = await axios.get<INews[]>('https://aimesh777.pythonanywhere.com/ky/news/')	
		return data;
	}
}