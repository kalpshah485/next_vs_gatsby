/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.dog.ceo","atlas-content-cdn.pixelsquid.com"],
  }
}

module.exports = nextConfig
