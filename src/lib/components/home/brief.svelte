<section id="brief">
    <div class="container split">
        <h2>
            Clear advice <i class="ph ph-dot"></i>
            Practical options <i class="ph ph-dot"></i>
            People you can talk to
        </h2>
        <div class="blurb">
            <p>At Ridout Barron, we believe in communication creativity, and flexibility. Whether you contact us in regard to a lease, lien, contract dispute, will, or other issues, we will take the time to get to know you and your situation thoroughly, give you a realistic appraisal of your case, and explain your options while keeping your bottom line in mind.</p>
            <a href="/" title="Talk to us">Talk to us</a>
        </div>
    </div>
</section>

<style>
    #brief {
        margin: 0;
        padding: 0;
        background-color: var(--off-white);
    }
    #brief > .split {
        padding: clamp(3.5rem, 5vw, 5rem) 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin: 0 auto;
    }
    #brief > .split > h2 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--accent);
        font-family: var(--font-serif);
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 500;
        letter-spacing: -0.25px;
        line-height: clamp(1.75rem, 5vw, 2.75rem);
        text-align: center;
    }
    #brief > .split > h2 > i {
        font-size: 3rem;
    }
    #brief > .split > .blurb {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
        width: 60%;
    }
    #brief > .split > .blurb > p {
        line-height: 1.75rem;
    }
    #brief > .split > :last-child > a {
        padding: 1rem 1.5rem;
        border: 0;
        border-radius: 3rem;
        background-color: var(--accent);
        color: var(--white);
        text-decoration: none;
        transition: background-color 150ms ease;
    }
    #brief > .split > :last-child > a:hover {
        background-color: var(--accent-dark);
    }
</style>