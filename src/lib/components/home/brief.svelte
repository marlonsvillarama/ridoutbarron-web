<section id="brief">
    <div class="container split">
        <div class="slogan">
            <span class="s">Clear advice</span><i class="ph ph-dot"></i>
            <span class="s">Practical options</span><i class="ph ph-dot"></i>
            <span class="s">People you can talk to</span>
        </div>
        <div class="blurb">
            <p>At Ridout Barron, we believe in communication creativity, and flexibility. Whether you contact us in regard to a lease, lien, contract dispute, will, or other issues, we will take the time to get to know you and your situation thoroughly, give you a realistic appraisal of your case, and explain your options while keeping your bottom line in mind.</p>
            <a href="/contact" title="Talk to us" class="cta">Talk to us</a>
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
    #brief > .split > .slogan {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;
    }
    #brief > .split > .slogan > span.s {
        display: block;
        color: var(--accent);
        font: 500 clamp(2rem, 3vw, 3rem)/clamp(2rem, 3vw, 3.5rem) var(--font-serif);
        letter-spacing: -0.25px;
        text-align: center;
        /* border: 1px solid red; */
    }
    #brief > .split > .slogan > i {
        visibility: hidden;
    }
    @media (min-width: 60rem) {
        #brief > .split > .slogan {
            flex-direction: row;
            align-items: center;
        }
        #brief > .split > .slogan > i {
            color: var(--accent);
            font-size: 3rem;
            visibility: visible;
        }
    }
    #brief > .split > .blurb {
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
        width: 100%;
        max-width: 40rem;
    }
    @media (min-width: 60rem) {
        #brief > .split > .blurb {
            max-width: 60%;
        }
    }
    #brief > .split > .blurb > p {
        line-height: 1.75rem;
    }
</style>