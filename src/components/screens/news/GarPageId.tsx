import { getFirstGar } from '@/GlobalRedux/Features/firstGetData/firstGetDataSlice'
import { AppDispatch, RootState } from '@/GlobalRedux/store'
import { idCard } from '@/interfaces/cardNews.interface'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GarPageId: FC<idCard> = (id) => {

	const cardNews = useSelector((state: RootState) => state.firstData)

	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(getFirstGar({ page: 1, pageSize: 4 }))
	}, [])

	const card = () => {
		return cardNews.garNews.results.filter(el => el.id === id.id)
	}

	const cardEl = card();

	return <div>
		<div className='flex flex-col items-center mt-20 mb-72'>
			<Image className='mb-20' src={cardEl[0] === undefined ? "" : typeof cardEl[0].img === 'string' ? cardEl[0].img : ""} alt='' width={388} height={388}/>
			<p className='text-2xl font-bold text-cardColor'>{cardEl[0] === undefined ? '' :cardEl[0].title}</p>
			<p className='text-lg text-newsColor'>{cardEl[0] === undefined ? '' :cardEl[0].text}</p>
		</div>
	</div>
}

export default GarPageId