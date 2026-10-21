<script>
// @ts-nocheck

    import Hero from "#lib/components/page/hero.svelte";
    import Field from "#lib/components/form/field.svelte";
    // import FieldText from "#lib/components/form/field-text.svelte";
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors | Contact Us</title>
</svelte:head>

<Hero
    background="/images/page/peace-bridge-inner.avif"
    texts={[
        'Whether you have a question, need guidance, or are ready to more forward, we\'re here to help.',
        'Reach out for a confidential conversation - no obligation, just practical advice.'
    ]}
    title="Contact Us"
/>

<main class="container">
    <section>
        <h2>Send Us A Message</h2>
        <p class="blurb">Fill out the form below and a member of our team will be in touch shortly.</p>
        <div id="message-form">
            <div class="row">
                <Field name="first-name" label="First Name" required={true} />
                <Field name="last-name" label="Last Name" required={true} />
            </div>

            <div class="row">
                <Field name="email" label="Email Address" required={true} type="email" />
                <Field name="phone" label="Phone Number" required={true} type="phone" />
            </div>

            <!-- <div class="field"> -->
                <Field name="category" label="How can we help?" type="select"
                    items={[
                        { value: 'litigation', label: 'Civil Litigation' },
                        { value: 'corporate', label: 'Corporate & Commercial' },
                        { value: 'real-estate', label: 'Real Estate' },
                        { value: 'wills', label: 'Wills & Estates' }
                    ]}
                />
            <!-- </div> -->

            <!-- <div class="field"> -->
                <Field name="description" label="Your Message" type="textarea" />
            <!-- </div> -->

            <div class="confidential">
                <i class="ph ph-lock"></i>
                <p>Your information is confidential. We will never share your information without your consent.</p>
            </div>

            <button>Send Message</button>
        </div>
    </section>

    <aside>
        <div id="advice">
            <h2>New to working with a lawyer?</h2>
            <p>
                It's normal to have questions. We're here to make the process straightforward and comfortable from the start.
            </p>
            <a href="/guide" title="Guide & Resources">View Our Guide <i class="ph ph-arrow-right"></i></a>
        </div>

        <div id="office">
            <h2>Our Office</h2>
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
        </div>

        <div id="map" class="row">
            <iframe title="Ridout Barron" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.6485585381924!2d-114.08197642300138!3d51.041111371711054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170278fff30cd%3A0xf718434eeb109f71!2sRidout%20Barron!5e0!3m2!1sen!2snz!4v1790815414091!5m2!1sen!2snz" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    </aside>
</main>

{#snippet officeDetails(icon, title, text)}
<div class="row">
    <i class="ph ph-{icon}"></i>
    <div class="details">
        <span class="title">{title}</span>
        <p>{@html text}</p>
    </div>
</div>
{/snippet}

<style>
    main {
        display: flex;
        flex-direction: column;
        /* margin: 3rem auto 5rem; */
        margin: 0 auto;
        /* padding-top: 7rem; */
        padding-bottom: 5rem;
    }
    @media (min-width: 60rem) {
        main {
            gap: 3rem;
            flex-direction: row;
            align-items: flex-start;
        }
    }
    section {
        flex: 1;
    }
    section > h2 {
        font: 700 clamp(1.5rem, 3vw, 2rem) var(--font-serif);
        margin-bottom: 0.5rem;
    }
    section > .blurb {
        opacity: 0.6;
        margin-bottom: 2rem;
    }
    #message-form {
        display: flex;
        /* align-items: center; */
        gap: 2rem;
        /* display: flex; */
        flex-direction: column;
        /* gap: 0.25rem; */
        margin-bottom: 3rem;
    }
    #message-form > .row {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    @media (min-width: 40rem) {
        #message-form > .row {
            flex-direction: row;
            align-items: center;
            /* gap: 2rem' */
        }
    }
    #message-form > .confidential {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    #message-form > .confidential > i {
        color: var(--accent);
        font-size: 2rem;
    }
    #message-form > .confidential > p {
        font-weight: 600;
    }
    #message-form > button {
        background-color: var(--accent);
        border: none;
        border-radius: 3rem;
        color: var(--white);
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        padding: 1rem 1.5rem;
        text-transform: uppercase;
        transition: opacity 150ms ease, box-shadow 150ms ease;
        opacity: 0.8;
    }
    #message-form > button:hover {
        box-shadow: var(--shadow);
        opacity: 1.0;
    }
    aside {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    @media (min-width: 60rem) {
        aside {
            width: 24rem;
            border-left: 1px solid var(--accent-lightest);
            padding-left: 3rem;
        }
    }

    #office { display: none }
    #office > h2 {
        font: 700 2rem var(--font-serif);
        margin-bottom: 1rem;
    }
    #office > .row {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 2rem;
    }
    #office > .row > i {
        font-size: 1.75rem;
        color: var(--accent);
    }
    #office > .row > .details {
        margin-top: 0.125rem;
        line-height: 1.5rem;
    }
    #office > .row > .details > .title {
        font: 600 1.125rem var(--font-default);
    }
    #office > .row > .details > p {
        opacity: 0.7;
    }
    #map {
        display: none;
    }
    @media (min-width: 60rem) {
        #office, #map {
            display: block;
        }
    }

    #advice {
        padding: 2rem;
        background-color: var(--accent-lightest);
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    #advice > h2 {
        font: 700 1.5rem var(--font-serif);
    }
    #advice > p {
        font-size: 0.875rem;
        line-height: 1.5rem;
        opacity: 0.7;
    }
    #advice > a {
        background-color: var(--accent);
        border-radius: 3rem;
        color: var(--white);
        font-weight: 500;
        opacity: 0.8;
        padding: 1rem 1.5rem;
        text-decoration: none;
        text-align: center;
        transition: opacity 150ms ease;
        width: 100%;
    }
    #advice > a:hover {
        opacity: 1.0;
    }
</style>
