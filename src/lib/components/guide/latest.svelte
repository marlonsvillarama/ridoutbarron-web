<script>
    let {
        brief = 'Brief',
        category = 'category',
        date = '',
        link = '/',
        title = 'Title',
    } = $props();
    let dateText = $derived(
        (new Date(date)).toLocaleDateString('en', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        })
    );
</script>

<a class="latest" href={link}>
    <i class="ph ph-arrow-circle-right"></i>
    <h4>{title}</h4>
    <div class="subheader">
        <span class="category">{category}</span>
        <i class="ph ph-dot"></i>
        <span class="date">{dateText}</span>
    </div>
    <p class="brief">{brief}</p>
    <span class="read">Click to read more...</span>
</a>

<style>
    .latest {
        color: var(--darkest);
        cursor: pointer;
        position: relative;
        padding: 1rem 1rem 1rem 3rem;
        text-decoration: none;
        transition: background-color 150ms ease;
    }
    .latest:hover {
        background-color: var(--accent-very-light);
    }
    .latest > i {
        position: absolute;
        top: 12px;
        left: 0.5rem;
        font-size: 2rem;
        color: var(--accent);
    }
    .latest > h4 {
        font: 600 1.25rem var(--font-default);
        letter-spacing: -0.25px;
    }
    .latest > .subheader {
        font: 400 0.875rem var(--font-default);
        opacity: 0.7;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 0.25rem 0 0.5rem;
    }
    .latest > .subheader > .category {
        color: var(--accent);
        font-weight: 600;
        text-transform: uppercase;
    }
    .latest > .subheader > i {
        font-size: 1.5rem;
    }
    .latest > p.brief {
        letter-spacing: -0.25px;
        line-height: 1.375rem;
        margin-bottom: 0.75rem;
        width: 100%;
        font-size: 0.875rem;
        opacity: 0.7;
    }
    .latest > .read {
        /* color: var(--accent); */
        opacity: 0.7;
        font-family: var(--font-serif);
        text-decoration: underline;
    }
</style>
