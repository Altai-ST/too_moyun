import { IGallery } from '@/interfaces/gallery.interface';
import axios from 'axios';



export const GalleryService = {
	async getGallery(page:Number, page_size:Number){
		const { data } = await axios.get<IGallery[]>(`http://92.255.111.47/gallery/?page=${page}&page_size=${page_size}`)	
		return data;
	}
}