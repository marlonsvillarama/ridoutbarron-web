<script>
    let {
        children,
        image
    } = $props();
</script>

<section class="expertise-team">
    <h3>Meet Our Team</h3>
    <img src={image} alt="Meet Our Team">
    {@render children?.()}
</section>

<style>
    .expertise-team > h3 {
        font: bold 1.5rem var(--font-serif);
        margin-bottom: 0.5rem;
        width: 100%;
    }
    .expertise-team > img {
        border-radius: 0.5rem;
        width: 100%;
        height: auto;
    }
    :global(.expertise-team > p) {
        margin-top: 1rem;
    }
</style>
