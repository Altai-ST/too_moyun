import { IDownload } from './../interfaces/download.interface';
import axios from 'axios';



export const DownloadService = {
	async getFile(){
		const { data } = await axios.get<IDownload[]>(`http://92.255.111.47/resolve/`)	
		return data;
	}
}