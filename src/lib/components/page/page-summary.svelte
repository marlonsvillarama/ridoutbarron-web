<script>
    let { children } = $props();
</script>

<div class="content">
{@render children?.()}
</div>

<style>
    :global(.content > p) {
        color: var(--darker);
        font: 400 1rem var(--font-default);
        line-height: clamp(1.75rem, calc(1.75rem + 5vw), 1.75vw);
    }
    :global(p:not(:last-of-type)) {
        margin-bottom: 1rem;
    }
</style>