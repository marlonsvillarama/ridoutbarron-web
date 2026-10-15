<script>
    import Crumbs from "#lib/components/crumbs.svelte";
    import Category from "#lib/components/guide/category.svelte";

    let { data } = $props();
    const Content = $derived(data.content);

    let dateText = $derived(
        (new Date(data.meta.date)).toLocaleDateString('en', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        })
    );
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors | {data.meta.title}</title>
</svelte:head>

<main class="article container">
    <Crumbs items={[
        { link: "/", title: "Home" },
        { link: "/guide", title: "Guide & Resources" },
        { link: `/guide/${data.meta.categorySlug}`, title: data.meta.category },
        { link: data.meta.link, title: data.meta.title },
    ]} />
    
    <div class="split">
        <div class="content">
            <div class="header">
                <h1>{data.meta.title}</h1>
                <span class="subheader">{dateText} <span class="duration">({data.meta.duration} minute read)</span></span>
            </div>

            <data.content />
        </div>

        <aside>
            <div class="stay-informed">
                <h3>Stay Informed</h3>
                <p>Get the latest guides and insights delivered to your inbox.</p>
                <button type="button">Subscribe</button>
            </div>

            <section>
                <h2>Other articles in this category</h2>
                <ul>
                    {#each data.related as article}
                        <li><a href={article.link}>{article.title}</a></li>
                    {/each}
                </ul>
            </section>

            <section>
                <h2>Browse other categories</h2>
                <div class="content">
                    {#each data.categories as category}
                        <Category {...category} />
                    {/each}
                </div>
            </section>
        </aside>
    </div>
</main>

<style>
    .article {
        margin: 7rem auto 5rem;
    }
    .article > .split {
        display: flex;
        align-items: flex-start;
        gap: 5rem;
    }
    .article > .split > .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .article > .split > .content > .header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--accent-lightest);
    }
    .article > .split > .content > .header > .subheader {
        font-size: 0.875rem;
        opacity: 0.8;
    }
    .article > .split > .content > .header > .subheader > .duration {
        font-style: italic;
    }
    :global(.article > .split > .content > h2) {
        margin-top: 1rem;
        font-weight: 500;
    }
    :global(.article > .split > .content > p) {
        letter-spacing: -0.25px;
        line-height: 1.75rem;
        opacity: 0.8;
    }
    :global(.article > .split > .content > p.summary) {
        font: 400 1.25rem var(--font-serif);
        line-height: 2rem;
        margin-bottom: 1rem;
    }
    :global(.article > .split > .content > blockquote) {
        background-color: var(--accent-bg-lighter);
        width: 75%;
        margin: 1rem auto;
        padding: 2rem 3rem;
        font: 400 1.5rem var(--font-serif);
        line-height: 2.5rem;
        color: var(--dark);
    }
    :global(.article > .split > .content > ol > li) {
        margin-inline-start: 2rem;
        line-height: 1.5rem;
    }
    .article > .split > aside {
        width: min(30%, 22rem);
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .article > .split > aside > .stay-informed {
        background:
            linear-gradient(to bottom, var(--dark-bg-semi-light) 0%, var(--dark-bg-semi-light) 100%),
            url(/images/banff-001.webp);
        background-size: cover;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .article > .split > aside > .stay-informed > h3 {
        color: var(--white);
        font: 500 2rem var(--font-serif);
    }
    .article > .split > aside > .stay-informed > p {
        color: var(--off-white);
        margin-bottom: 1rem;
        opacity: 0.8;
    }
    .article > .split > aside > .stay-informed > button {
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
    .article > .split > aside > .stay-informed > button:hover {
        background-color: var(--accent);
    }
    .article > .split > aside > section > h2 {
        font: 400 1.5rem var(--font-serif);
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid var(--accent-lightest);
    }
    .article > .split > aside > section > .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .article > .split > aside > section > ul > li {
        margin-inline-start: 1rem;
        line-height: 2rem;
    }
    .article > .split > aside > section > ul > li > a {
        color: var(--darkest);
    }
    .article > .split > aside > section > ul > li > a:hover {
        color: var(--accent);
    }
</style>