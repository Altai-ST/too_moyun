import { ICulture, ICultureData } from '@/interfaces/culture.interface'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import { FC } from 'react'

const Culture: FC<ICultureData> = ({culture}) => {
	
	return (
		<>
			<div className='bg-gray-200'>
				<div className='flex justify-around'>
					<div className='h-500 w-555 mb-16'>
						<Carousel slideInterval={5000}>
							{culture.images.map((el)=>{
								return(
									<Image src={`http://92.255.111.47${el.file}`} width={555} height={500} alt='...' />
								)
							})}
						</Carousel>
					</div>
					<h2 className='text-4xl font-bold flex items-center w-1/4'>
						Маданияты
					</h2>
				</div>
				<div className='mx-28 pb-32'>
					<p>
						{culture.description}
					</p>
				</div>
			</div>
		</>
	)
}

export default Culture
