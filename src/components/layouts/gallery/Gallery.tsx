import { IGalleryData } from '@/interfaces/gallery.interface'
import { Button } from 'flowbite-react'
import Image from 'next/image'
import { FC } from 'react'

const Gallery: FC<IGalleryData> = ({gallery}) => {
	// console.log(gallery[0].photo);
	
	return <div className='text-center my-24 flex flex-col items-center'>
		<h2 className='text-3xl font-bold mb-16'>Галерея</h2>
		<div className='flex flex-wrap w-1140 justify-between h-670 mb-16'>
			<Image src={gallery.results[0].photo} alt='' width={750} height={320} />
			<Image src={gallery.results[1].photo} alt='' width={360} height={320} />
			<Image className='mt-8' src={gallery.results[1].photo} alt='' width={360} height={320} />
			<Image className='mt-8' src={gallery.results[0].photo} alt='' width={750} height={320} />
		</div>
		<Button className='w-56 text-xl py-1'>Фотографияларга отуу</Button>
	</div>
}

export default Gallery