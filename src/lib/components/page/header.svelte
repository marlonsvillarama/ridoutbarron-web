<script>
    import Logo from "../logo.svelte";
    import Nav from "../nav.svelte";
</script>

<header>
    <div class="container">
        <Logo />
        <Nav />
    </div>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--darkest);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
    header > .container {
        margin: 0 auto;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
