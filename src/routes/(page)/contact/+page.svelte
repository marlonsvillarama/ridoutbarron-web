<script>
    import Hero from "#lib/components/page/hero.svelte";
    import Field from "#lib/components/form/field.svelte";
    // import FieldText from "#lib/components/form/field-text.svelte";
</script>

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
</main>

<style>
    .container {
        margin: 0 auto;
    }
    section {
        flex: 1;
    }
    section > h2 {
        font: 700 2rem var(--font-serif);
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
    }
    #message-form > .row {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    #message-form > .confidential {
        display: flex;
    }
</style>
