import Layout from '@/components/layouts/Layout'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import { FC } from 'react'

const Cattle: FC = () => {
	return (
		<Layout>
			<div className='flex flex-col items-center bg-gray-200'>
				<div className='h-500 sm:h-500 xl:h-500 xl:w-555 mb-16'>
					<Carousel slideInterval={5000}>
						<Image src='/carousel1.png' width={555} height={500} alt='...' />
					</Carousel>
				</div>
				<div className='px-28 flex flex-col items-center'>
					<h2 className='text-4xl font-bold mb-16'>Айыл чарбасы</h2>
					<p className='text-newsColor mb-28'>
						Мал чарба жана дыйканчылык азык-түлүгүн алуу үчүн айыл чарба
						өсүмдүктөрүн өстүрүү жана мал асыроо. Айыл чарбасы калкты тамак-аш,
						азыктүлүк, өнөр жайды чийки зат менен камсыз кылуу максатын көздөйт.
						<br/>
						<span>
							Кыргызстандын калкынын кылымдар бою калыптанган мал чарбачылыгы,
							дыйканчылыгы, жалпы калкынын 65%и айыл жеринде жашашы аграномиялык
							өлкө болушуна жана айыл чарбанын өнүгүшүнө шарт түзгөн.
							Кыргызстандын айыл чарбасынын өнүгүүсүн тарыхый үч мезгилге,
							башкача айтканда Улуу Октябрь социалистик революциясына чейинки,
							СССР убагындагы жана эгемендүү мамлекет учурундагы мезгилге бөлүп
							кароого болот. Алгачкы мезгилде социалистик-экономикалык шарттарга
							ылайык керектөөлөрдү гана канааттандыруу максаты болгон.
						</span>
					</p>
				</div>
			</div>
		</Layout>
	)
}

export default Cattle
