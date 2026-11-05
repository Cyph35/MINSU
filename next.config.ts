import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // separate output dir lets a CI/test build run while `next dev` uses .next
  distDir: process.env.NEXT_DIST_DIR ?? '.next',
  images: { formats: ['image/avif', 'image/webp'] },
};

export default nextConfig;
