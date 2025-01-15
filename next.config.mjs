/** @type {import('next').NextConfig} */
const nextConfig = {
    output: {
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
};

export default nextConfig;