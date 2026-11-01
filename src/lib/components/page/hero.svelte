<script>
    // import { MediaQuery } from "svelte/reactivity";

    let {
        background = '',
        texts = [],
        title = 'Title',
        description = ''
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
            <p>{description}</p>
            <!-- {#each texts as text}
                <p>{text}</p>
            {/each} -->
        </div>
        <!-- <button type="button" class="cta" onclick={onreadmore}>Read More <i class="ph ph-arrow-down"></i></button> -->
    </div>
</div>

<style>
    .hero {
        /* height: 25rem; */
        /* border: 1px solid red; */
        background:
            radial-gradient(circle at 30% 40%, var(--off-white) 0%, transparent 500%),
            /* linear-gradient(160deg, var(--white) 30%, transparent 500%), */
            url(/images/svg/1_edited.svg) top left / 140px 117.6px repeat;
        /* background-color: var(--off-white); */
        /* background */
        /* border-bottom: 1px solid var(--accent-lightest); */
        padding: 0 0 clamp(0rem, 3vw, 4rem);
        margin-bottom: 3rem;
        position: relative;
        height: 50vh;
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
        /* height: 30rem; */
        object-fit: cover;
    }
    .hero > .overlay {
        display: none;
        background: radial-gradient(circle at 30% 60%, rgba(0, 0, 0, 0.5) 0%, transparent 200%);
        /* background: radial-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 120%); */
        /* background-color: var(--white); */
        position: absolute;
        inset: 0;
    }
    @media (min-width: 60rem) {
        .hero {
            /* height: 30rem; */
            height: 100vh;
            border: 0;
            /* background-size: cover;
            background-position: center;
            background-repeat: no-repeat; */
        }
        .hero > img {
            display: block;
        }
        .hero > .overlay {
            /* background: */
                /* url(/images/svg/1_edited.svg) top left / 140px 117.6px repeat, */
                /* radial-gradient(circle at 20% 25%, var(--off-white) 0%, transparent 150%); */
                /* linear-gradient(150deg, transparent -200%, var(--white) 30%, transparent 80%, transparent 200%); */
            /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 80%); */
            display: block;
        }
        /* .hero > .container > .slogan {
            width: 60%;
            border: 1px solid red;
        } */
    }
    .hero > .container {
        height: 100%;
        margin: 0 auto;
        padding: 6rem 0 1rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: end;
        /* border: 1px solid red; */
    }
    .hero > .container > .slogan {
        width: 100%;
        /* border: 1px solid red; */
    }
    @media (min-width: 60rem) {
        /* .hero > .container { */
            /* padding-top: 10rem; */
            /* border: 1px solid red; */
        /* } */
        /* .hero > .container > .slogan {
            padding-top: 1rem; */
            /* width: 50%; */
        /* } */
    }
    @media (min-width: 60rem) {
        .hero > .container > .slogan {
            /* padding-top: 5rem; */
            width: 60%;
            /* border: 1px solid red; */
            border-left: 3px solid var(--accent);
            padding-left: 0.75rem;
        }
    }
    .hero > .container > .slogan > h1 {
        /* color: var(--accent); */
        /* color: var(--white); */
        color: var(--darkest);
        font: 500 clamp(1rem, 3vw, 1.25rem) var(--font-serif);
        line-height: 1.75rem;
        /* opacity: 0.8; */
        /* margin-bottom: clamp(0, 5vw, 2rem); */
        margin-bottom: 1rem;
    }
    .hero > .container > .slogan > p {
        color: var(--darkest);
        /* color: var(--white); */
        font: 600 clamp(1.5rem, 3vw, 5rem) var(--font-default);
        letter-spacing: -0.25px;
        /* line-height: clamp(2.5rem, calc(2.5rem + 5vw), 3.5rem); */
        line-height: clamp(2rem, 5vw, 2.75rem);
        /* margin-bottom: 1rem; */
        /* border: 1px solid red; */
    }
    .hero > .container > .slogan > p:not(:last-child) {
        margin-bottom: 1rem;
    }
    @media (min-width: 60rem) {
        .hero > .container > .slogan > h1 {
            color: var(--white);
            /* opacity: 0.9; */
        }
        .hero > .container > .slogan > p {
            color: var(--white);
        }
    }
    /* .hero > .container > .cta {
        background-color: var(--accent-dark);
        border: 0;
        border-radius: 3rem;
        color: var(--white);
        cursor: pointer;
        font-size: 1rem;
        outline: 0;
        padding: 1rem 2rem;
        transition: background-color 150ms ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    } */
    /* .hero > .container > .cta:hover {
        background-color: var(--accent);
    } */
</style>
