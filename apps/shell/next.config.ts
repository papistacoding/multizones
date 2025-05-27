/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/app-a",
        destination: `http://localhost:3001/app-a`,
      },
      {
        source: "/app-a/:path+",
        destination: `http://localhost:3001/app-a/:path+`,
      },
      {
        source: "/app-b",
        destination: `http://localhost:3002/app-b`,
      },
      {
        source: "/app-b/:path+",
        destination: `http://localhost:3002/app-b/:path+`,
      },
    ];
  },
};

module.exports = nextConfig;
