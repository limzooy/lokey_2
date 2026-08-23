/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // /post/fashion 과 내용이 완전히 같던 중복 페이지. 색인 손실 없이 원본으로 넘긴다.
        source: '/post/quiet-luxury-fashion',
        destination: '/post/fashion',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
