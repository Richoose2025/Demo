let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) return nextConfig;
  
  return {
    ...nextConfig,
    ...userConfig,
    // Deep merge for specific nested objects
    eslint: { ...nextConfig.eslint, ...userConfig.eslint },
    typescript: { ...nextConfig.typescript, ...userConfig.typescript },
    images: { ...nextConfig.images, ...userConfig.images },
    experimental: { ...nextConfig.experimental, ...userConfig.experimental },
  };
}

export default mergeConfig(nextConfig, userConfig);