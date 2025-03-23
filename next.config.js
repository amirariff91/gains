/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features including Turbopack
  experimental: {
    // Enable Turbopack with proper configuration object
    turbo: {
      enabled: true
    }
  },
  output: 'standalone',
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig; 