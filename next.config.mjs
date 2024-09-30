/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/lfg',
    assetPrefix: '/lfg',
    trailingSlash: true,
    images: {

        domains: ['upload.wikimedia.org', 'img.itch.zone'],
    },
};

export default nextConfig;

