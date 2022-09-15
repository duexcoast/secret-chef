const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  experimental: { images: { allowFutureImage: true } },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
