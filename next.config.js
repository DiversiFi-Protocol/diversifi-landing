/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now stable and enabled by default in Next.js 14
  output: 'export', // generates static HTML in `out` folder
  trailingSlash: true, // optional, makes URLs like /about/index.html
};

module.exports = nextConfig;
