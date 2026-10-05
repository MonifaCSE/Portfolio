/**
 * Utility to retrieve base path for GitHub Pages subpath deployment.
 * Example: "/Portfolio" or "" if deployed at root domain.
 */
export function getBasePath(): string {
  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!rawBasePath) return "";
  const formatted = rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`;
  return formatted.endsWith("/") ? formatted.slice(0, -1) : formatted;
}

/**
 * Utility to retrieve the configured production site URL.
 * Automatically supplied by GitHub Actions deployment workflow (steps.pages.outputs.base_url)
 * or process.env.NEXT_PUBLIC_SITE_URL.
 */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl) {
    return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
  }
  
  // Safe fallback for local build/dev without custom domain
  const basePath = getBasePath();
  return `https://username.github.io${basePath}`;
}
