<script>
    import Hero from "#lib/components/hero.svelte";
    import Brief from "#lib/components/home/brief.svelte";
    import Services from "#lib/components/home/services.svelte";
    import Team from "#lib/components/home/team.svelte";
    import History from "#lib/components/home/history.svelte";
    import Testimonials from "#lib/components/home/testimonials.svelte";
    import Footer from "#lib/components/footer.svelte";
</script>

<Hero />

<main>
    <Brief />
    <Services />
    <Team />
    <History />
    <Testimonials />
</main>

<Footer />

<style>
    :global(main > section a.cta) {
        background-color: var(--accent);
        border-radius: 3rem;
        color: var(--white);
        letter-spacing: -0.25px;
        padding: 0.75rem 2rem;
        text-decoration: none;
        width: max-content;
        transition: background-color 150ms ease;
    }
    :global(main > section a.cta:hover) {
        background-color: var(--accent-dark);
    }
</style>
