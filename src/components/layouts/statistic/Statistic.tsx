import { FC } from 'react'

const Statistic: FC = () => {
	return (
		<div className='bg-statisticBg w-full text-white text-center px-28 py-44'>
			<h2 className='text-4xl mb-16'>Биздин айылда</h2>
			<div className='flex justify-between'>
				<div className='w-1/5'>
					<p className='text-4xl'>
						99<span className='text-blue-400'>%</span>{' '}
					</p>
					<p className='text-2xl'>Customer satisfaction</p>
				</div>
				<div className='w-1/5'>
					<p className='text-4xl'>32000</p>
					<p className='text-2xl'>Адам</p>
				</div>
				<div className='w-1/5'>
					<p className='text-4xl'>
						125<span className='text-blue-400'>+</span>
					</p>
					<p className='text-2xl'>Team members</p>
				</div>
				<div className='w-1/5'>
					<p className='text-4xl'>
						240<span className='text-blue-400'>%</span>
					</p>
					<p className='text-2xl'>Company growth</p>
				</div>
			</div>
		</div>
	)
}

export default Statistic
