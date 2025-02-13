/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Flow-Site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Flow-Site/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 