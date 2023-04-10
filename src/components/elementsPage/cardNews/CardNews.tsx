import { ICardNews } from '@/interfaces/cardNews.interface'
import Image from 'next/image'
import { FC } from 'react'
//cardNews1.png
const CardNews: FC = () => {
	return (
		<div className='flex flex-col px-10 text-white w-555 h-500 rounded-lg justify-center relative pt-32'>
			
			<div className='absolute inset-0'>
				<Image src={'/cardNews1.png'} alt='' width={500} height={500} />
			</div>
			<div className='w-500 h-450 bg-black opacity-50 z-9 absolute inset-0 rounded-2xl'>
			</div>
			<div className='flex flex-col justify-center mb-24 h-1/4 z-10 relative'>
				<h1 className='text-3xl font-bold'>Аналитикалык маалымат.</h1>
				<p className='text-lg '>Географиялык жайгашкан жери, климаты</p>
			</div>
			<p>Кенен билүү</p>
		</div>
	)
}

export default CardNews
