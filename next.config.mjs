/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  // Image optimization enabled — Next.js will serve WebP/AVIF, resize,
  // and lazy-load below-fold images automatically.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1600],
    imageSizes: [64, 128, 256, 384, 480]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()"
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' blob: data: https:",
              "font-src 'self' data:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' mailto:"
            ].join("; ")
          }
        ]
      }
    ];
  }
};

export default nextConfig;
