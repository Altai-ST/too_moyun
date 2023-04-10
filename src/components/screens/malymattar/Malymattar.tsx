import CardNews from '@/components/elementsPage/cardNews/CardNews'
import Layout from '@/components/layouts/Layout'
import { FC } from 'react'

const Malymattar: FC = () => {

	const card1 = [{
		img: 'cardNews1.png',
		title: 'Аналитикалык маалымат.',
		description: 'Географиялык жайгашкан жери, климаты',
		url:'/edu'
	},{
		img: 'cardNews1.png',
		title: 'Аналитикалык маалымат.',
		description: 'Географиялык жайгашкан жери, климаты',
		url:'/edu'
	},{
		img: 'cardNews1.png',
		title: 'Аналитикалык маалымат.',
		description: 'Географиялык жайгашкан жери, климаты',
		url:'/edu'
	},{
		img: 'cardNews1.png',
		title: 'Аналитикалык маалымат.',
		description: 'Географиялык жайгашкан жери, климаты',
		url:'/edu'
	}]

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
			<div>
				<CardNews/>
			</div>
		</Layout>
	)
}

export default Malymattar
