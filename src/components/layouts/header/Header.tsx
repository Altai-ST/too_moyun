import DowndropLink from '@/components/elementsPage/downdrop/DowndropLink'
import { getAllSearch } from '@/GlobalRedux/Features/search/searchSlice'
import { AppDispatch } from '@/GlobalRedux/store'
import { Size, useReSize } from '@/hooks/useReSize'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

const Header: FC = () => {
	const { pathname } = useRouter()

	// const router = useRouter()

	const linkStyle = `text-navColor hover:text-black py-4`

	const linkStyleActive = `hover:text-black py-4 active:text-black`

	const size: Size = useReSize()

	// const [searchWord, setSearchWord]=useState('')

	// const dispatch = useDispatch<AppDispatch>()

	// const handleChange=(val: any)=>{
	// 	setSearchWord(val.value)	
	// }

	// const handleClick=()=>{
	// 	if(pathname === '/'){
	// 		dispatch(getAllSearch({cat:'all', q:searchWord}))
	// 		router.push('/search')
	// 	}
	// }


	return (
		<div>
			<header className='flex items-center w-full laptop:pt-12 pt-2 laptop:px-24 px-5 laptop:justify-center justify-between text-lg pb-8'>
				<div className='laptop:mr-8'>
					<Image src='/logo.png' alt='' width={67} height={67} />
				</div>
				{size.width === undefined ? (
					<></>
				) : size.width >= 1024 ? (
					<div className='mx-2 mt-0 flex justify-between w-2/3'>
						<Link
							href='/'
							className={pathname === '/' ? linkStyleActive : linkStyle}
						>
							Башкы бет
						</Link>
						<DowndropLink />
						<Link
							href='/garNews'
							className={pathname === '/garNews' ? linkStyleActive : linkStyle}
						>
							Жарыялар
						</Link>
						<Link href='/newsPage' className={pathname === '/newsPage' ? linkStyleActive : linkStyle}>
							Пресса
						</Link>
						<Link
							href='/malymattar'
							className={
								pathname === '/malymattar' ? linkStyleActive : linkStyle
							}
						>
							Маалытматтар
						</Link>
						<Link href='/download' className={pathname === '/download' ? linkStyleActive : linkStyle}>
							Токтомдор
						</Link>

						<Link href='/photoGallery' className={pathname === '/photoGallery' ? linkStyleActive : linkStyle}>
							Фотогалерея
						</Link>
					</div>
				) : (
					<></>
				)}

				<div className='relative'>
					<button className='absolute laptop:top-3 laptop:left-4 top-3 left-3'>
						<Image src='/search.png' alt='' width={16} height={16}/>
					</button>
					<input
						
						className='laptop:w-64 laptop:rounded-3xl laptop:pl-12 bg-searchBg text-searchColor laptop:py-2 w-10 h-10 rounded-full focus:w-64 active:w-64 focus:pl-12 active:pl-12 pr-5'
						placeholder={size.width === undefined ? (
							''
						) : size.width >= 1024 ? 'Search for...' : ''}
					/>
				</div>
			</header>
		</div>
	)
}

export default Header
