import { FC } from 'react'
import News from '@/components/layouts/news/News'
import { ICards } from '@/interfaces/news.interface'
import Layout from '@/components/layouts/Layout'

const NewsScreen: FC<ICards> = ({cards}) => {
	return <Layout>
		<News cards={cards}/>
	</Layout>
}

export default NewsScreen