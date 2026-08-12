import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/home-project-calculator',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
