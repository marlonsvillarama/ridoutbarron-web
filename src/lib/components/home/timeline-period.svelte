<script>
    let {
        id,
        date,
        image,
        title,
        text
    } = $props();
</script>

<div class="period">
    <div class="image" style="background-image: url({image});" {id}></div>
    <div class="content">
        <div class="article">
            <div class="aside">
                <div class="dot"></div>
                <div class="line"></div>
            </div>
            <div class="main">
                <h3>{date}</h3>
                <span class="title">{title}</span>
                <p>{text}</p>
            </div>
        </div>
    </div>
</div>

<style>
    @media (min-width: 40rem) {
        .period {
            display: grid;
            gap: 1rem;
            grid-template-columns: auto 1fr;
        }
    }
    .period > .image {
        border-radius: 0.5rem;
        background-size: cover;
        background-position: center;
    }
    @media (min-width: 40rem) {
        .period > .image {
            display: block;
            width: 12rem;
            height: 8rem;
        }
    }
    /* .period > .content > .article > .title {
        font: 400 2.25rem var(--font-default);
    } */
    .period > .content {
        display: flex;
        flex-direction: column;
    }
    .period > .content > .article {
        display: flex;
        gap: 0.75rem;
        width: max(23rem, 100%);
    }
    .period > .content > .article > .aside {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .period > .content > .article > .aside > .dot {
        --size: 0.5rem;
        width: var(--size);
        height: var(--size);
        margin: calc((1rem - var(--size))/2);
        border-radius: 50%;
        background-color: var(--accent);
        flex-grow: 0;
    }
    .period > .content > .article > .aside > .line {
        flex: 1;
        margin: 0.5rem 0;
        width: 3px;
        background-color: var(--accent);
    }
    .period:not(:last-child) > .content > .article > .main {
        padding-bottom: 2rem;
    }
    .period > .content > .article > .main > .title {
        display: inline-block;
        font: 500 1.125rem/1.75rem var(--font-default);
        margin-bottom: 0.5rem;
    }
    .period > .content > .article > .main > p {
        line-height: 1.5rem;
        opacity: 0.7;
        padding-left: 1rem;
    }
</style>
