<script></script>

<div class="hero">
    <video autoplay loop muted playsinline>
        <source src="/videos/calgary-002.mp4" type="video/mp4" />
    </video>
    <div class="overlay"></div>
    <div class="container">
        <div class="slogan">
            <h1>Prairie Roots.<br/>Forward Thinking.</h1>
            <p>We aim to be a full-service firm to families and individuals, addressing all of life's legal needs as they arise - from wills, to corporate matters, to real estate and, if necessary, litigation.</p>
            <div class="cta">
                <div class="actions">
                    <a href="/consult" id="consult">Tell us what's going on</a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .hero {
        height: 100vh;
        min-height: 100vh;
        width: 100%;
        padding: 2rem 0;
        position: relative;
    }
    .hero > video,
    .hero > .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .hero > video {
        object-fit: cover;
        z-index: -1;
    }
    .hero > .overlay {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 80%);
    }
    .hero > .container {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        margin: 0 auto;
        position: relative;
    }
    .hero > .container > .slogan {
        color: var(--white);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: max(60%, 22rem);
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .hero > .container > .slogan > h1 {
        font-family: var(--font-serif);
        font-size: clamp(2.5rem, 5vw, 6rem);
        font-weight: 400;
        letter-spacing: -0.25px;
        line-height: clamp(3rem, 5vw, 6rem);
        margin: 0;
    }
    .hero > .container > .slogan > p {
        display: none;
        font-weight: 300;
        line-height: 1.75rem;
        margin: 0;
    }
    @media (min-height: 30rem) {
        .hero > .container > .slogan > p {
            display: block;
        }
    }
    .hero > .container > .slogan > .cta > .actions {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .hero > .container > .slogan > .cta > .actions > a {
        background-color: var(--accent-dark);
        /* border: 1px solid transparent; */
        border-radius: 3rem;
        color: var(--white);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 1.5rem;
        text-decoration: none;
        transition: background-color 150ms ease;
    }
    .hero > .container > .slogan > .cta > .actions > a:hover {
        /* border: 1px solid var(--accent); */
        background-color: var(--accent);
        box-shadow: var(--shadow);
    }
</style>
