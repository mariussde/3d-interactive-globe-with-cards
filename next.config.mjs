/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handle the webgpu import issue with three-globe
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    // Add alias for webgpu to resolve the import issue
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm/webgpu/WebGPU': false,
    };

    return config;
  },
};

export default nextConfig;
