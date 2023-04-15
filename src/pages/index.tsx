import Home from '@/components/screens/home/Home'
import { Providers } from '@/GlobalRedux/provider'
import { IGalleryData } from '@/interfaces/gallery.interface'
import { ICards } from '@/interfaces/news.interface'
import { GalleryService } from '@/services/galleryData.service'
import { NewsService } from '@/services/newsData.service'
import { NextPage } from 'next'
import { RootState } from '@/GlobalRedux/store'
import { useSelector } from 'react-redux'
const HomePage: NextPage<ICards & IGalleryData> = props => {
	return (
		<Providers>
			<Home cards={props.cards} gallery={props.gallery} />
		</Providers>
	)
}

export async function getServerSideProps() {

	const cards = await NewsService.getSix(1, 6)
	const gallery = await GalleryService.getGallery(1, 4)

	return {
		props: { cards, gallery },
	}
}

export default HomePage
