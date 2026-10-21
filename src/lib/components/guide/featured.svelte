<script>
    let {
        category = 'Category',
        title = 'Title',
        brief = 'Brief',
        link = '/'
    } = $props();
</script>

<article>
    <!-- <div class="image"></div> -->
    <div class="content">
        <div class="top">
            <span class="category">{category}</span>
            <span class="title">{title}</span>
            <p>{brief}</p>
        </div>
        <a href={link} {title} class="read-link">Read More...</a>
    </div>
</article>

<style>
    article {
        flex: 1;
        display: flex;
        gap: 1rem;
        background-color: var(--white);
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
        background-color: var(--accent-very-light);
        padding: 1.5rem 2rem;
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
        font: 400 clamp(1.25rem, 3vw, 1.5rem) var(--font-serif);
        margin-bottom: 1rem;
        line-clamp: 1;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    article > .content > .top > p {
        font-size: 0.875rem;
        opacity: 0.6;
        line-clamp: 2;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 1.5rem;
    }
    article > .content > .read-link {
        /* color: var(--accent); */
        color: var(--darkest);
        /* text-decoration: none; */
        display: flex;
        align-items: center;
        gap: 0.5rem;
        /* font: 500 0.875rem var(--font-default); */
        font-family: var(--font-serif);
    }
</style>