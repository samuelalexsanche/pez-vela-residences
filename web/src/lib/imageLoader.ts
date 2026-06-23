// Custom next/image loader for static export under a GitHub Pages base path.
// next/image does NOT prepend basePath to the src in `output: export`, so we do
// it here. In local dev NEXT_PUBLIC_BASE_PATH is empty, so src is unchanged.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: { src: string }): string {
  if (/^https?:\/\//.test(src)) return src; // external URLs untouched
  const clean = src.startsWith("/") ? src : `/${src}`;
  return `${BASE}${clean}`;
}
