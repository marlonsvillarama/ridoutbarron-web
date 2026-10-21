<script>
    import Header from "#lib/components/header.svelte";
	import Footer from "#lib/components/footer.svelte";
	let { children } = $props();
</script>

<Header />

<div class="background">
	{@render children()}
</div>

<Footer />

<style>
	.background	{
        /* background:
            radial-gradient(circle at 30% 40%, var(--white) 0%, transparent 1000%),
            url(/images/svg/1_edited.svg) top left / 140px 117.6px repeat; */
		/* padding: 3rem 0 3rem; */
	}
    :global(a.cta) {
        background-color: var(--accent);
        border-radius: 3rem;
        color: var(--white);
        letter-spacing: -0.25px;
        padding: 0.75rem 2rem;
        text-decoration: none;
        width: max-content;
        transition: background-color 150ms ease;
    }
    :global(a.cta:hover) {
        background-color: var(--accent-dark);
    }
</style>