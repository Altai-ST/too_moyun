import Layout from '@/components/layouts/Layout'
import { CommonInfoContainer } from '@/interfaces/common-info.interface'
import Image from 'next/image'
import { FC, useState } from 'react'

const CommonInfo: FC<CommonInfoContainer> = ({ commonInfo }) => {
	return (
		<Layout>
			<div className='text-center w-full mb-16 pt-14'>
				<h1 className='text-4xl text-red-600 font-bold mb-12'>
					Жалпы маалымат
				</h1>
				<p className='text-cardColor text-2xl font-bold'>
					Айыл өкмөтү боюнча жалпы маалымат
				</p>
			</div>
			<div className='flex w-full px-24 justify-between mb-32'>
				<div className='flex flex-col rounded-2xl w-28p pt-9 border pl-10'>
					<p className='text-cardColor text-5xl font-bold mb-6'>
						{commonInfo.territory}
						<span className='text-commonInfo'> км</span>
					</p>
					<h4 className='text-2xl text-cardColor font-bold mb-2'>
						Жалпы территориясы
					</h4>
					<p className='text-newsColor text-lg mb-10 w-80'>
						Айыл өкмөтү боюнча жалпы маалымат
					</p>
				</div>
				<div className='flex flex-col rounded-2xl w-28p pt-9 border pl-10'>
					<p className='text-cardColor text-5xl font-bold mb-6'>
						{commonInfo.number_of_villages}
						<span className='text-commonInfo'> бирдик</span>
					</p>
					<h4 className='text-2xl text-cardColor font-bold mb-2'>
						Айылдардын саны
					</h4>
					<p className='text-newsColor text-lg mb-10 w-80'>
						Айыл өкмөтү боюнча жалпы маалымат
					</p>
				</div>
				<div className='flex flex-col rounded-2xl w-28p pt-9 border pl-10'>
					<p className='text-cardColor text-4xl font-bold mb-6'>
						{commonInfo.number_of_smokes}
						<span className='text-commonInfo'> бирдик</span>
					</p>
					<h4 className='text-2xl text-cardColor font-bold mb-2'>
						Түтүндөрдүн саны
					</h4>
					<p className='text-newsColor text-lg mb-10 w-80'>
						Айыл өкмөтү боюнча жалпы маалымат
					</p>
				</div>
			</div>
			<div className='w-full mb-36 px-24 flex justify-between h-600'>
				<div className='flex flex-col justify-center w-334'>
					<h4 className='text-2xl font-bold text-cardColor'>
						Жогорку жана атайын орто билим берүү мекемелери
					</h4>
				</div>
				<div className='flex flex-wrap w-1/2'>
					<div className='flex flex-col justify-center items-center h-300 w-1/2 border-r-2 border-b-2'>
						<p className='text-4xl text-cardColor font-bold mb-2'>
							{commonInfo.avg_learn}
						</p>
						<p className='text-xl text-cardColor'>Атайын орто билим берүү</p>
					</div>
					<div className='flex flex-col justify-center items-center h-300 w-1/2 border-b-2'>
						<p className='text-4xl text-cardColor font-bold mb-2'>
							{commonInfo.licey}
						</p>
						<p className='text-xl text-cardColor'>Лицей </p>
					</div>
					<div className='flex flex-col justify-center items-center h-300 w-1/2 border-r-2'>
						<p className='text-4xl text-cardColor font-bold mb-2'>
							{commonInfo.teacher_number}
						</p>
						<p className='text-xl text-cardColor'>Мугалимдердин саны</p>
					</div>
					<div className='flex flex-col justify-center items-center h-300 w-1/2'>
						<p className='text-4xl text-cardColor font-bold mb-2'>
							{commonInfo.students_number}
						</p>
						<p className='text-xl text-cardColor'>
							Тарбиялануучу балдардын саны
						</p>
					</div>
				</div>
			</div>
			<div className='mb-40'>
				<div className='flex flex-col justify-center items-center mb-2'>
					<h2 className='text-2xl text-cardColor font-bold mb-6'>
						Жеңилдиктерге укугу бар жарандар
					</h2>
					<Image src='/people.png' alt='' width={89} height={89} />
				</div>
				<div className='w-full flex justify-around'>
					<div className='flex flex-col rounded-2xl w-388 pt-9 border pl-10'>
						<p className='text-cardColor text-5xl font-bold mb-6'>
							{commonInfo.ogan} адам
						</p>
						<h4 className='text-2xl text-cardColor font-bold mb-2'>
							Ооган согушунун ардагерлери
						</h4>
					</div>
					<div className='flex flex-col rounded-2xl w-388 pt-9 border pl-10'>
						<p className='text-cardColor text-5xl font-bold mb-6'>
							{commonInfo.chernobyl} адам
						</p>
						<h4 className='text-2xl text-cardColor font-bold mb-16'>
							Чернобыль кырсыгына катышкандар
						</h4>
					</div>
				</div>
			</div>
			<div className='text-center px-24 mb-64'>
				<div className='flex flex-col justify-center items-center'>
					<Image
						src='/health.png'
						alt=''
						width={62}
						height={62}
						className='mb-2'
					/>
					<h2 className='text-2xl text-cardColor font-bold mb-20'>
						Саламаттыкты сактоо
					</h2>
				</div>

				<div className='flex w-full  justify-between mb-32'>
					<div className='flex flex-col rounded-2xl w-23p border justify-center h-48 px-8'>
						<p className='text-cardColor text-4xl font-bold mb-2'>
							{commonInfo.hospital}
						</p>
						<h4 className='text-lg text-newsColor mb-2'>Ооруканалар</h4>
					</div>
					<div className='flex flex-col rounded-2xl w-23p border justify-center h-48 px-8'>
						<p className='text-cardColor text-4xl font-bold mb-2'>
							{commonInfo.family_medicine}
						</p>
						<h4 className='text-lg text-newsColor mb-2'>
							Үй-бүлөлүк дарыгерлер тобу
						</h4>
					</div>
					<div className='flex flex-col rounded-2xl w-23p border justify-center h-48 px-8'>
						<p className='text-cardColor text-4xl font-bold mb-2'>
							{commonInfo.fap}
						</p>
						<h4 className='text-lg text-newsColor mb-2'>ФАП</h4>
					</div>
					<div className='flex flex-col rounded-2xl w-23p border justify-center h-48 px-8'>
						<p className='text-cardColor text-4xl font-bold mb-2'>
							{commonInfo.apteka}
						</p>
						<h4 className='text-lg text-newsColor mb-2'>Аптекалар</h4>
					</div>
				</div>
			</div>
			<div className='px-24 mb-32'>
				<h2 className='text-3xl text-statisticBg text-center font-bold mb-32 '>
					Негизги көрсөткүчтөр
				</h2>
				<div className='flex justify-between'>
					<div className='w-1/2 bg-cardColor px-12 flex flex-col justify-center h-600 font-bold text-white rounded-xl mr-7'>
						<h3 className='text-4xl mb-6'>
							Жакынкы темир жол станциясына чейинки аралык, км менен:
						</h3>
						<p className='text-7xl'>{commonInfo.railroad} км</p>
					</div>
					<div className='text-cardColor flex flex-wrap justify-between font-bold h-600 w-1/2 '>
						<div className='flex flex-col w-45% justify-end h-284 border px-3 rounded-xl'>
							<p className='text-xl text-center'>
								Райондун борборуна чейинки аралыгы, км менен
							</p>
							<p className='text-4xl ml-6 mb-4'>{commonInfo.district} км</p>
						</div>
						<div className='flex flex-col w-45% justify-end h-284 border px-3 rounded-xl'>
							<p className='text-xl text-center'>
								Облустун борборуна чейинки аралыгы, км менен:
							</p>
							<p className='text-4xl ml-6 mb-4'>{commonInfo.region} км</p>
						</div>
						<div className='flex flex-col w-45% justify-end h-284 border px-3 rounded-xl self-end'>
							<p className='text-xl text-center'>
								Дениз деңгээлинен бийиктиги, метр менен:
							</p>
							<p className='text-4xl ml-6 mb-4'>{commonInfo.sea} м </p>
						</div>
						<div className='flex flex-col w-45% justify-end h-284 border px-3 rounded-xl self-end'>
							<p className='text-xl text-center'>
								Жакынкы аэропортко чейинки аралык, км менен:
							</p>
							<p className='text-4xl ml-6 mb-4'>{commonInfo.airport} км</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default CommonInfo
