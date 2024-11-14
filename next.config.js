/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    async headers() {
        return [
            {
                source: '/(.*).(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|otf|fbx)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
