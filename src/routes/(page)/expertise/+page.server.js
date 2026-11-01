// @ts-nocheck
import { posts } from "#lib/posts.js";

const slugify = (value = '') => {
    return value.toLowerCase().trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
};

export async function load() {
    return {
        posts
    };
}
// export async function load() {
//     const postFiles = import.meta.glob('/src/content/posts/*.md', { eager: true, import: 'metadata' });
//     const posts = Object.entries(postFiles).map(([path, meta]) => {
//         const slug = path.split('/').pop()?.replace(/\.md$/, '');
//         return {
//             ...meta,
//             slug
//         };
//     })
//     .filter(p => !p.draft)
//     .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

//     const counts = new Map();
//     for (const p of posts) {
//         counts.set(p.category, (counts.get(p.category) || 0) + 1);
//     }

//     return {
//         posts,
//         categories: [...counts]
//             .map(([name, count]) => ({ name, slug: slugify(name), count }))
//             .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
//     }
// }
