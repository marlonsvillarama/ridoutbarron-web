<script>
	import Header from "#lib/components/header.svelte";
    import Footer from "#lib/components/footer.svelte";
	let { children } = $props();
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors</title>
</svelte:head>

<Header />

{@render children()}

<Footer />
