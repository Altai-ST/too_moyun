import axios from 'axios'
import { IMap } from './../interfaces/map.interface';
export const MapService={
	async getMap(){
		const { data } = await axios.get<IMap>(`http://92.255.111.47/address/`)	
		return data;
	},
}