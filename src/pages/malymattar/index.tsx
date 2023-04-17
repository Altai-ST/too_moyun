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


export default MalymattarPage