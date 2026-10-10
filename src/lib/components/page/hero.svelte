<script>
    let {
        background = '',
        texts = [],
        title = 'Title'
    } = $props();
</script>

<div class="hero" style="background-image: linear-gradient(to right, var(--off-white) 30%, transparent 90%), url({background})">
    <div class="container">
        <div class="slogan">
            <h1>{title}</h1>
            {#each texts as text}
                <p>{text}</p>
            {/each}
        </div>
    </div>
</div>

<style>
    .hero {
        height: 35rem;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin-bottom: 3rem;
    }
    .hero > .container {
        margin: 0 auto;
        padding: 2rem 0 0;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .hero > .container > .slogan {
        width: 45%;
    }
    .hero > .container > .slogan > h1 {
        color: var(--accent);
        font: 400 4rem var(--font-serif);
        margin-bottom: 1rem;
    }
    .hero > .container > .slogan > p {
        color: var(--darkest);
        line-height: 1.5rem;
    }
    .hero > .container > .slogan > p:not(:last-child) {
        margin-bottom: 1rem;
    }
</style>
