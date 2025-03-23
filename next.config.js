/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features including Turbopack
  experimental: {
    // Enable Turbopack with proper configuration object
    turbo: {
      enabled: true
    }
  }
};

module.exports = nextConfig; 