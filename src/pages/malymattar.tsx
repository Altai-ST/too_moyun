import Malymattar from '@/components/screens/malymattar/Malymattar'
import { ICardNews, ICardsData } from '@/interfaces/cardNews.interface'
import { CardNewsService } from '@/services/cardNewsData.service'
import { NextPage } from 'next'
const MalymattarPage: NextPage<ICardsData> = (props) => {
	return <div>
		<Malymattar cardNews={props.cardNews}/>
	</div>
}



export async function getServerSideProps() {
  const cardNews = await CardNewsService.getCardNews(1,6)
  
  return {
    props: {cardNews},
  }
}


export default MalymattarPage