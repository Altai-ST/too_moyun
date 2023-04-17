import { FC } from 'react'
import Layout from '@/components/layouts/Layout'
import { ICardGar} from '@/interfaces/gar.interface'
import CardsGar from '@/components/elementsPage/cards/CardsGar'
import { ICardNews } from '@/interfaces/cardNews.interface'
import { ICards } from '@/interfaces/news.interface'
import Cards from '@/components/elementsPage/cards/Cards'

const NewsScreen: FC<ICards> = ({ cards }) => {
	return (
		<Layout>
			<div className='w-full flex flex-col items-center mt-20 mb-16 text-center'>
				<h1 className='text-3xl font-bold laptop:mb-10 mb-2'>Жанылыктар</h1>
				<p className='laptop:text-lg text-base text-newsColor laptop:w-600 w-full mb-8'>
					үй-бүлөлөрдүн социалдык жоопкерчилигин жогорулатуу жана алардын
					жүрүм-турумундагы жан бактылык себептерди азайтуу.
				</p>
				<Cards cards={cards} />
			</div>
		</Layout>
	)
}

export default NewsScreen