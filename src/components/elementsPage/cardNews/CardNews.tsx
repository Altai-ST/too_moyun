import { ICardNews } from '@/interfaces/cardNews.interface'
import { FC } from 'react'
//cardNews1.png
const CardNews: FC = () => {
	return <div className='flex flex-col px-10 text-white bg-black w-555 h-500 rounded-lg justify-center'>
		<div className='flex flex-col justify-center mb-24 h-1/3'>
			<h1 className='text-4xl font-bold'>Аналитикалык маалымат.</h1>
			<p className='text-lg '>Географиялык жайгашкан жери, климаты</p>
		</div>
		<p>Кенен билүү</p>
	</div>
}

export default CardNews