import Layout from '@/components/layouts/Layout'
import Image from 'next/image'
import { FC } from 'react'

const MalymattarPages: FC = () => {
	return <Layout>
		<div className='flex justify-between'>
			<div className='w-1/2 mr-16'>
				<Image src='/cardNews1.png' alt='' width={711} height={499}/>
			</div>
			<div className='w-1/2'>
				<h2 className='text-2xl font-bold text-cardColor'>Географиялык жайгашкан жери</h2>
				<p className='w-334 text-newsColor'>Төө-Моюн айылдык округу Ош облусунун Араван районунун админстративдик аймагына кирет. Түндүк чыгыш жагынан Өзбек Республикасынын Андижан облусунун Мархамат району, Түндүк батыш тарабынан Өзбек Республикасынын Фергана облусунун Кува району жана батыш тарабынан Кувасай району менен, Түштүк чыгыш тарабынан Ноокат районунун Төөлөс айылдык округу жана Түштүк батыш тарабынан Баткен районунун Караван айылы менен чектешкен.</p>
			</div>
		</div>
		<div>
			<div>

			</div>
			<div></div>
		</div>
	</Layout>
}

export default MalymattarPages