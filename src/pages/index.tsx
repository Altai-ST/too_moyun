import Layout from '@/components/layouts/Layout'
import Home from '@/components/screens/home/Home'
// import { Providers } from '@/GlobalRedux/provider'
// import { IGalleryData } from '@/interfaces/gallery.interface'
// import { ICards } from '@/interfaces/news.interface'
// import { GalleryService } from '@/services/galleryData.service'
// import { NewsService } from '@/services/newsData.service'
import { NextPage } from 'next'
const HomePage: NextPage = ()=> {
	return (
		<Layout>
			<Home />
		</Layout>
	)
}

// export async function getServerSideProps() {
// 	const cards = await NewsService.getSix(1, 6)
// 	const gallery = await GalleryService.getGallery(1, 4)

// 	return {
// 		props: { cards, gallery },
// 	}
// }

export default HomePage
