/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add base path if deploying to GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  trailingSlash: true,
}

// Change to CommonJS export
module.exports = nextConfig