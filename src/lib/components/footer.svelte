<footer>
    <div class="container split">
        <div class="logo">
            <img src="/images/ridoutbarron_logo-001.webp" alt="Ridout Barron" />
            <p class="serves">
                Ridout Barron serves clients in Calgary, Red Deer, Lethbridge, Medicine Hat, Canmore, Okotoks, Airdrie, High River, Chestermere, Strathmore, Cochrane, and surrounding areas of southern Alberta.
            </p>
        </div>

        <div>Main links go here...</div>

        <div>Secondary links go here...</div>
        
        <div class="details">
            <div class="disclaimer">
                <h4>Disclaimer</h4>
                <p>
                    The information you obtain at this site is not, nor is it intended to be, legal advice.
                    You should consult a lawyer for advice regarding your individual situation.
                    We invite you to contact us and welcome your calls, letters, and electronic mail.
                    Contacting us does not create a lawyer-client relationship.
                    Please do not send any confidential information to us until such time as a lawyer-client relationship has been established.
                </p>
            </div>
            <p>&copy;2026 Ridout Barron. All rights reserved.</p>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: var(--darkest);
        padding: clamp(3.5rem, 5vw, 5rem) 0;
        width: 100%;
        color: var(--white);
    }
    footer p {
        font-size: 0.875rem;
        line-height: 1.5rem;
    }
    footer > .container {
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 3rem;
    }
    @media (min-width: 40rem) {
        footer > .container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
    }
    footer > .container > * {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    footer > .container > .logo > img {
        width: 100%;
        height: auto;
    }
    footer > .container > .details > .disclaimer {
        margin-bottom: 1rem;
    }
    footer > .container > .details > .disclaimer > h4 {
        font: 500 1.25rem var(--font-default);
        padding-bottom: 0.5rem;
        border-bottom: 3px solid var(--accent);
        margin-bottom: 0.5rem;
    }
</style>
