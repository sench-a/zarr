/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    deviceSizes: [
      360, 390, 415, 440, 640, 750, 828, 1080, 1200, 1920, 2048, 3840,
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/*/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "a.zarr.design/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "a.zarr.design/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
