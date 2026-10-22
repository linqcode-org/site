/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export served by Azure Static Web Apps; the contact form posts to the Function in api/.
  output: 'export',
  images: { unoptimized: true },
};

module.exports = nextConfig;
