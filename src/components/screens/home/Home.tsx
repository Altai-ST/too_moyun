'use client';

import Gallery from '@/components/layouts/gallery/Gallery'
import Layout from '@/components/layouts/Layout'
import News from '@/components/layouts/news/News'
import Statistic from '@/components/layouts/statistic/Statistic'
import { getFirstCards, getFirstGallery } from '@/GlobalRedux/Features/firstGetData/firstGetDataSlice'
import { getCards, getGallery } from '@/GlobalRedux/Features/pagination/paginationSlice'
import { AppDispatch, RootState } from '@/GlobalRedux/store'
import { IGalleryData } from '@/interfaces/gallery.interface'
import { ICards } from '@/interfaces/news.interface'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home: FC = () => {
	const cards = useSelector((state: RootState)=>state.firstData)

	const dispatch = useDispatch<AppDispatch>()

	useEffect(()=>{
		dispatch(getFirstCards({page:1, pageSize:4}))
		dispatch(getFirstGallery({page:1, pageSize:2}))
	},[])
	
	return (
		<>
			<div className='flex laptop:justify-center   justify-start laptop:mt-10 mt-0 '>
				<div className='h-600 laptop:w-1000 w-full'>
					<Carousel slideInterval={5000}>
						<Image src='/carousel1.png' width={1000} height={660} alt='...' />
						<Image src='/carousel1.png' width={1000} height={660} alt='...' />
						<Image src='/carousel1.png' width={1000} height={660} alt='...' />
						<Image src='/carousel1.png' width={1000} height={660} alt='...' />
						<Image src='/carousel1.png' width={1000} height={660} alt='...' />
					</Carousel>
				</div>
			</div>
			<News cards={cards.newsCards} />
			<Gallery gallery={cards.gallery} />
			{/* <Statistic /> */}
		</>
	)
}

export default Home
