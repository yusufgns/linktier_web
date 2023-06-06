/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: true,
        appDir: true,
    },
    images: {
        dangerouslyAllowSVG: true,
        domains: [
            "avatars.githubusercontent.com",
            "api.dicebear.com",
            "avatars.dicebear.com",
            "lh3.googleusercontent.com",
            "pbs.twimg.com",
            "nmcceegbiexzqgkclyxx.supabase.co"
        ],
        formats: ["image/webp"],
    },
}

module.exports = nextConfig