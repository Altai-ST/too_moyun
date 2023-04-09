import Home from "@/components/screens/home/Home";
import { IGalleryData } from '@/interfaces/gallery.interface'
import { ICards } from '@/interfaces/news.interface'
import { GalleryService } from '@/services/galleryData.service'
import { NewsService } from '@/services/newsData.service'
import { NextPage } from 'next'


const HomePage: NextPage<ICards & IGalleryData> =(props)=>{
  return <Home cards={props.cards} gallery={props.gallery}/>
}

export async function getServerSideProps() {
  const cards = await NewsService.getSix(1,6)
  const gallery = await GalleryService.getGallery(1,4)
  
  return {
    props: {cards, gallery},
  }
}


export default HomePage;