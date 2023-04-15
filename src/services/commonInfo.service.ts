import { CommonInfoI } from './../interfaces/common-info.interface';

import axios from 'axios';


export const CommonInfoService={
	async getCommonInfo(){
		const { data } = await axios.get<CommonInfoI>(`http://92.255.111.47/common-info/`)	
		
		return data;
	}
}