<script>
    import Header from "#lib/components/page/header.svelte";
	import Footer from "#lib/components/footer.svelte";
	let { children } = $props();
</script>

<Header />

{@render children()}

<Footer />