/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'aimesh777.pythonanywhere.com',
				port: '',
				pathname: '/media/**',
			},
		],
	},
}

module.exports = nextConfig
