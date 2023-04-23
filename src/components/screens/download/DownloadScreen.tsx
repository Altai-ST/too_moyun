import Layout from '@/components/layouts/Layout'
import { IDownloads } from '@/interfaces/download.interface'
import { FC } from 'react'

const DownloadScreen: FC<IDownloads> = ({ files }) => {


	const styleSpace = files[0] === undefined ? `laptop:px-32 px-5 mb-500` : `laptop:px-32 px-5 mb-10`

	console.log(files[0] === undefined);
	

	return (
		<Layout>
			<div className={styleSpace}>
				{files.map(el => {
				return <div className='flex w-full justify-between bg-gray-400 py-5 px-2 font-bold items-center'>
					<p className='laptop:text-4xl text-xl'>{el.title}</p>
					<div className='bg-white flex justify-center items-center'>
						<a className='laptop:text-4xl text-lg py-2 pl-2 pr-10' href={el.file}>көчүрүү</a>
					</div>
				</div>
			})}
			</div>
			
		</Layout>
	)
}

export default DownloadScreen
