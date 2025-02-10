/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  assetPrefix:
    process.env.NODE_ENV === 'production' ? 'https://wheon06.github.io' : '',
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
