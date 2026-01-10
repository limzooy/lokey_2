/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure static files are served correctly
  async rewrites() {
    return [
      {
        source: '/ads.txt',
        destination: '/ads.txt',
      },
    ]
  },
}

module.exports = nextConfig
