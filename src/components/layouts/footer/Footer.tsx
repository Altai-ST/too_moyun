import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Footer: FC = () => {
	const linkStyle = 'text-lg w-1/2 h-1/3'
	return (
		<footer className='bg-footerBg flex w-full pt-16 text-white pl-44 font-light pb-14'>
			<div className='flex flex-col items-center w-72 text-lg text-center mr-20'>
				<Image src='/logo.png' alt='' width={67} height={67} />
				<p>Тоо моюн айылдын расмий баракчасы</p>
			</div>
			<div className='flex flex-col flex-wrap h-36 justify-between w-96 mt-6'>
				<Link href='/' className={linkStyle}>
					Башкы бет
				</Link>
				<Link href='/about-us' className={linkStyle}>
					Биз жонундо
				</Link>
				<Link href='/advert' className={linkStyle}>
					Жарыялар
				</Link>
				<Link href='/news' className={linkStyle}>
					Маалытматтар
				</Link>
				<Link href='/revolution' className={linkStyle}>
					Токтомдор
				</Link>

				<Link href='/gallery' className={linkStyle}>
					Фотогалерея
				</Link>
			</div>
		</footer>
	)
}

export default Footer
