const modules = import.meta.glob('/src/content/posts/*.md', { eager: true });

const slugFromPath = (path) => path.split('/').pop().replace(/\.md$/, '');

/** "Tips & Tricks" → "tips-and-tricks" */
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '') // strip accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function toPost(path, mod) {
  const slug = slugFromPath(path);
  const category = mod.metadata?.category ?? 'Uncategorised';
  const categorySlug = slugify(category);
  return {
    ...mod.metadata,
    slug,
    category,
    categorySlug,
    link: `/guide/${categorySlug}/${slug}`
  };
}

/** All published posts (metadata only), newest first */
export const posts = Object.entries(modules)
  .map(([path, mod]) => toPost(path, mod))
  .filter((post) => post.published !== false)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

/** Full module for one post: { default: Component, metadata } */
export function getPostModule(slug) {
  return modules[`/src/content/posts/${slug}.md`];
}

/** Metadata for one published post, or undefined */
export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

/** [{ name, slug, count, link }] sorted alphabetically */
export function getCategories() {
  const map = new Map();
  for (const post of posts) {
    const existing = map.get(post.categorySlug);
    if (existing) existing.count++;
    else
      map.set(post.categorySlug, {
        name: post.category,
        slug: post.categorySlug,
        count: 1,
        link: `/guide/${post.categorySlug}`
      });
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export function getCategory(categorySlug) {
  return getCategories().find((c) => c.slug === categorySlug);
}

/** Posts in a category, optionally excluding one */
export function getPostsInCategory(categorySlug, excludeSlug) {
  return posts.filter((p) => p.categorySlug === categorySlug && p.slug !== excludeSlug);
}