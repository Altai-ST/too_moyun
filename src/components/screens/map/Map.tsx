import Layout from '@/components/layouts/Layout'
import { FC } from 'react'
import GoogleMapReact from 'google-map-react'

const Map: FC = () => {
		const defaultProps = {
			center: {
				lat: 40.446730,
				lng: 72.209472
			},
			zoom: 11
		};
	return <Layout>
		<div className='h-screen w-full'>
      {/* <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
				📍
      </GoogleMapReact> */}
    </div>
	</Layout>
}

export default Map