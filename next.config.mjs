/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __filname = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filname);

const nextConfig = {
  reactStrictMode: true, // React 엄격모드
  eslint: {
    ignoreDuringBuilds: true, // 빌드 중 ESLint오류 무시
  },
  pageExtensions: ["tsx", "ts", " jsx", "js"], // 페이지 확장자 설정
  sassOptions: {
    includePaths: [path.join(__dirname, "app/_styles")], // Sass includePaths 설정
  },
  /* Webpack 설정 */
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias, // Webpack 기존 alias 유지
      "@": path.resolve(__dirname, "/"),
      "@components": path.resolve(__dirname, "_components"),
      "@utils": path.resolve(__dirname, "_utils"),
      "@styles": path.resolve(__dirname, "_styles"),
      "@hooks": path.resolve(__dirname, "_hooks"),
    };
    // config.entry = path.resolve(__dirname, "app/site/layout.tsx"); // Webpack bundle 시작 파일
    // config.output = {
    //   // Bundle파일 출력 경로 및 이름
    //   path: path.resolve(__dirname, "dist"),
    //   filename: "bundle.js",
    // };
    /* 모듈 로더 설정 */
    // config.module.rules = [
    //   {
    //     test: /\.(ts|tsx)$/,
    //     exclude: /node_modules/,
    //     use: {
    //       loader: "ts-loader", // 또는 babel-loader 등
    //     },
    //   },
    //   {
    //     test: /\.s[ac]ss$/i,
    //     use: ["style-loader", "css-loader", "sass-loader"],
    //   },
    //   {
    //     test: /\.(png|svg|jpg|jpeg|gif)$/,
    //     type: "asset/resource",
    //   },
    //   {
    //     test: /\.(woff2)$/i,
    //     type: "asset/resource",
    //     include: path.resolve(__dirname, "public/fonts"),
    //   },
    // ];
    return config;
  },
};

export default nextConfig;
