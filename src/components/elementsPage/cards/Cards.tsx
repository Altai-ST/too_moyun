import { ICards } from '@/interfaces/news.interface'
import Image from 'next/image'
import { FC, useState } from 'react'


import type { RootState } from '@/GlobalRedux/store'

import { useDispatch } from 'react-redux'

import { setValue, setCount } from '@/GlobalRedux/Features/pagination/paginationSlice'

const Cards: FC<ICards> = ({cards}) => {

	const [pageSize, setPageSize] = useState({
		page:1,
		pageSize: 1,	
	})

	const dispatch = useDispatch()

	const handleChange = ()=>{
		setPageSize({...pageSize, pageSize: 3})
		dispatch(setCount(pageSize.pageSize))
		dispatch(setValue(pageSize.page))
	}

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
			<button onClick={handleChange}>Click</button>
		</div>
	)
}

export default Cards
