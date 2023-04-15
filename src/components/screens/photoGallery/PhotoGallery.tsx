import Layout from '@/components/layouts/Layout'
import Image from 'next/image'
import { FC } from 'react'

const PhotoGallery: FC = () => {
	const imgGallery1Style = 'w-72 h-64 rounded-2xl'

	const imgGallery2Style = 'w-72 h-72 rounded-2xl'

	return (
		<Layout>
			<div className='px-36'>
				<div className='flex w-full h-540 justify-between mb-52'>
					<Image
						className='w-555 h-full rounded-2xl'
						src='/card1.png'
						alt=''
						width={555}
						height={540}
					/>
					<div className='flex flex-wrap justify-between w-1/2 h-full'>
						<Image
							className={imgGallery1Style}
							src='/card2.png'
							alt=''
							width={263}
							height={255}
						/>
						<Image
							className={imgGallery1Style}
							src='/card3.png'
							alt=''
							width={263}
							height={255}
						/>
						<Image
							className='w-72 h-64 rounded-2xl self-end'
							src='/card4.png'
							alt=''
							width={263}
							height={255}
						/>
						<Image
							className='w-72 h-64 rounded-2xl self-end'
							src='/card6.png'
							alt=''
							width={263}
							height={255}
						/>
					</div>
				</div>
				<div className='flex justify-between w-full h-600 mb-24'>
					<div className='flex flex-wrap w-1/4'>
						<Image
							className={`${imgGallery2Style}`}
							src='/card1.png'
							alt=''
							width={284}
							height={284}
						/>
						<Image
							className={`${imgGallery2Style} self-end`}
							src='/card2.png'
							alt=''
							width={284}
							height={284}
						/>
					</div>
					<Image
						className='w-555 rounded-2xl'
						src='/card3.png'
						alt=''
						width={596}
						height={596}
					/>
					<div className='flex flex-wrap w-1/4'>
						<Image
							className={imgGallery2Style}
							src='/card4.png'
							alt=''
							width={284}
							height={284}
						/>
						<Image
							className={`${imgGallery2Style} self-end`}
							src='/card6.png'
							alt=''
							width={284}
							height={284}
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default PhotoGallery
