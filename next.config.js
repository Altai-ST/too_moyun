/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '92.255.111.47',
				port: '',
				pathname: '/media/**',
			},
		],
	},
}

module.exports = nextConfig
