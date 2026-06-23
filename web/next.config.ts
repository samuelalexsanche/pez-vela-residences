import type { NextConfig } from "next";

// GitHub Pages serves a project site under /<repo>. We read the base path from
// an env var so local dev (empty) and Pages builds (/pez-vela-residences) both work.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // fully static site, deployable to GitHub Pages
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    // Custom loader prepends the base path to every image src — next/image does
    // not do this automatically in static export, which broke images on Pages.
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
  trailingSlash: true, // emit /unidades/index.html so Pages routing works cleanly
};

export default nextConfig;
