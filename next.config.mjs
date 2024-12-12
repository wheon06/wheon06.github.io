/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://wheon06.github.io/blog'
      : '',
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;
