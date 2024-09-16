/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['shawnavanomme.com'], // Replace with your actual domain
      unoptimized: true, // This is important for static exports
    },
    output: 'export', // If you're using static export
  }
  
  module.exports = nextConfig