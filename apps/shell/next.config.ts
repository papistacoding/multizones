/** @type {import('next').NextConfig} */
const APP_A_URL = process.env.APP_A_URL;
const APP_B_URL = process.env.APP_B_URL;
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/app-a",
        destination: `${APP_A_URL}/app-a`,
      },
      {
        source: "/app-a/:path+",
        destination: `${APP_A_URL}/app-a/:path+`,
      },
      {
        source: "/app-b",
        destination: `${APP_B_URL}/app-b`,
      },
      {
        source: "/app-b/:path+",
        destination: `${APP_B_URL}/app-b/:path+`,
      },
    ];
  },
};

module.exports = nextConfig;
