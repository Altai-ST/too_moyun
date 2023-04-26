import { IFaq } from './../interfaces/faq.interface';
import axios from 'axios';



export const FaqService = {
	async getFaq(){
		const { data } = await axios.get<IFaq[]>(`http://92.255.111.47/faq/`)	
		return data;
	}
}