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
    <section class="categories">
        <h3>Browse Guides By Category</h3>
        <div class="split">
            {#each articleCategories as category}
                <Category {...category} />
            {/each}
        </div>
    </section>
    
    <!-- <section class="featured">
        <h3>Featured Articles</h3>
        <div class="row">
            {#each featuredArticles as article}
                <Featured {...article} />
            {/each}
        </div>
    </section> -->

    <div class="split">
        <div class="content">
            <section class="latest">
                <h3>Featured Articles</h3>
                <div class="list">
                    {#each featuredArticles as article}
                        <Latest {...article} />
                    {/each}
                </div>
            </section>
        </div>

        <aside>
            <div class="advice">
                <h2>Need more help?</h2>
                <p>
                    It's normal to have questions. We're here to make the process straightforward and comfortable from the start.
                </p>
                <a href="/contact" title="Contact Us">Contact Us <i class="ph ph-arrow-right"></i></a>
            </div>
            
            <!-- <div class="stay-informed">
                <h3>Stay Informed</h3>
                <p>Get the latest guides and insights delivered to your inbox.</p>
                <button type="button">Subscribe</button>
            </div> -->
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
    .categories > .split {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    @media (min-width: 40rem) {
        .categories > .split {
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    .featured > .row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        gap: clamp(1rem, 3vw, 3rem);
        /* flex-wrap: wrap; */
    }
    @media (min-width: 40rem) {
        .featured > .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            /* flex-wrap: nowrap; */
            /* gap: 3rem; */
        }
    }
    @media (min-width: 60rem) {
        .featured > .row {
            display: flex;
            flex-direction: row;
        }
    }

    .guide > .split {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    @media (min-width: 60rem) {
        .guide > .split {
            flex-direction: row;
            align-items: flex-start;
            gap: 5rem;
        }
    }
    .guide > .split > .content {
        /* border: 1px solid red; */
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
    .guide > .split > aside {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    @media (min-width: 60rem) {
        .guide > .split > aside {
            width: min(30%, 30rem);
        }
    }

    .advice {
        padding: 2rem;
        background-color: var(--accent-lightest);
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .advice > h2 {
        font: 700 1.5rem var(--font-serif);
    }
    .advice > p {
        font-size: 0.875rem;
        line-height: 1.5rem;
        opacity: 0.7;
    }
    .advice > a {
        background-color: var(--accent);
        border-radius: 3rem;
        color: var(--white);
        font-weight: 500;
        opacity: 0.8;
        padding: 1rem 1.5rem;
        text-decoration: none;
        text-align: center;
        transition: opacity 150ms ease;
        width: 100%;
    }
    .advice > a:hover {
        opacity: 1.0;
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
