import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {}, // ✅ explicitly enable Turbopack
}

export default nextConfig
