<script>
    import Crumbs from "../../../../lib/components/crumbs.svelte";
    import SearchBox from "../../../../lib/components/form/search-box.svelte";
    import Latest from "../../../../lib/components/guide/latest.svelte";
    import Category from "../../../../lib/components/guide/category.svelte";

    let { data } = $props();
    // console.log('category data', data);

    const formatDate = (date) => new Date(date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' });
</script>

<svelte:head>
    <title>{data.category.name} | Guides & Resources</title>
</svelte:head>

<main class="category container">
    <Crumbs items={[
        { link: "/", title: "Home" },
        { link: "/guide", title: "Guide & Resources" },
        { link: data.category.link, title: data.category.name },
    ]} />

    <div class="header">
        <div class="title">
            <h1>{data.category.name}</h1>
            <span class="subheader">{data.category.count} {data.category.count === 1 ? 'article' : 'articles'}</span>
        </div>
        <SearchBox onsearch={() => {}} />
    </div>

    <div class="split">
        <div class="list">
            {#each data.posts as post (post.slug)}
                <Latest {...post} />
            {/each}
        </div>

        <aside>
            <h2>Other Categories</h2>
            <div class="content">
                {#each data.categories as category}
                    <Category {...category} />
                {/each}
            </div>
            <!-- <ul>
                {#each data.categories as cat (cat.slug)}
                    <li class:active={cat.slug === data.category.slug}>
                        <a href={cat.link}>{cat.name}</a> <span>({cat.count})</span>
                    </li>
                {/each}
            </ul> -->
        </aside>
    </div>
</main>

<style>
    .category {
        margin: 7rem auto 5rem;
    }
    .category > .header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--accent-lightest);
    }
    @media (min-width: 60rem) {
        .category > .header {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
    /* .categories > .split {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    @media (min-width: 40rem) {
        .categories > .split {
            flex-direction: row;
            flex-wrap: wrap;
        }
    } */
    .category > .split {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    @media (min-width: 60rem) {
        .category > .split {
            flex-direction: row;
            flex-wrap: wrap;
            /* align-items: flex-start; */
            gap: 3rem;
        }
    }
    .category > .split > .list {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .category > .split > aside {
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    @media (min-width: 60rem) {
        .category > .split > aside {
            width: min(30%, 22rem);
        }
    }
    .category > .split > aside > h2 {
        font: 400 1.5rem var(--font-serif);
        padding-bottom: 1rem;
        /* margin-bottom: 1rem; */
        border-bottom: 1px solid var(--accent-lightest);
    }
    .category > .split > aside > .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    @media (min-width: 40rem) {
        .category > .split > aside > .content {
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
</style>
