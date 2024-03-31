import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    webpack: config => {
        config.resolve.alias["@app"] = path.resolve(process.cwd(), "app");
        config.resolve.alias["@public"] = path.resolve(process.cwd(), "public");
        config.module.rules.push({ test: /\.svg$/i, use: ["@svgr/webpack"] });
        return config;
    },
    i18n: {
        locales: ["en", "ko"],
        defaultLocale: "ko",
        localeDetection: false,
    },
};

export default nextConfig;
