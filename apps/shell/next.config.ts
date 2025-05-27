/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/app-a/:path*",
        destination: "http://localhost:3001/:path*",
      },
      {
        source: "/app-b/:path*",
        destination: "http://localhost:3002/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
