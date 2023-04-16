import React, { FC, PropsWithChildren } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import { Providers } from '@/GlobalRedux/provider'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<Header />
			<Providers>{children}</Providers>
			<Footer />
		</div>
	)
}

export default Layout
