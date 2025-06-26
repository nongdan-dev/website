import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.ignoreWarnings = [
      { module: /css-loader/ },
      { module: /postcss-loader/ },
      /Failed to parse source map/,
    ]

    if (dev && !isServer) {
      config.cache = false
    }

    return config
  },
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
