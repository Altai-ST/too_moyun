import { FC } from 'react'
import Layout from '@/components/layouts/Layout'
import { ICardGar} from '@/interfaces/gar.interface'
import CardsGar from '@/components/elementsPage/cards/CardsGar'

const GarScreen: FC<ICardGar> = ({ cards }) => {
	return (
		<Layout>
			<div className='w-full flex flex-col items-center mt-20 mb-16 text-center'>
				<h1 className='text-3xl font-bold laptop:mb-10 mb-2'>Жарыялар</h1>
				<CardsGar cards={cards} />
			</div>
		</Layout>
	)
}

export default GarScreen
