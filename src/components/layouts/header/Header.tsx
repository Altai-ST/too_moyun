import DowndropLink from '@/components/elementsPage/downdrop/DowndropLink'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

const Header: FC = () => {
	const {pathname} = useRouter();

	const linkStyle = `text-navColor hover:text-black py-4`;

	const linkStyleActive = `hover:text-black py-4 active:text-black`

	

	return (
		<div> 
			<header className='flex items-center w-full pt-12 px-24 justify-center text-lg pb-8'>
				<div className='mr-8'>
					<Image src='/logo.png' alt='' width={67} height={67}/>
				</div>
				<div className='mx-2 mt-0 flex justify-between w-2/3'>
					<Link href='/' className={pathname === '/' ? linkStyleActive : linkStyle}>
						Башкы бет 
					</Link>
					<DowndropLink/>
					<Link
						href='/news'
						className={pathname === '/news' ? linkStyleActive : linkStyle}
					>
						Жарыялар
					</Link>
					<Link
						href='/press'
						className={linkStyle}
					>
						Пресса
					</Link>
					<Link
						href='/malymattar'
						className={pathname === '/malymattar' ? linkStyleActive : linkStyle}
					>
						Маалытматтар
					</Link>
					<Link
						href='/revolution'
						className={linkStyle}
					>
						Токтомдор
					</Link>
					
					<Link
						href='/photoGallery'
						className={linkStyle}
					>
						Фотогалерея
					</Link>
				</div>
				<div>
					{/* <img/> */}
					<input className='w-64 rounded-3xl pl-12 bg-searchBg text-searchColor py-2' placeholder='Search for...'/>
				</div>
			</header>
		</div>
	)
}

export default Header
