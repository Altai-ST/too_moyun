import Layout from '@/components/layouts/Layout'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import { FC } from 'react'

const Culture: FC = () => {
	return (
		<Layout>
			<div className='flex justify-around w-full ml-20'>
				<div className='h-500 mb-16 w-555'>
					<Carousel slideInterval={5000}>
						<Image src='/carousel1.png' width={555} height={500} alt='...' />
					</Carousel>
				</div>
				<h2 className='text-4xl font-bold w-1/2'>Маданияты</h2>
			</div>
			<p className='text-newsColor'>
				Бул окуу куралында – маданият жөнүндөгү билимдин, маалыматтардын
				системасы каралган. Мында маданият теориялык, методологиялык жана
				тарыхый өнүттө берилип, алгачкы коомдон тартып азыркы мезгилге чейин
				маданияттын генезисаи жана эволюциясы тарыхыйцивилизациялык контекстте
				көрсөтүлгөн. Окуу куралы маданият таануу сабагы боюнча түзүлгөн жаңы
				жогорку окуу жайларынын программаларынын талаптарына жооп бергидей кылып
				аткарылды. Окуу куралы Ж.Баласагын атындагы КУУнун социалдык,
				гуманитардык илимдер факультетинин философия, маданияттын теориясы жана
				тарыхы кафедрасында даярдалды жана басмага сунуш кылынды.
			</p>
		</Layout>
	)
}

export default Culture
