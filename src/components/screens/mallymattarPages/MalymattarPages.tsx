import Layout from '@/components/layouts/Layout'
import { Size, useReSize } from '@/hooks/useReSize'
import { ICardsData, IResult } from '@/interfaces/cardNews.interface'
import Image from 'next/image'
import { FC } from 'react'

const MalymattarPages: FC<IResult> = (props) => {
	const size: Size = useReSize();

	return (
		<>
			<h1 className='w-full text-center text-4xl font-bold text-red-600 mb-20'>{props.title}</h1>
			<div className='flex laptop:px-24 laptop:mb-32 laptop:flex-row flex-col px-6 mb-4'>
				<Image
					className='laptop:w-711 laptop:h-500 laptop:mr-16 w-full h-284 mb-5'
					src={props.img}
					alt=''
					width={711}
					height={499}
				/>
				<div className='laptop:w-40% flex flex-col laptop:justify-center laptop:items-start mobile:items-center'>
					<Image src='/location.png' alt='' width={32} height={32} />
					<h2 className='laptop:text-2xl font-bold text-cardColor text-base'>
						{props.sub_title}
					</h2>
					<p className='laptop:w-500 text-newsColor laptop:text-lg text-sm w-388'>
						{props.text}
					</p>
				</div>
			</div>
			<div className='flex w-full laptop:px-24 laptop:mb-32 px-6 mb-12'>
				<div className='laptop:w-1/4 w-1/2'>
					<div className='flex laptop:mb-5 mb-2'>
						<Image
							className='mr-1'
							src='/cloud-sunny.png'
							alt=''
							width={32}
							height={32}
						/>
						<Image
							className='mr-1'
							src='/sun-fog.png'
							alt=''
							width={32}
							height={32}
						/>
						<Image
							className='mr-1'
							src='/sun.png'
							alt=''
							width={32}
							height={32}
						/>
					</div>
					<h3 className='laptop:text-2xl font-bold laptop:mb-5 text-cardColor mb-2 text-base'>
						Климаты
					</h3>
					<p className='laptop:text-lg text-sm text-newsColor'>
						Аба-ырайы жайкысын ысык келет. Эгин аянттары негизинен таштуу келет.
					</p>
				</div>
				{size.width === undefined ? <></> : size.width >= 1024 ? (
					<div className='flex'>
						<Image
							className='mr-2 max-h-250'
							src='/card1.png'
							alt=''
							width={340}
							height={250}
						/>
						<Image
							className='mr-2 max-h-250'
							src='/card2.png'
							alt=''
							width={340}
							height={250}
						/>
						<Image
							className='mr-2 max-h-250'
							src='/card3.png'
							alt=''
							width={340}
							height={250}
						/>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</>
	)
}

export default MalymattarPages
