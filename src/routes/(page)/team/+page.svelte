<script>
    // @ts-nocheck
    import { reveal } from "#lib/reveal.js";
    import Hero from "#lib/components/page/hero.svelte";
    import Profile from "#lib/components/team/profile.svelte";
    import Advice from "#lib/components/page/advice.svelte";
    import NewToWorking from "#lib/components/page/new-to-working.svelte";
    // import { profiles } from "#lib/profiles.js";

    let viewProfile = $state('');
    // let { data } = $props();
    // const profiles = $derived(data.profiles.map(p => {
    //     return {
    //         [p.slug]: p.content
    //     }
    // }));
    // console.log('profiles', profiles);
    // const peter = $derived(data.profiles.find(p => p.slug === 'peter'));
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors | Meet The Team</title>
</svelte:head>

<Hero
    background="/images/page/lion-bridge.avif"
    // texts={[
    //     'At Ridout Barron, our barristers and solicitors are easy to work with and will try to find creative solutions to our clients\' problems.',
    //     'Throughout our history, we have maintained our principles of integrity, quality, and flexibility. Our clients\' success has always been our first priority.'
    // ]}
    title="Meet The Team"
    description="A small, dedicated team that works directly with you from first meeting to final resolution"
/>

<main class="container" id="team">
    <div class="content">
        <p class="summary">
            At Ridout Barron, our barristers and solicitors are easy to work with and will try to find creative solutions to our clients' problems.
        </p>
        <p>
            As a small firm, we keep things personal. You'll work directly with the lawyers handling your file, not get passed down a chain. Meet the people behind the practice and the experience they bring to every client. Throughout our history, we have maintained our principles of integrity, quality, and flexibility. Our clients' success has always been our first priority.
        </p>

        <section>
            <div class="group reveal-section" use:reveal>
                <h2>Our Lawyers</h2>
                <div class="row">
                    <Profile id="peter" name="Peter" fullname="Peter W. K. Ridout"
                        image="/images/team/mid/peter_mid.webp"
                        role="Barrister & Solicitor, Partner"
                        open={viewProfile === 'peter'}
                        onOpen={(value) => viewProfile = value ? 'peter' : ''}
                    />
                    <Profile id="jacqui" name="Jacqui" fullname="Jacqueline A. Barron"
                        image="/images/team/mid/jacqui_mid.webp"
                        role="Barrister & Solicitor, Partner"
                        open={viewProfile === 'jacqui'}
                        onOpen={(value) => viewProfile = value ? 'jacqui' : ''}
                    />
                    <Profile id="lilian" name="Lilian" fullname="Lilian J. Howard"
                        image="/images/team/mid/lilian_mid.webp"
                        role="Barrister & Solicitor, Associate"
                        open={viewProfile === 'lilian'}
                        onOpen={(value) => viewProfile = value ? 'lilian' : ''}
                    />
                </div>
            </div>
            <div class="group reveal-section" use:reveal>
                <h2>Our Staff</h2>
                <div class="row">
                    <Profile id="robin" name="Robin" fullname="Robin Ewing"
                        image="/images/team/mid/robin_mid.webp"
                        role="Senior Real Estate Paralegal"
                        open={viewProfile === 'robin'}
                        onOpen={(value) => viewProfile = value ? 'robin' : ''}
                    />
                    <Profile id="rana" name="Rana" fullname="Rana El Hajj Ahmad"
                        image="/images/team/mid/rana_mid.webp"
                        role="Paralegal"
                        open={viewProfile === 'rana'}
                        onOpen={(value) => viewProfile = value ? 'rana' : ''}
                    />
                    <Profile id="marielle" name="Marielle" fullname="Marielle Villarama"
                        image="/images/team/mid/marielle_mid.webp"
                        role="Office Manager"
                        open={viewProfile === 'marielle'}
                        onOpen={(value) => viewProfile = value ? 'marielle' : ''}
                    />
                </div>
            </div>
        </section>
    </div>
    <aside>
        <Advice />
        <NewToWorking />
    </aside>
</main>

<style>
    main {
        /* align-items: flex-start; */
        display: flex;
        flex-direction: column;
        gap: 3rem;
        /* margin: 3rem auto 5rem; */
        margin: 0 auto;
        padding-bottom: 5rem;
        scroll-margin-top: 6rem;
    }
    @media (min-width: 80rem) {
        main {
            flex-direction: row;
            align-items: flex-start;
            gap: 5rem;
        }
    }
    main > .content > p.summary {
        /* color: var(--darker);
        font: 400 clamp(1.25rem, 3vw, 1.5vw) var(--font-default);
        line-height: clamp(1.25rem, 3vw, 2.5vw);
        margin-bottom: 3rem; */
        font: 500 1.25rem var(--font-serif);
        letter-spacing: -0.25px;
        line-height: 2.25rem;
        margin-bottom: 1rem;
    }
    section {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-top: 2rem;
    }
    section > .group > h2 {
        font: 700 2rem var(--font-serif);
        margin-bottom: 0.5rem;
    }
    section > .group > .row {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    @media (min-width: 60rem) {
        section > .group > .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            /* flex-direction: row; */
            gap: 3rem;
            align-items: flex-start;
            justify-content: space-between;
        }
    }
    @media (min-width: 80rem) {
        section > .group > .row {
            display: flex;
            flex-direction: row;
            gap: 3rem;
            align-items: flex-start;
            justify-content: space-between;
        }
    }
    main > aside {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        position: sticky;
        top: 6rem;
    }
    @media (min-width: 60rem) {
        main > aside {
            flex-direction: row;
        }
    }
    @media (min-width: 80rem) {
        main > aside {
            flex-direction: column;
        }
    }
</style>
