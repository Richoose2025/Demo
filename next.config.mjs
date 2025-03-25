const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/Demo",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : "",
};

export default nextConfig;
