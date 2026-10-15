import { error } from '@sveltejs/kit';
import { getCategories, getCategory, getPostsInCategory } from '#lib/posts';

export const prerender = true;

export function entries() {
  return getCategories().map((c) => ({ category: c.slug }));
}

export function load({ params }) {
  const category = getCategory(params.category);
  if (!category) error(404, 'Category not found');

  return {
    category,
    posts: getPostsInCategory(category.slug),
    categories: getCategories()
  };
}