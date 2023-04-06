import Layout from '@/components/layouts/Layout'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import { FC } from 'react'

const Cattle: FC = () => {
	return (
		<Layout>
			<div className='h-56 sm:h-64 xl:h-600 2xl:h-600 xl:w-1000'>
				<Carousel slideInterval={5000}>
					<Image src='/carousel1.png' width={1000} height={660} alt='...' />
					<Image src='/carousel1.png' width={1000} height={660} alt='...' />
					<Image src='/carousel1.png' width={1000} height={660} alt='...' />
					<Image src='/carousel1.png' width={1000} height={660} alt='...' />
					<Image src='/carousel1.png' width={1000} height={660} alt='...' />
				</Carousel>
			</div>
		</Layout>
	)
}

export default Cattle
