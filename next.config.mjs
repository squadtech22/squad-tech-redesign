/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep production builds from overwriting the running dev server's files.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  eslint: {
    // Pre-existing lint debt in src/pages — don't block production builds on it
    ignoreDuringBuilds: true,
  },
  // /api/blogs reads these with fs at runtime; make sure Vercel bundles them
  outputFileTracingIncludes: {
    '/api/blogs': ['./src/data/blog-cms.json'],
  },
}

export default nextConfig
