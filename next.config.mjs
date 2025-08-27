// next.config.mjs
const nextConfig = {
  output: 'export',       // keep static export
  images: {
    unoptimized: true,    // disables _next/image API
  },
};

export default nextConfig;
