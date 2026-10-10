<section id="team">
    <div class="overlay"></div>
    <div class="container">
        <h2>Who We Are</h2>
        <div class="divider"></div>
        <p>
            Legal matters can be complicated. Talking to your lawyer shouldn't be. We keep things clear, practical, and human.
        </p>
        <a href="/" title="Meet The Team" class="cta">Meet The Team</a>
    </div>
</section>

<style>
    #team {
        background: var(--off-white) url(/images/team/team_bw.webp) 50% 20% / cover;
        min-height: 50rem;
        position: relative;
    }
    #team > .overlay {
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 10;
    }
    #team > .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 100;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    #team > .container > h2 {
        color: var(--charcoal);
        font: 500 4rem var(--font-serif);
    }
    #team > .container > .divider {
        background-color: var(--accent);
        height: 2px;
        width: 20rem;
        margin: 2rem auto;
    }
    #team > .container > p {
        font-size: 1.125rem;
        opacity: 0.8;
        margin-bottom: 2rem;
    }
</style>
