/** Prefix a root-relative site path with Astro's configured deployment base. */
export function sitePath(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
