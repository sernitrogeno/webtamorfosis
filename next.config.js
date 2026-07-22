/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Preparado para dominios externos de imágenes en el futuro.
    remotePatterns: [],
  },
};

module.exports = nextConfig;
