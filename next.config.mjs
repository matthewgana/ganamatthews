/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization enabled — Next.js will serve WebP/AVIF, resize,
  // and lazy-load below-fold images automatically.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1600],
    imageSizes: [64, 128, 256, 384, 480]
  }
};

export default nextConfig;
