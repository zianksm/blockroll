/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  env: {
    // Development Environment Variables
    NEXT_PUBLIC_API_STAGING: '/',

    // Production Environment Variables
    NEXT_PUBLIC_API_PRODUCTION: '/',
  },
  experimental: {
    externalDir: true
  }
};

module.exports = nextConfig;
