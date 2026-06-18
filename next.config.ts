import type { NextConfig } from 'next'
const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/ucpaso',
  assetPrefix: '/ucpaso/',
  images: {
    unoptimized: true,
  },
}
export default config
