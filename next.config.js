/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  baseUrl: ".",
  paths: {
    "@/components/*": ["components/*"],
    "@/pages/*": ["pages/*"],
    "@/utils/*": ["utils/*"],
    "@/styles/*": ["styles/*"],
    "@/assets/*": ["assets/*"],
    "@/public/*": ["public/*"],
    "@/img/*": ["public/img/*"],
  },
};

module.exports = nextConfig;
