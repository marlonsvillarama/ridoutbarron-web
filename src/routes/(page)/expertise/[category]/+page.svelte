<script>
// @ts-nocheck

    import { page } from "$app/state";
    import Hero from "#lib/components/page/hero.svelte";
    import Litigation from "#lib/components/expertise/litigation.svelte";
    import Corporate from "#lib/components/expertise/corporate.svelte";
    import RealEstate from "#lib/components/expertise/real-estate.svelte";
    import WillsEstate from "#lib/components/expertise/wills-estate.svelte";
    import { onMount } from "svelte";

    let { data } = $props();
    const topics = [{
        id: 'civil-litigation',
        label: 'Civil Litigation',
        content: Litigation
    }, {
        id: 'corporate-commercial',
        label: 'Corporate & Commercial',
        content: Corporate
    }, {
        id: 'real-estate',
        label: 'Real Estate',
        content: RealEstate
    }, {
        id: 'wills-estate',
        label: 'Wills & Estate',
        content: WillsEstate
    }];

    let pathParams = page.url.pathname.split('/');
    let topic = $derived(topics.find(t => t.id === pathParams[pathParams.length - 1]));
    onMount(() => {

    });
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors | Our Expertise</title>
</svelte:head>

<Hero
    background="/images/page/building-vertical.avif"
    // texts={[
    //     'At Ridout Barron, our clients\' success is our priority. We understand that spending money and time on legal help is something most people wish to avoid. We strive to give our clients excellent value for the time and money they spend.'
    // ]}
    // title="Practical, experienced guidance across the legal issues facing Calgarians today"
    title={"Our Expertise"}
    description={topic.label}
/>

<main class="container">
    <div class="row">
        <div class="content">
            <topic.content />
        </div>
        <aside>
            sidebar
        </aside>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 3rem;
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
    /* :global(main > .content > ul) {
        list-style-type: none;
    } */
    :global(main > .row > .content > ul > li) {
        margin-inline-start: 2rem;
        color: var(--darkest);
        /* font-size: 0.875rem; */
        font-weight: 300;
    }
    :global(main > .row > .content > ul > li:not(:last-child)) {
        margin-bottom: 0.5rem;
    }
    main > .row > aside {
        width: min(28rem, 100%);
        display: flex;
        flex-direction: column;
        gap: 3rem;
        border: 1px solid red;
    }
</style>