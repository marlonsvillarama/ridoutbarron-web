<script>
    let {
        link = '/',
        name = 'Category',
        count = 0
    } = $props();
    // console.log('single category data', );
</script>

<a class="category-item" href={link} title={name}>
    <span class="title">{name}</span>
    <span class="count">{count} article{count !== 1 ? 's' : ''} <i class="ph ph-arrow-square-out"></i></span>
</a>

<style>
    .category-item {
        border: 1px solid var(--accent-lightest);
        cursor: pointer;
        padding: 1rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: background-color 150ms ease;
        width: min(22rem, 100%);
    }
    /* @media (min-width: 40rem) {
        .category-item {}
    } */
    .category-item:hover {
        background-color: var(--accent-bg-pale);
    }
    .category-item > .title {
        font-size: 1rem;
        font-weight: 500;
        color: var(--darkest);
    }
    .category-item > .count {
        font-size: 0.875rem;
        color: var(--darkest);
        opacity: 0.7;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>