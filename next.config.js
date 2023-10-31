// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "znpu-bucket.s3.amazonaws.com",
      "znpu-bucket.s3.eu-central-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
