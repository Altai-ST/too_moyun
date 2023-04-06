import { IGallery } from '@/interfaces/gallery.interface';
import axios from 'axios';

export const GalleryService = {
	async getGallery(){
		const { data } = await axios.get<IGallery[]>('https://aimesh777.pythonanywhere.com/ru/gallery/')	
		return data;
	}
}