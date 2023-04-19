import Layout from '@/components/layouts/Layout'
import { FC } from 'react'
import GoogleMapReact from 'google-map-react'
import { IMapContainer } from '@/interfaces/map.interface'
import Image from 'next/image'

const Map: FC<IMapContainer> = ({map}) => {
	return <Layout>
		<div className='h-screen w-full flex justify-center'>
		<Image className='w-855 h-500' src={`http://92.255.111.47${map.photo}`} alt='' width={800} height={500}/>
    </div>
	</Layout>
}

export default Map