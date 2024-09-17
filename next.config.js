import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexel.com',
        port: '',
        pathname: '/photos/**'
      }
    ]},
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(process.cwd(), './')
    };
    return config;
  },
  // Add any other necessary configurations
};

export default nextConfig;