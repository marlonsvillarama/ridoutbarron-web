<script>
    import Header from "#lib/components/page/header.svelte";
	let { children } = $props();
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors | Contact Us</title>
</svelte:head>

<Header />

{@render children()}
