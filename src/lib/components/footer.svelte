<script>
    import { reveal } from '#lib/reveal.js';
    import { getCategories } from '#lib/posts.js';
</script>

<footer class="reveal-section" use:reveal>
    <div class="container split">
        <section class="logo">
            <img src="/images/ridoutbarron_logo-001.webp" alt="Ridout Barron" />
            <p class="serves">
                Ridout Barron serves clients in Calgary, Red Deer, Lethbridge, Medicine Hat, Canmore, Okotoks, Airdrie, High River, Chestermere, Strathmore, Cochrane, and surrounding areas of southern Alberta.
            </p>
        </section>

        <section>
            <h4>Contact Us</h4>
            {@render officeDetails("map-pin", "Address",
                `802 13th Avenue SW<br/>
                Calgary, Alberta T2R 0L2`
            )}
            {@render officeDetails("phone", "Phone", "+1-403-278-3730")}
            {@render officeDetails("printer", "Fax", "+1-403-271-8016")}
            {@render officeDetails("envelope", "Email", "info@ridoutbarron.com")}
            {@render officeDetails("clock", "Office Hours",
                `Monday - Friday (excluding holidays)<br/>
                9:00 am - 5:00 am`
            )}
        </section>

        <section>
            <h4>Guides & Resources</h4>
            <div class="links">
                {#each getCategories() as category}
                    <a href={category.link} title={category.name}>{category.name}</a>
                {/each}
            </div>
        </section>
        
        <section class="details">
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
        </section>
    </div>
</footer>

{#snippet officeDetails(icon, title, text)}
<div class="contact-row">
    <i class="ph ph-{icon}"></i>
    <div class="details">
        <span class="title">{title}</span>
        <p>{@html text}</p>
    </div>
</div>
{/snippet}

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
    @media (min-width: 60rem) {
        footer > .container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
    }
    footer > .container > * {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    footer > .container > .logo > img {
        max-width: 14rem;
        height: auto;
    }
    footer > .container > .details > .disclaimer {
        margin-bottom: 1rem;
    }
    footer section h4 {
        font: 500 1.25rem var(--font-default);
        padding-bottom: 0.5rem;
        border-bottom: 3px solid var(--accent);
        margin-bottom: 0.5rem;
    }
    footer .contact-row {
        display: flex;
        align-items: flex-start;
        gap: 2rem;
        margin-bottom: 0.5rem;
    }
    footer .contact-row > i {
        margin-top: 2px;
    }
    footer .contact-row > .details > .title {
        opacity: 0.4;
    }
    footer section > .links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    footer section > .links > a {
        color: var(--off-white);
        /* text-decoration: none; */
        text-underline-offset: 0.25rem;
    }
    footer section > .links > a:hover {
        color: var(--accent);
        /* text-decoration: underline; */
    }
</style>
