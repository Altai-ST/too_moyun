import { ICards } from '@/interfaces/news.interface'
import Image from 'next/image'
import { FC } from 'react'

const Cards: FC<ICards> = ({cards}) => {
	console.log(cards.results);
	
	return (
		<div className='flex w-1220 flex-wrap justify-between text-center text-2xl font-bold text-cardColor'>
			{cards.results.map(el => {
				return (
					<div className='flex flex-col w-388 mt-6'>
						<Image
							src={el.img}
							width={388}
							height={388}
							alt=''
						/>
						<p>
							{el.text}
						</p>
					</div>
				)
			})}
		</div>
	)
}

export default Cards
