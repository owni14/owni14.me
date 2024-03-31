import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // assetPrefix: ".",
    images: {
        unoptimized: true,
    },
    webpack: config => {
        config.resolve.alias["@app"] = path.resolve(process.cwd(), "app");
        config.resolve.alias["@public"] = path.resolve(process.cwd(), "public");
        config.module.rules.push({ test: /\.svg$/i, use: ["@svgr/webpack"] });
        return config;
    },
};

export default nextConfig;
