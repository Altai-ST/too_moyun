import Faq from '@/components/elementsPage/q&a/Faq'
import Layout from '@/components/layouts/Layout'
import { getFirstMalymattar } from '@/GlobalRedux/Features/firstGetData/firstGetDataSlice'
import { AppDispatch, RootState } from '@/GlobalRedux/store'
import { ICardsData } from '@/interfaces/cardNews.interface'
import { IFaqs } from '@/interfaces/faq.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Malymattar: FC<IFaqs>= ({faqs}) => {

	const cardNews = useSelector((state: RootState)=>state.firstData)

	const dispatch = useDispatch<AppDispatch>()

	useEffect(()=>{
		dispatch(getFirstMalymattar({page:1, pageSize:3}))
	},[])


	

	return (
		<>
			<div className='flex flex-col items-center mb-16 laptop:px-0 px-4'>
				<h1 className='laptop:text-4xl text-center text-2xl font-bold text-red-600 mb-4'>
					Төө-Моюн айыл өкмөтү боюнча маалымат
				</h1>
				<p className='text-center laptop:text-lg text-base laptop:w-600 w-full'>
					Бул баракчада ар кандай маалыматтар жайгашкан. Суротторду басып, ал
					жонундо кененирээк билип алсанар болот.
				</p>
			</div>
			<div className='laptop:mx-32 mx-0 flex laptop:flex-row flex-col flex-wrap justify-between laptop:pl-10 pl-0'>
				{cardNews.malymattar.results.map(el => {
					return (
						<div className='flex flex-col px-10 text-white laptop:w-555 w-full h-450 rounded-lg justify-center relative pt-32 mb-10'>
							<div className='absolute inset-0'>
								<Image className='h-450 rounded-xl' src={el.img} alt='' width={500} height={450} />
							</div>
							<div className='laptop:w-500 w-full h-450 bg-black opacity-50 z-9 absolute inset-0 rounded-2xl'></div>
							<div className='flex flex-col justify-center mb-24 h-1/4 z-10 relative'>
								<h1 className='text-3xl font-bold'>{el.title}</h1>
								<p>{el.sub_title}</p>
							</div>
							<Link className='z-10' href={`/malymattar/${el.id}`}>Кенен билүү</Link>
						</div>
					)
				})}
				<div className='flex flex-col px-10 text-white laptop:w-555 w-full h-500 rounded-lg justify-center relative pt-32 laptop:mt-0 mt-10'>
							<div className='absolute inset-0'>
								<Image className='h-450 rounded-xl' src='/cardNews3.png' alt='' width={500} height={500} />
							</div>
							<div className='laptop:w-500 w-full h-450 bg-black opacity-50 z-9 absolute inset-0 rounded-2xl'></div>
							<div className='flex flex-col justify-center mb-24 h-1/4 z-10 relative'>
								<h1 className='text-3xl font-bold'>Жалпы маалымат</h1>
								<p className='text-lg'>Билим берүү, Административдик-географиялык жайгашуусу жана башка</p>
							</div>
							<Link className='z-10' href='/commonInfo'>Кенен билүү</Link>
						</div>
			</div>
			<Faq faqs={faqs}/>
		</>
	)
}

export default Malymattar
