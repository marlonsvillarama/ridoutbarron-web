<script>
    import ServiceCard from "./service-card.svelte";

    const cards = [
        {
            id: 'litigation',
            title: 'Civil Litigation',
            items: [
                'Contruction Law',
                'Condominium Disputes',
                'Professional Negligence',
                'Shareholder Disputes',
            ]
        },
        {
            id: 'corporate',
            title: 'Corporate & Commercial',
            items: [
                'Incorporations',
                'Minute Book Upkeep',
                'Shareholder Matters',
                'Commercial Disputes',
            ]
        },
        {
            id: 'real-estate',
            title: 'Real Estate',
            items: [
                'Residential Purchases',
                'Residential Sales',
                'Refinancing & Mortgages',
                'Commercial Real Estate',
            ]
        },
        {
            id: 'wills-estates',
            title: 'Wills & Estates',
            items: [
                'Wills',
                'Enduring Power of Attorney',
                'Personal Directives',
                'Probate & Estate Administration',
            ]
        },
    ];
</script>

<section id="services">
    <div class="container split">
        <h2>What We Do</h2>
        <p class="blurb">
            From everyday legal needs to more complex matters, we help you understand your options and move forward.
        </p>

        <div class="split">
            {#each cards as card}
            <ServiceCard {...card} />
            {/each}
        </div>

        <div class="learn">
            <a href="/" title="Learn More" class="cta">Learn More</a>
        </div>
    </div>
</section>

<style>
    #services {
        background-color: var(--charcoal);
        padding-top: clamp(3.5rem, 5vw, 5rem);
        padding-bottom: clamp(3.5rem, 5vw, 5rem);
    }
    #services > .container {
        margin: 0 auto;
    }
    #services > .container > h2 {
        color: var(--accent);
        font: 500 clamp(2rem, 5vw, 2.5rem) var(--font-serif);
    }
    #services > .container > .blurb {
        color: var(--white);
        font-weight: 300;
        opacity: 0.8;
    }
    #services > .container > .split {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2.5rem;
    }
    @media (min-width: 40rem) {
        #services > .container > .split {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }
    }
    @media (min-width: 80rem) {
        #services > .container > .split {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 3rem;
            margin-bottom: 3rem;
        }
    }
    #services > .container > .learn {
        display: flex;
        justify-content: center;
    }
</style>
