<script>
    let {
        category = 'Category',
        title = 'Title',
        description = 'Description',
        link = '/'
    } = $props();
</script>

<article>
    <div class="image"></div>
    <div class="content">
        <div class="top">
            <span class="category">{category}</span>
            <span class="title">{title}</span>
            <p>{description}</p>
        </div>
        <a href={link} {title} class="read-link">Read More <i class="ph ph-arrow-right"></i></a>
    </div>
</article>

<style>
    article {
        flex: 1;
        display: flex;
        gap: 1rem;
    }
    article > .image {
        width: 9rem;
        height: 10rem;
        border: 1px solid green;
    }
    article > .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    article > .content > .top {
        display: flex;
        flex-direction: column;
    }
    article > .content > .top > .category {
        color: var(--accent);
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: -0.25px;
    }
    article > .content > .top > .title {
        font: 400 1.5rem var(--font-serif);
        margin-bottom: 1rem;
    }
    article > .content > .top > p {
        font-size: 0.875rem;
        opacity: 0.6;
    }
    article > .content > .read-link {
        color: var(--accent);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font: 500 0.875rem var(--font-default);
    }
</style>