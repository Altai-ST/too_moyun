import { ICards } from '@/interfaces/news.interface'
import Image from 'next/image'
import { FC, useState } from 'react'

import { useDispatch } from 'react-redux'

import { setValue, setCount } from '@/GlobalRedux/Features/pagination/paginationSlice'

const Cards: FC<ICards> = ({cards}) => {

	// const [pageSize, setPageSize] = useState({
	// 	page:1,
	// 	pageSize: 1,	
	// })

	// const dispatch = useDispatch()

	// const handleChange = ()=>{
	// 	setPageSize({...pageSize, pageSize: 3})
	// 	dispatch(setCount(pageSize.pageSize))
	// 	dispatch(setValue(pageSize.page))
	// }

	return (
		<div className='flex laptop:flex-row flex-col laptop:w-1220 w-full flex-wrap laptop:justify-between text-center text-2xl font-bold text-cardColor'>
			{cards.results.map(el => {
				return (
					<div className='flex flex-col laptop:w-388 w-full laptop:mt-6 laptop:mb-0 mb-6 px-3'>
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
			{/* <button onClick={handleChange}>Click</button> */}
		</div>
	)
}

export default Cards
