<script>
    let { items = [] } = $props();
</script>

<div class="crumbs">
    <ul>
        {#each items as item, index}
            <li>
                <a href={item.link} title={item.title}>{item.title}</a>
                {#if index < items.length - 1}
                    &#10095;
                {/if}
            </li>
        {/each}
    </ul>
</div>

<style>
    .crumbs {
        margin-bottom: 2rem;
    }
    .crumbs > ul {
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }
    .crumbs > ul > li {
        font-size: 0.875rem;
    }
    /* .crumbs > ul > li:not(:last-child) {
    }
    .crumbs > ul > li:not(:last-child):hover {
        opacity: 1.0;
    } */
    /* .crumbs > ul > li:not(:last-child)::after {
        content: "\25B6";
        margin-left: 1rem;
    } */
    .crumbs > ul > li > a {
        color: var(--darkest);
        text-underline-offset: 0.25rem;
        transition: color 150ms ease;
    }
    .crumbs > ul > li:not(:last-child) > a {
        opacity: 0.6;
        margin-right: 1rem;
    }
    .crumbs > ul > li:not(:last-child) > a:hover {
        opacity: 1.0;
    }
    .crumbs > ul > li:last-child > a {
        font-weight: 600;
        text-decoration: none;
    }
    .crumbs > ul > li > a:hover {
        color: var(--accent);
        text-underline-offset: 0.25rem;
    }
</style>