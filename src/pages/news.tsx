
import NewsScreen from '@/components/screens/news/NewsScreen'
import { ICards } from '@/interfaces/news.interface'
import { NewsService } from '@/services/newsData.service'
import { NextPage } from 'next'

const NewsPage: NextPage<ICards> =(props) =>{
	return <div>
		<NewsScreen cards={props.cards}/>
	</div>
}


export async function getServerSideProps() {
  const cards = await NewsService.getSix(1,6)
  
  return {
    props: {cards},
  }
}
export default NewsPage