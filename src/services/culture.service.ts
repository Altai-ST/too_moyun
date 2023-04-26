import { ICulture } from './../interfaces/culture.interface';
import { CommonInfoI } from './../interfaces/common-info.interface';

import axios from 'axios';


export const CultureService={
	async getCulture(){
		const { data } = await axios.get<ICulture>(`http://92.255.111.47/culture/`)	
		
		return data;
	}
}