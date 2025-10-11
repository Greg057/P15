/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/p15' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/p15' : '',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  compress: false,
  poweredByHeader: false,
}

module.exports = nextConfig