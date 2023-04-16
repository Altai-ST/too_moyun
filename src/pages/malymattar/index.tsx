import Layout from '@/components/layouts/Layout'
import Malymattar from '@/components/screens/malymattar/Malymattar'
import { ICardNews, ICardsData } from '@/interfaces/cardNews.interface'
import { CardNewsService } from '@/services/cardNewsData.service'
import { NextPage } from 'next'
const MalymattarPage: NextPage<ICardsData> = () => {
	return <Layout>
		<Malymattar/>
	</Layout>
}



// export async function getServerSideProps() {
//   const cardNews = await CardNewsService.getCardNews(1,6)
//   return {
//     props: {cardNews},
//   }
// }


export default MalymattarPage