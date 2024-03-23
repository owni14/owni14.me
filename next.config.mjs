import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
        config.resolve.alias["@app"] = path.resolve(process.cwd(), "app");
        config.resolve.alias["@public"] = path.resolve(process.cwd(), "public");
        return config;
    },
};

export default nextConfig;
