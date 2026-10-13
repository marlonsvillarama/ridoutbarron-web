<script>
// @ts-nocheck

    import Hero from "#lib/components/page/hero.svelte";
    import SearchBox from "#lib/components/form/search-box.svelte";
    import Featured from "#lib/components/guide/featured.svelte";
    import Latest from "#lib/components/guide/latest.svelte";

    /* const featuredArticles = [
        {
            category: 'Real Estate',
            title: 'Selling a Property by Power of Attorney',
            link: '/guide'
        },
        {
            category: 'From The Firm',
            title: 'Anti-Money Laundering Rules',
            link: '/guide'
        },
        {
            category: 'Civil Litigation',
            title: 'How to Avoid Litigation Limbo',
            link: '/guide'
        },
    ]; */

    /* const latestArticles = [
        {
            brief: 'Being served with a lawsuit can be unsettling, particularly if you were not expecting it.The most important thing to know is...',
            category: 'Civil Litigation',
            date: 'September 12, 2026',
            link: '/',
            title: 'What Happens After You Are Served With a Lawsuit?',
        },
        {
            brief: 'Choosing an executor is one of the most important decisions you will make when preparing your Will. Your executor is the one...',
            category: 'Wills & Estates',
            date: 'September 3, 2026',
            link: '/',
            title: 'The Right Person For The Job: Choosing Your Executor',
        },
        {
            brief: 'Once your offer has been accepted, there are several legal and financial steps between signing the purchase contract and...',
            category: 'Real Estate',
            date: 'August 24, 2026',
            link: '/',
            title: 'Buying a Home in Alberta: A Step-by-step Legal Guide',
        },
    ]; */

    /* const articleCategories = [
        {
            id: 'litigation',
            title: 'Civil Litigation',
            count: 19
        },
        {
            id: 'real-estate',
            title: 'Real Estate',
            count: 33
        },
        {
            id: 'wills',
            title: 'Wills & Estates',
            count: 25
        },
        {
            id: 'corporate',
            title: 'Corporate & Commercial',
            count: 28
        },
        {
            id: 'firm',
            title: 'From The Firm',
            count: 8
        },
    ]; */

    let { data } = $props();
    console.log('guide categories', data.categories);
    const featuredArticles = data.posts.filter(d => d.featured).slice(0, 3);
    const latestArticles = data.posts.filter(d => !d.featured).slice(0, 5);
    const articleCategories = data.categories;
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
    <!-- <div class="header">
        <ul class="categories">
            <li><a href="/guide">All Resources</a></li>
            <li><a href="/guide">Construction</a></li>
            <li><a href="/guide">Corporate</a></li>
            <li><a href="/guide">Real Estate</a></li>
            <li><a href="/guide">Wills & Estates</a></li>
        </ul>

        <SearchBox onsearch={() => {}} />
    </div> -->

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
                        {@render articleCategory(category.id, category.name, category.count)}
                    {/each}
                </div>
            </div>
        </aside>
    </div>
</main>

{#snippet articleCategory(id, title, count)}
    <a class="category" href="/guide/{id}" {title}>
        <span class="title">{title}</span>
        <span class="count">{count} article{count !== 1 ? 's' : ''} <i class="ph ph-arrow-square-out"></i></span>
    </a>
{/snippet}

<style>
    .guide {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin: 3rem auto 5rem;
    }
    /* .guide > .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    } */
    /* .guide > .header > .categories {
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 1.5rem;
    } */
    /* .guide > .header > .categories > li > a {
        color: var(--darkest);
        font-weight: 500;
        text-decoration: none;
        padding-bottom: 0.375rem;
        border-bottom: 2px solid transparent;
        opacity: 0.7;
        transition: border-color 150ms ease, opacity 150ms ease;
    } */
    /* .guide > .header > .categories > li > a:not(.active):hover {
        opacity: 1.0;
        border-color: var(--accent-lighter);
    } */
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
        /* grid-template-columns: 1fr 1fr; */
        gap: 1rem;
    }
    .categories > .split > .category {
        border: 1px solid var(--accent-lightest);
        cursor: pointer;
        padding: 1rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: background-color 150ms ease;
    }
    .categories > .split > .category:hover {
        background-color: var(--accent-bg-pale);
    }
    .categories > .split > .category > .title {
        font-size: 1rem;
        font-weight: 500;
        color: var(--darkest);
    }
    .categories > .split > .category > .count {
        font-size: 0.875rem;
        color: var(--darkest);
        opacity: 0.7;
        display: flex;
        align-items: center;
        gap: 0.5rem;
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
