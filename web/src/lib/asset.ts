// Prepends the GitHub Pages base path to non-next/image assets
// (video, CSS background-image url(), <source>, etc.). next/image handles
// basePath automatically, so only use this for raw URLs.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${clean}`;
}
