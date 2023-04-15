
import GarScreen from '@/components/screens/news/GarScreen'
import { ICardGar, IGar } from '@/interfaces/gar.interface'
import { GarService } from '@/services/gar.service'
import { NextPage } from 'next'

const NewsPage: NextPage<ICardGar> =(props) =>{
	return <div>
		<GarScreen cards={props.cards}/>
	</div>
}


export async function getStaticProps() {
  const cards = await GarService.getGarCards(1,6)
  return {
    props: {cards},
    revalidate: 10,
  }
}
export default NewsPage