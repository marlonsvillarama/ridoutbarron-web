<script>
    // import { MediaQuery } from "svelte/reactivity";

    let {
        background = '',
        texts = [],
        title = 'Title'
    } = $props();

    // const small = new MediaQuery('min-width: 40rem');
    // const medium = new MediaQuery('min-width: 60rem');
    // const large = new MediaQuery('min-width: 80rem');
    // const xl = new MediaQuery('min-width: 100rem');

    // const bgImage = `background-image: linear-gradient(to right, var(--off-white) 30%, transparent 90%), url(${background})`;
    // const bg = 'background-image: linear-gradient(to right, var(--off-white) 30%, transparent 90%)';
</script>

<!-- <div class="hero" style="background-image: linear-gradient(to right, var(--off-white) 40%, transparent 100%), url({background})"> -->
<!-- <div class="hero" style:bg={}="background-image: linear-gradient(to right, var(--off-white) 30%, transparent 90%)"> -->
<div class="hero">
    <img src={background} alt={title} />
    <div class="overlay"></div>

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
        /* height: 25rem; */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* border: 1px solid red; */
        border-bottom: 1px solid var(--accent-lightest);
        padding: 0;
        margin-bottom: 3rem;
        position: relative;
        /* height: 100vh; */

    }
    /* @media (min-width: 60rem) {
        .hero {
            background-image: linear-gradient(to right, var(--off-white) 40%, transparent 90%), url(${background});
        }
    } */
    .hero > img {
        display: none;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100vh;
        /* height: 35rem; */
        object-fit: cover;
    }
    .hero > .overlay {
        display: none;
        background-color: var(--white);
        position: absolute;
        inset: 0;
    }
    @media (min-width: 40rem) {
        .hero {
            /* height: 35rem; */
            height: 100vh;
            border: 0;
        }
        .hero > img {
            display: block;
        }
        .hero > .overlay {
            background:
                /* url(/images/svg/1_edited.svg) top left / 140px 117.6px repeat, */
                radial-gradient(circle at 20% 25%, var(--off-white) 0%, transparent 150%);
                /* linear-gradient(150deg, transparent -200%, var(--white) 30%, transparent 80%, transparent 200%); */
            display: block;
        }
        .hero > .container > .slogan {
            width: 45%;
        }
    }
    .hero > .container {
        height: 100%;
        margin: 0 auto;
        padding: 6rem 0 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
    }
    .hero > .container > .slogan {
        width: 100%;
    }
    @media (min-width: 40rem) {
        .hero > .container {
            padding-top: 10rem;
        }
        .hero > .container > .slogan {
            width: 60%;
        }
    }
    .hero > .container > .slogan > h1 {
        color: var(--accent);
        font: 400 clamp(2.5rem, 3vw, 4rem) var(--font-serif);
        margin-bottom: 1rem;
    }
    .hero > .container > .slogan > p {
        color: var(--darkest);
        line-height: 1.75rem;
        opacity: 0.8;
    }
    .hero > .container > .slogan > p:not(:last-child) {
        margin-bottom: 1rem;
    }
</style>
