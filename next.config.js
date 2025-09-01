/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable CSS modules
    cssModules: true,
  },
  output: "export", // generates static HTML in `out` folder
  trailingSlash: true, // optional, makes URLs like /about/index.html
};

module.exports = nextConfig;
