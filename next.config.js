/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|mov)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos',
            outputPath: `${isServer ? '../' : ''}static/videos`,
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    })
    return config
  },
  images: {
    domains: [
      'images.unsplash.com',
      'tailwindui.com',
      'images.ctfassets.net',
      'via.placeholder.com',
      'source.unsplash.com',
      'placehold.co',
      'ui-avatars.com',
      'api.dicebear.com',
      'picsum.photos',
      'loremflickr.com',
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
