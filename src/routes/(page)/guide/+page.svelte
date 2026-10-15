<script>
// @ts-nocheck

    import Hero from "#lib/components/page/hero.svelte";
    import SearchBox from "#lib/components/form/search-box.svelte";
    import Featured from "#lib/components/guide/featured.svelte";
    import Latest from "#lib/components/guide/latest.svelte";
    import Category from "#lib/components/guide/category.svelte";
    import { getPostsInCategory } from "../../../lib/posts.js";

    let { data } = $props();
    const featuredArticles = data.posts.filter(d => d.featured).slice(0, 3);
    const latestArticles = data.posts.filter(d => !d.featured).slice(0, 5);

    let articleCategories = $derived.by(() => {
        let list = [ ...new Set(data.posts.map(p => p.category)) ].sort();
        let output = list.map(c => {
            let articles = data.posts.filter(p => p.category === c);
            return {
                id: c.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
                name: c,
                count: articles.length
            }
        });
        return output;
    });
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors | Guides & Resources</title>
</svelte:head>

<Hero
    background="/images/page/peak.avif"
    texts={[
        'Our guides and resources offer plain-language insights on legal topics that matter to individuals, businesses, and organizations in Alberta.'
    ]}
    title="Guides & Resources"
/>

<main class="guide container">
    <section class="featured">
        <h3>Featured Articles</h3>
        <div class="row">
            {#each featuredArticles as article}
                <Featured {...article} />
            {/each}
        </div>
    </section>

    <div class="split">
        <div class="content">
            <section class="latest">
                <h3>Latest Guides & Insights</h3>
                <div class="list">
                    {#each latestArticles as article}
                        <Latest {...article} />
                    {/each}
                </div>
            </section>
        </div>

        <aside>
            <div class="stay-informed">
                <h3>Stay Informed</h3>
                <p>Get the latest guides and insights delivered to your inbox.</p>
                <button type="button">Subscribe</button>
            </div>

            <div class="categories">
                <h3>Browse Guides By Category</h3>
                <div class="split">
                    {#each articleCategories as category}
                        <Category {...category} />
                    {/each}
                </div>
            </div>
        </aside>
    </div>
</main>

<style>
    .guide {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin: 3rem auto 5rem;
    }
    :global(.guide > .header > .categories > li > a.active) {
        color: var(--accent);
        border-color: var(--accent);
        opacity: 1.0;
    }

    .guide h3 {
        font: bold 1.5rem var(--font-serif);
        margin-bottom: 0.5rem;
    }
    .featured > .row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 3rem;
    }

    .guide > .split {
        display: flex;
        align-items: flex-start;
        gap: 5rem;
    }
    .guide > .split > .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .latest > .list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .categories > .split {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .guide > .split > aside {
        width: min(30%, 30rem);
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .guide > .split > aside > .stay-informed {
        background:
            linear-gradient(to bottom, var(--dark-bg-semi-light) 0%, var(--dark-bg-semi-light) 100%),
            url(/images/banff-001.webp);
        background-size: cover;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .guide > .split > aside > .stay-informed > h3 {
        color: var(--white);
        font: 500 2rem var(--font-serif);
    }
    .guide > .split > aside > .stay-informed > p {
        color: var(--off-white);
        margin-bottom: 1rem;
    }
    .guide > .split > aside > .stay-informed > button {
        background-color: var(--accent-bg-semi-light);
        color: var(--white);
        text-transform: uppercase;
        border: 0;
        border-radius: 3rem;
        cursor: pointer;
        outline: 0;
        padding: 1rem;
        transition: background-color 150ms ease;
    }
    .guide > .split > aside > .stay-informed > button {
        background-color: var(--accent);
    }
</style>
