<script>
    let { items = [] } = $props();

    let currentPage = items[items.length - 1]?.link;
    let selectedPage = $state(currentPage);
    $effect(() => {
        if (selectedPage === currentPage) {
            return;
        }
        window.location.href = selectedPage;
    });
</script>

<div class="crumbs">
    <div class="crumb-select">
        <span>Back To:</span>
        <select name="crumb-links" bind:value={selectedPage}>
            {#each items as item, index}
                {#if index < items.length - 1}
                <option value={item.link}>
                    &#10095; {item.title}
                </option>
                {/if}
            {/each}
        </select>
    </div>
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
    .crumb-select {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .crumb-select > span {
        font-weight: 600;
    }
    .crumb-select > select {
        background-color: var(--off-white);
        border: 1px solid var(--accent);
        outline: 0;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        /* width: 100%; */
        flex: 1;
    }
    @media (min-width: 60rem) {
        .crumb-select {
            display: none;
        }
    }
    .crumbs > ul {
        list-style-type: none;
        display: none;
        gap: 1rem;
    }
    @media (min-width: 60rem) {
        .crumbs > ul {
            display: flex;
        }
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