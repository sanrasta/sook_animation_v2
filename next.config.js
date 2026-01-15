/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  transpilePackages: ['gsap'],
};

module.exports = nextConfig;


