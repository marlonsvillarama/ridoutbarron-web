<script>
    import Hero from "#lib/components/page/hero.svelte";
    import Topic from "#lib/components/expertise/topic.svelte";
    import Litigation from "#lib/components/expertise/litigation.svelte";
    import LitigationImage from "#lib/components/expertise/litigation-image.svelte";

    const topics = [{
        id: 'litigation',
        label: 'Civil Litigation',
        items: [
            'Construction Law',
            'Condominium Disputes',
            'Professional Negligence',
            'Shareholder Disputes'
        ],
        content: Litigation,
        // team: {
        //     id: 'peter',
        //     image: `<img src="/images/team/profiles/peter_bike_001.webp" alt="Civil Litigation" />`
        // }
    }, {
        id: 'corporate',
        label: 'Corporate & Commercial',
        items: [
            'Incorporations',
            'Minute Book Upkeep',
            'Shareholder Matters',
            'Commercial Disputes'
        ]
    }, {
        id: 'real-estate',
        label: 'Real Estate',
        items: [
            'Residential Purchases',
            'Residential Sales',
            'Refinancing & Mortgages',
            'Commercial Real Estate'
        ]
    }, {
        id: 'wills',
        label: 'Wills & Estates',
        items: [
            'Wills',
            'Enduring Power of Attorney',
            'Personal Directives',
            'Probate & Estate Administration'
        ]
    }];

    let selectedTopic = $state(topics[0].id);
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors | Our Expertise</title>
</svelte:head>

<Hero
    background="/images/page/building-vertical.avif"
    texts={[
        'At Ridout Barron, our clients\' success is our priority. We understand that spending money and time on legal help is something most people wish to avoid. We strive to give our clients excellent value for the time and money they spend.'
    ]}
    title="Our Expertise"
/>

<main class="container">
    <!-- <h2>What We Do</h2> -->
    <div class="tabs">
        {#each topics as topic, index}
        <button type="button" id="tab-{topic.id}"
            class:selected={selectedTopic === topic.id}
            onclick={() => selectedTopic = topic.id}
        >{topic.label}</button>
        {/each}
    </div>

    <!-- <div class="group"> -->
    {#each topics as topic}
        <Topic {...topic} show={selectedTopic === topic.id}><topic.content /></Topic>
    {/each}
    <!-- </div> -->
</main>

<style>
    main {
        /* align-items: flex-start; */
        display: flex;
        flex-direction: column;
        /* gap: 3rem; */
        margin: 0 auto;
    }
    /* section {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    } */
    /* section > h2 {
        font: 700 2rem var(--font-serif);
        margin-bottom: 0.5rem;
    } */
    main > .tabs {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }
    main > .tabs > button {
        background-color: transparent;
        border: 0;
        outline: 0;
        color: var(--dark);
        cursor: pointer;
        font-size: 1rem;
        font-weight: 400;
        padding-bottom: 0.5rem;
        border-bottom: 3px solid transparent;
    }

    main > .tabs > button.selected {
        border-bottom: 3px solid var(--accent);
    }
    /* section > .group {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    @media (min-width: 40rem) {
        section > .group {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 80rem) {
        section > .group {
            display: flex;  
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
        }
    } */
</style>
