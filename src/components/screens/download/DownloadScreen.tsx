import Layout from '@/components/layouts/Layout'
import { IDownloads } from '@/interfaces/download.interface'
import { FC } from 'react'

const DownloadScreen: FC<IDownloads> = ({ files }) => {
	return (
		<Layout>
			<div className='px-32 mb-10'>
				{files.map(el => {
				return <div className='flex w-full justify-between bg-gray-400 py-5 px-2 font-bold items-center'>
					<p className='text-4xl'>{el.title}</p>
					<div className='bg-white flex justify-center items-center'>
						<a className='text-4xl py-2 pl-2 pr-10' href={el.file}>download</a>
					</div>
				</div>
			})}
			</div>
			
		</Layout>
	)
}

export default DownloadScreen
