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
