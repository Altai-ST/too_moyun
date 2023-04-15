import Layout from '@/components/layouts/Layout'
import { ICardsData } from '@/interfaces/cardNews.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Malymattar: FC<ICardsData> = ({ cardNews }) => {
	return (
		<Layout>
			<div className='flex flex-col items-center mb-16'>
				<h1 className='text-4xl font-bold text-red-600 mb-4'>
					Төө-Моюн айыл өкмөтү боюнча маалымат
				</h1>
				<p className='text-center text-lg w-600'>
					Бул баракчада ар кандай маалыматтар жайгашкан. Суротторду басып, ал
					жонундо кененирээк билип алсанар болот.
				</p>
			</div>
			<div className='mx-32 flex flex-wrap justify-between pl-10'>
				{cardNews.results.map(el => {
					return (
						<div className='flex flex-col px-10 text-white w-555 h-500 rounded-lg justify-center relative pt-32'>
							<div className='absolute inset-0'>
								<Image src={el.img} alt='' width={500} height={500} />
							</div>
							<div className='w-500 h-450 bg-black opacity-50 z-9 absolute inset-0 rounded-2xl'></div>
							<div className='flex flex-col justify-center mb-24 h-1/4 z-10 relative'>
								<h1 className='text-3xl font-bold'>{el.title}</h1>
							</div>
							<Link className='z-10' href='/commonInfo'>Кенен билүү</Link>
						</div>
					)
				})}
				<div className='flex flex-col px-10 text-white w-555 h-500 rounded-lg justify-center relative pt-32'>
							<div className='absolute inset-0'>
								<Image src='/cardNews3.png' alt='' width={500} height={500} />
							</div>
							<div className='w-500 h-450 bg-black opacity-50 z-9 absolute inset-0 rounded-2xl'></div>
							<div className='flex flex-col justify-center mb-24 h-1/4 z-10 relative'>
								<h1 className='text-3xl font-bold'>Жалпы маалымат</h1>
								<p className='text-lg'>Билим берүү, Административдик-географиялык жайгашуусу жана башка</p>
							</div>
							<Link className='z-10' href='/commonInfo'>Кенен билүү</Link>
						</div>
			</div>
		</Layout>
	)
}

export default Malymattar
