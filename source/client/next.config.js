/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    IMAGE_URL: process.env.IMAGE_URL,
  },
};

module.exports = nextConfig;
