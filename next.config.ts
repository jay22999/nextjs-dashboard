/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure app router is enabled
    turbo: false, // Disable Turbopack
  },
};

module.exports = nextConfig;
