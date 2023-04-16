import Cards from '@/components/elementsPage/cards/Cards'
import { ICards } from '@/interfaces/news.interface'
import { FC } from 'react'

const News: FC<ICards> = ({cards}) => {

	return <div className='w-full flex flex-col items-center mt-20 mb-16 text-center'>
		<h1 className='text-3xl font-bold laptop:mb-10 mb-2'>Жанылыктар</h1>
		<p className='text-lg text-newsColor laptop:w-600 mb-8 w-full laptop:px-0 px-0'>үй-бүлөлөрдүн социалдык жоопкерчилигин жогорулатуу жана алардын жүрүм-турумундагы жан бактылык себептерди азайтуу.</p>
		<Cards cards={cards}/>
	</div>
}

export default News