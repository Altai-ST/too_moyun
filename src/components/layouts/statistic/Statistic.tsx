import { FC } from 'react'

const Statistic: FC = () => {
	return (
		<div className='bg-statisticBg w-full text-white text-center px-28 py-44'>
			<h2 className='text-4xl mb-16'>Биздин айылда</h2>
			<div className='flex justify-between'>
				<div className='w-1/5'>
					<p className='text-4xl font-bold'>
					18800
					</p>
					<p className='text-2xl'>Туруктуу калктын саны</p>
				</div>
				<div className='w-1/5'>
					<p className='text-4xl font-bold'>7</p>
					<p className='text-2xl'>Айылдардын саны</p>
				</div>
				<div className='w-1/5'>
					<p className='text-4xl font-bold'>
					4191200км2
					</p>
					<p className='text-2xl '>Жалпы территориясы</p>
				</div>
				<div className='w-1/5'>
					<p className='text-4xl font-bold'>
					11
					</p>
					<p className='text-2xl'>Атайын орто билим берүү</p>
				</div>
			</div>
		</div>
	)
}

export default Statistic
