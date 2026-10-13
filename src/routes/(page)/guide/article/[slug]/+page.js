// @ts-nocheck
import { error } from "@sveltejs/kit";

const slugify = (value = '') => {
    return value.toLowerCase().trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
};

const loadPosts = (article) => {
    const postFiles = import.meta.glob('/src/content/posts/*.md', { eager: true, import: 'metadata' });
    const posts = Object.entries(postFiles).map(([path, meta]) => {
        const slug = path.split('/').pop()?.replace(/\.md$/, '');
        return { ...meta, slug };
    })
    .filter(p => !p.draft);

    const counts = new Map();
    for (const p of posts) {
        counts.set(p.category, (counts.get(p.category) || 0) + 1);
    }

    return {
        posts,
        categories: [...counts]
            .map(([name, count]) => ({ name, slug: slugify(name), count }))
            .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    }
}

export async function load({ params }) {
    const allPosts = loadPosts();
    const loader = import.meta.glob('/src/content/posts/*.md')[`/src/content/posts/${params.slug}.md`];
    const post = await loader();
    if (!post) error(404, 'Page not found');
    if (post.metadata.draft) error(404, 'Page not found');

    let meta = {
        ...post.metadata,
        slug: slugify(post.metadata.title)
    }
    return {
        content: post.default,
        meta,
        posts: allPosts.posts,
        categories: allPosts.categories
    }
}
