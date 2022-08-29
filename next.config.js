/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains: ['https://exp.cdn-hotels.com']
  }
}

module.exports = nextConfig
