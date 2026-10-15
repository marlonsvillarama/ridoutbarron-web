import { error } from '@sveltejs/kit';
import { posts, getPost, getPostModule, getCategories, getPostsInCategory } from '#lib/posts';

export const prerender = true;

export function entries() {
  return posts.map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export function load({ params }) {
  const meta = getPost(params.slug);

  // 404 if the post doesn't exist OR is requested under the wrong category,
  // so each article has exactly one valid URL.
  if (!meta || meta.categorySlug !== params.category) {
    error(404, 'Article not found');
  }

  return {
    content: getPostModule(params.slug).default,
    meta,
    categories: getCategories(),
    related: getPostsInCategory(meta.categorySlug, meta.slug)
  };
}