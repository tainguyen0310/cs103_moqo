/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    async rewrites() {
      return [
        {
          source: '/profile',
          destination: '/src/app/pages/profile',
        },
      ];
    },
};