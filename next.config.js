/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/store-react-app",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;