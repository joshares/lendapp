/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async() => {
    return [
      {
        source: '/',
        destination: '/users',
        permanent:true,
      },
    ]
  },
}

module.exports = nextConfig
