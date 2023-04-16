import { FC } from 'react'
import Layout from '@/components/layouts/Layout'
import { ICardGar} from '@/interfaces/gar.interface'
import CardsGar from '@/components/elementsPage/cards/CardsGar'

const GarScreen: FC<ICardGar> = ({ cards }) => {
	return (
		<Layout>
			<div className='w-full flex flex-col items-center mt-20 mb-16 text-center'>
				<h1 className='text-3xl font-bold laptop:mb-10 mb-2'>Жариялар</h1>
				<p className='laptop:text-lg text-base text-newsColor laptop:w-600 w-full mb-8'>
					үй-бүлөлөрдүн социалдык жоопкерчилигин жогорулатуу жана алардын
					жүрүм-турумундагы жан бактылык себептерди азайтуу.
				</p>
				<CardsGar cards={cards} />
			</div>
		</Layout>
	)
}

export default GarScreen
