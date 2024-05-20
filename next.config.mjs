/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreBuildErrors: true,
  },
  // TODO - возможно удалить experimental: {...}
  experimental: {
    appDir: true,
  },
};

export default nextConfig;