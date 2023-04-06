import Cards from '@/components/elementsPage/cards/Cards'
import { ICards, INews } from '@/interfaces/news.interface'
import { FC } from 'react'

const News: FC<ICards> = ({cards}) => {
	return <div className='w-full flex flex-col items-center mt-20 mb-16 text-center'>
		<h1 className='text-3xl font-bold mb-10'>Жанылыктар</h1>
		<p className='text-lg text-newsColor w-600 mb-8'>үй-бүлөлөрдүн социалдык жоопкерчилигин жогорулатуу жана алардын жүрүм-турумундагы жан бактылык себептерди азайтуу.</p>
		<Cards cards={cards}/>
	</div>
}

export default News