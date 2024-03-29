/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains: ['exp.cdn-hotels.com', 'maps-api-ssl.google.com']
  }
}

module.exports = nextConfig
