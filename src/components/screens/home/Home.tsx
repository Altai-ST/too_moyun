import Gallery from '@/components/layouts/gallery/Gallery'
import Layout from '@/components/layouts/Layout'
import News from '@/components/layouts/news/News'
import Statistic from '@/components/layouts/statistic/Statistic'
import {IGalleryData } from '@/interfaces/gallery.interface'
import { ICards } from '@/interfaces/news.interface'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import React, { FC } from 'react'

const Home: FC<ICards & IGalleryData> = ({cards, gallery}) => {
	return (
		<Layout>
			<div className='flex justify-center mt-10'>
				<div className='h-56 sm:h-64 xl:h-600 2xl:h-600 xl:w-1000'>
					<Carousel slideInterval={5000}>
						<Image src='/carousel1.png' width={1000} height={660} alt='...' />
						<Image src='/carousel1.png' width={1000} height={660} alt='...' />
						<Image src='/carousel1.png' width={1000} height={660} alt='...' />
						<Image src='/carousel1.png' width={1000} height={660} alt='...' />
						<Image src='/carousel1.png' width={1000} height={660} alt='...' />
					</Carousel>
				</div>
			</div>
			<News cards={cards}/>
			<Gallery gallery={gallery}/>
			<Statistic/>
		</Layout>
	)
}

export default Home
