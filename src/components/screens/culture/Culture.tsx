import Layout from '@/components/layouts/Layout'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import { FC } from 'react'

const Culture: FC = () => {
	return (
		<Layout>
			<div className='bg-gray-200'>
				<div className='flex justify-around'>
					<div className='h-500 w-555 mb-16'>
						<Carousel slideInterval={5000}>
							<Image src='/carousel1.png' width={555} height={500} alt='...' />
						</Carousel>
					</div>
					<h2 className='text-4xl font-bold flex items-center w-1/4'>
						Маданияты
					</h2>
				</div>
				<div className='mx-28 pb-32'>
					<p>
						Бул окуу куралында – маданият жөнүндөгү билимдин, маалыматтардын
						системасы каралган. Мында маданият теориялык, методологиялык жана
						тарыхый өнүттө берилип, алгачкы коомдон тартып азыркы мезгилге чейин
						маданияттын генезиси жана эволюциясы тарыхыйцивилизациялык
						контекстте көрсөтүлгөн. Окуу куралы маданият таануу сабагы боюнча
						түзүлгөн жаңы жогорку окуу жайларынын программаларынын талаптарына
						жооп бергидей кылып аткарылды. Окуу куралы Ж.Баласагын атындагы
						КУУнун социалдык, гуманитардык илимдер факультетинин философия,
						маданияттын теориясы жана тарыхы кафедрасында даярдалды жана басмага
						сунуш кылынды.
					</p>
				</div>
			</div>
		</Layout>
	)
}

export default Culture
