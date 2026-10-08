<script>
    let {
        id,
        title = 'Title',
        items = []
    } = $props();
</script>

<div class="service-card" {id}>
    <div class="content">
        <h3>{title}</h3>
        <p>
            {#each items as item}
                <span><i class="ph ph-dot-outline"></i><span>{item}</span></span>
            {/each}
        </p>
        <div class="learn-more">
            <i class="ph ph-dot-outline"></i>
            <a href="/" title="Learn more">Learn more...</a>
        </div>
    </div>
</div>

<style>
    .service-card {
        color: var(--white);
        width: 100%;
    }
    .service-card > .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        position: relative;
        border-radius: 0.5rem;
    }
    .service-card > .content > h3 {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--white);
        font-family: var(--font-serif);
        font-size: 1.5rem;
        font-weight: 200;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--accent);
        margin-bottom: 0.5rem;
        width: 100%;
    }
    .service-card > .content > p {
        opacity: 0.85;
        font-weight: 400;
        margin-top: 0.5rem;
        opacity: 0.8;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
    }
    .service-card > .content > p > span,
    .service-card > .content > .learn-more {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .service-card > .content > .learn-more > i {
        color: transparent;
    }
    .service-card > .content > .learn-more > a {
        background-color: var(--accent);
        color: var(--white);
        display: flex;
        margin-top: 1.5rem;
        padding: 0.5rem 1.25rem;
        border-radius: 3rem;
        font-size: 0.875rem;
        text-decoration: none;
        transition: background-color 150ms ease;
    }
    .service-card > .content > .learn-more > a:hover {
        background-color: var(--accent-light);
    }
    /* .service-card > .content > .details > a {
        font-size: 0.75rem;
        font-weight: 400;
        display: inline-block;
    } */
</style>
