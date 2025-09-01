/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now stable and enabled by default in Next.js 14
  experimental: {
    // Enable CSS modules
    cssModules: true,
  },
};

module.exports = nextConfig;
