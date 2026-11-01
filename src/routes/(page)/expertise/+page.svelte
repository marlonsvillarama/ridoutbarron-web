<script>
// @ts-nocheck

    import { page } from "$app/state";
    import Hero from "#lib/components/page/hero.svelte";
    import Featured from "#lib/components/guide/featured.svelte";
    // import PageSummary from "#lib/components/page/page-summary.svelte";
    import { onMount } from "svelte";

    let { data } = $props();
    const featuredArticles = data.posts.filter(d => d.featured).slice(0, 3);

    const topics = [{
        id: 'civil-litigation',
        label: 'Civil Litigation',
        // items: [
        //     'Construction Law',
        //     'Condominium Disputes',
        //     'Professional Negligence',
        //     'Shareholder Disputes'
        // ],
        // articles: getPostsInCategory('litigation'),
        // content: Litigation,
        // team: {
        //     id: 'peter',
        //     image: `<img src="/images/team/profiles/peter_bike_001.webp" alt="Civil Litigation" />`
        // }
    }, {
        id: 'corporate-commercial',
        label: 'Corporate & Commercial',
        // items: [
        //     'Incorporations',
        //     'Minute Book Upkeep',
        //     'Shareholder Matters',
        //     'Commercial Disputes'
        // ],
        // articles: getPostsInCategory('corporate'),
        // content: Corporate
    }, {
        id: 'real-estate',
        label: 'Real Estate',
        // items: [
        //     'Residential Purchases',
        //     'Residential Sales',
        //     'Refinancing & Mortgages',
        //     'Commercial Real Estate'
        // ],
        // articles: getPostsInCategory('real-estate'),
        // content: RealEstate
    }, {
        id: 'wills-estate',
        label: 'Wills & Estate',
        // items: [
        //     'Wills',
        //     'Enduring Power of Attorney',
        //     'Personal Directives',
        //     'Probate & Estate Administration'
        // ],
        // articles: getPostsInCategory('wills'),
        // content: WillsEstate
    }];

    // let query = page.url.searchParams;
    // console.log(`query = ${query}`, `category = ${query.get('category')}`);
    // let { data } = $props();
    // let selectedTopic = $state('');
    // onMount(() => {
    //     selectedTopic = query.get('category') || topics[0].id;
    // });
    // let categoryArticles = $derived(data.posts.filter(p => p.categorySlug === selectedTopic));
    // let selectedPage = $state(currentPage);
    // $effect(() => {
        // if (selectedPage === currentPage) {
        //     return;
        // }
        // window.location.href = selectedTopic;
        // console.log('selectedTopic', selectedTopic);
    // });
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors | Our Expertise</title>
</svelte:head>

<Hero
    background="/images/page/building-vertical.avif"
    title="Our Expertise"
    description="Focused legal counsel for the moments that matter most in your life and business"
/>

<main class="container" id="expertise">
    <div class="content">
        <p class="summary">
            At Ridout Barron, our clients’ success is our priority. We understand that spending money and time on legal help is something most people wish to avoid. We strive to give our clients excellent value for the time and money they invest.
        </p>
        <p>
            Every legal matter is personal to the people involved. Our practice areas reflect years of work alongside Calgary individuals, families, and businesses. Whatever brings you to us, you can expect clear advice, practical strategy, and a team that knows Alberta law and the local courts.
        </p>
    </div>

    <div class="tabs">
        {#each topics as topic, index}
            {@render Topic(topic)}
        {/each}
    </div>

    <section class="featured">
        <h3>Featured Articles</h3>
        <div class="row">
            {#each featuredArticles as article}
                <Featured {...article} />
            {/each}
        </div>
    </section>

    <!-- <select class="tabs-select" bind:value={selectedTopic}>
        {#each topics as topic}
            <option value={topic.id} selected={selectedTopic === topic.id}>{topic.label}</option>
        {/each}
    </select> -->

    <!-- <div class="group"> -->
    <!-- {#each topics as topic}
        <Topic {...topic} show={selectedTopic === topic.id}
            articles={data.posts.filter(p => p.categorySlug === selectedTopic)}
        ><topic.content /></Topic>
    {/each} -->
    <!-- </div> -->
</main>

{#snippet Topic(topic)}
    <a href="/expertise/{topic.id}" title={topic.label} target="_self" class="topic">
        <div class="title">{topic.label}</div>
        <div class="view">
            <div><i class="ph ph-arrow-right"></i></div>
        </div>
    </a>
{/snippet}

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin: 3rem auto;
        scroll-margin-top: 6rem;
    }
    main > .content > p {
        color: var(--darker);
        font: 400 1rem var(--font-default);
        line-height: clamp(1.75rem, calc(1.75rem + 5vw), 1.75vw);
    }
    main > .content > p:not(:last-of-type) {
        margin-bottom: 1rem;
    }
    main > .content > p.summary {
        font: 500 1.25rem var(--font-serif);
        letter-spacing: -0.25px;
        line-height: 2.25rem;
        margin-bottom: 1rem;
    }
    main > .tabs {
        display: flex;
        flex-direction: column;
        /* margin-top: 2rem; */
        gap: 1.5rem;
    }
    @media (min-width: 40rem) {
        main > .tabs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }
    }
    @media (min-width: 60rem) {
        main > .tabs {
            display: flex;
            flex-direction: row;
            gap: 1.5rem;
            align-items: center;
            justify-content: space-between;
        }
    }

    .featured > h3 {
        font: bold 1.5rem var(--font-serif);
        margin-bottom: 0.5rem;
    }
    .featured > .row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        gap: clamp(1rem, 3vw, 1.5rem);
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

    .topic {
        background:
            radial-gradient(circle at 30% 20%, var(--off-white) 0%, transparent 500%),
            url(/images/svg/1_edited.svg) top left / 140px 117.6px repeat;
        border-left: 3px solid var(--accent);
        display: flex;
        flex-direction: column;
        height: 10rem;
        justify-content: space-between;
        padding: 0.75rem 1rem;
        text-decoration: none;
        transition: box-shadow 150ms ease;
        width: 100%;
    }
    .topic:hover {
        box-shadow: var(--shadow);
    }
    .topic > .title {
        color: var(--darkest);
        font: 600 1.125rem var(--font-default);
    }
    .topic > .view {
        display: flex;
        justify-content: end;
    }
    .topic > .view > div {
        align-items: center;
        background-color: var(--accent-dark);
        border-radius: 50%;
        color: var(--white);
        display: flex;
        height: 2.5rem;
        justify-content: center;
        width: 2.5rem;
    }
</style>
