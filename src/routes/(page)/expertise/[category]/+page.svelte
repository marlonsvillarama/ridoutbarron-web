<script>
// @ts-nocheck

    import { page } from "$app/state";
    import { onMount } from "svelte";
    import Hero from "#lib/components/page/hero.svelte";
    import Crumbs from "#lib/components/crumbs.svelte";
    import Advice from "#lib/components/page/advice.svelte";
    import Featured from "#lib/components/guide/featured.svelte";
    import Litigation from "#lib/components/expertise/litigation.svelte";
    import Corporate from "#lib/components/expertise/corporate.svelte";
    import RealEstate from "#lib/components/expertise/real-estate.svelte";
    import WillsEstate from "#lib/components/expertise/wills-estate.svelte";
    import Team from "#lib/components/expertise/team.svelte";

    let { data } = $props();
    const topics = [{
        id: 'civil-litigation',
        label: 'Civil Litigation',
        team: {
            image: 'peter-lilian.avif',
            content: [
                'Peter and Lilian are our litigators...',
                'More description here'
            ]
        },
        content: Litigation
    }, {
        id: 'corporate-commercial',
        label: 'Corporate & Commercial',
        team: {
            image: 'peter-jacqui.avif',
            content: [
                'Peter and Jacqui description...',
                'More description here'
            ]
        },
        content: Corporate
    }, {
        id: 'real-estate',
        label: 'Real Estate',
        team: {
            image: 'jacqui-solo.avif',
            content: [
                'Jacqui real estate description...',
                'More description here'
            ]
        },
        content: RealEstate
    }, {
        id: 'wills-estate',
        label: 'Wills & Estate',
        team: {
            image: 'jacqui-solo.avif',
            content: [
                'Jacqui real estate description...',
                'More description here'
            ]
        },
        content: WillsEstate
    }];

    let pathParams = page.url.pathname.split('/');
    let topic = $derived(topics.find(t => t.id === pathParams[pathParams.length - 1]));
    let otherTopics = $derived(topics.filter(t => t.id !== pathParams[pathParams.length - 1]));
    let featuredArticles = $derived(data.posts.filter(p => p.categorySlug === topic.id));
    // console.log('featuredArticles', featuredArticles);

    onMount(() => {
        pathParams = page.url.pathname.split('/');
        featuredArticles = data.posts.filter(p => p.categorySlug === topic.id);
        console.log('featuredArticles', featuredArticles);
    });
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors | Our Expertise - {topic?.label}</title>
</svelte:head>

<Hero
    background="/images/page/building-vertical.avif"
    // texts={[
    //     'At Ridout Barron, our clients\' success is our priority. We understand that spending money and time on legal help is something most people wish to avoid. We strive to give our clients excellent value for the time and money they spend.'
    // ]}
    // title="Practical, experienced guidance across the legal issues facing Calgarians today"
    title={"Our Expertise"}
    full={false}
    description={topic?.label}
/>

<main class="container">
    <!-- <Crumbs items={crumbs} /> -->

    <div class="row">
        <div class="content">
            {#if topic}
            <topic.content />
            {/if}

            <div class="other-categories">
                <h3>Explore other areas</h3>
                <div class="list">
                    {#each otherTopics as otherTopic}
                    <a href="/expertise/{otherTopic.id}" title={otherTopic.label}
                        data-sveltekit-reload
                    >{otherTopic.label}</a>
                    {/each}
                </div>
            </div>
        </div>
        <aside>
            <!-- <Team image="/images/expertise/{topic.team.image}">
                {#each topic.team.content as content}
                    <p>{content}</p>
                {/each}
            </Team> -->
            <Advice />
        </aside>
    </div>

    <section class="featured">
        <h3>{topic.label} Articles</h3>
        <div class="row">
            {#each featuredArticles.slice(0, 3) as article}
                <Featured {...article} />
            {/each}
        </div>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 3rem auto;
        scroll-margin-top: 6rem;
    }
    main > .row {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    @media (min-width: 60rem) {
        main > .row {
            flex-direction: row;
            align-items: flex-start;
            gap: 5rem;
        }
    }
    main > .row > .content {
        flex: 1;
    }
    :global(main > .row > .content > p.summary) {
        font: 600 1.25rem var(--font-serif);
        line-height: 2rem;
        margin-bottom: 1rem;
    }
    :global(main > .row > .content > p) {
        color: var(--darker);
        font: 400 1rem var(--font-default);
        line-height: clamp(1.75rem, calc(1.75rem + 5vw), 1.75vw);
        margin-bottom: 1rem;
    }
    /* :global(main > .row > .content > p:not(:last-of-type)) {
        margin-bottom: 1rem;
    } */
    :global(main > .row > .content > ol),
    :global(main > .row > .content > ul) {
        margin-bottom: 1rem;
    }
    :global(main > .row > .content > ol > li),
    :global(main > .row > .content > ul > li) {
        margin-inline-start: 2rem;
        color: var(--darkest);
        /* font-size: 0.875rem; */
        /* font-weight: 300; */
        line-height: 1.75rem;
    }
    :global(main > .row > .content > ol > li:not(:last-child)),
    :global(main > .row > .content > ul > li:not(:last-child)) {
        margin-bottom: 0.5rem;
    }

    .other-categories {
        margin-top: 3rem;
    }
    .other-categories > h3 {
        font: bold 1.5rem var(--font-serif);
        margin-bottom: 0.5rem;
        /* margin-bottom: 1rem; */
    }
    .other-categories > .list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
    }
    .other-categories > .list > a {
        background-color: var(--accent);
        /* border: 1px solid var(--accent-lightest); */
        border-radius: 0.5rem;
        color: var(--white);
        cursor: pointer;
        padding: 0.75rem 1.5rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: background-color 150ms ease, color 150ms ease;
    }

    main > .row > aside {
        /* width: min(28rem, 100%); */
        position: sticky;
        top: 6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        /* border: 1px solid red; */
        /* position: relative; */
    }
    @media (min-width: 40rem) {
        main > .row > aside {
            justify-content: center;
        }
    }
    @media (min-width: 60rem) {
        main > .row > aside {
            width: min(28rem, 100%);
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
    /* @media (min-width: 40rem) {
        .featured > .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    } */
    @media (min-width: 60rem) {
        .featured > .row {
            display: flex;
            flex-direction: row;
        }
    }
    /* main > .featured > .row {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    } */
</style>