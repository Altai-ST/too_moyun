import DowndropLink from '@/components/elementsPage/downdrop/DowndropLink'
import { Size, useReSize } from '@/hooks/useReSize'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

const Header: FC = () => {
	const { pathname } = useRouter()

	const linkStyle = `text-navColor hover:text-black py-4`

	const linkStyleActive = `hover:text-black py-4 active:text-black`
	const size: Size = useReSize()

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
							href='/news'
							className={pathname === '/news' ? linkStyleActive : linkStyle}
						>
							Жарыялар
						</Link>
						<Link href='/press' className={linkStyle}>
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
						<Link href='/revolution' className={linkStyle}>
							Токтомдор
						</Link>

						<Link href='/photoGallery' className={linkStyle}>
							Фотогалерея
						</Link>
					</div>
				) : (
					<></>
				)}

				<div className='relative'>
					<Image className='absolute laptop:top-3 laptop:left-4 top-3 left-3' src='/search.png' alt='' width={16} height={16}/>
					<input
						className='laptop:w-64 laptop:rounded-3xl laptop:pl-12 bg-searchBg text-searchColor laptop:py-2 w-10 h-10 rounded-full focus:w-64 active:w-64 focus:pl-8 active:pl-8'
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
