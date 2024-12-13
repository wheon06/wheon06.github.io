/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/blog',
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://wheon06.github.io/blog'
      : '',
  output: 'export',
};

export default nextConfig;
