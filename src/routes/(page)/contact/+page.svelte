<script>
// @ts-nocheck

    import { page } from "$app/state";
    import Hero from "#lib/components/page/hero.svelte";
    import NewToWorking from "#lib/components/page/new-to-working.svelte";
    import Field from "#lib/components/form/field.svelte";
    import { onMount } from "svelte";
    // import { onMount } from "svelte";
    // import { browser } from "$app/env";
    // import FieldText from "#lib/components/form/field-text.svelte";

    // let contactForm;
    let formData = $state({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        category: '',
        message: ''
    });
    // let first_name = $state('');
    // let last_name = $state('');
    // let email = $state('');
    // let phone = $state('');
    // let category = $state('');
    // let message = $state('');
    // $effect(() => {
    //     console.log('first_name', first_name);
    //     console.log('last_name', last_name);
    //     console.log('email', email);
    //     console.log('phone', phone);
    //     console.log('category', category);
    //     console.log('message', message);
    // });

    // onMount(() => {
    //     let params = page.url.searchParams;
        // if (browser) {
        //     window.alert(`params = ${params}`);
        // }
    //     console.log('params form ==> ', params.get('form'));
    //     if (params.get('form') === 'T') {
    //         contactForm?.scrollIntoView({ behavior: 'smooth' });
    //     }
    // });

    let submitting = $state(false);
    let submitted = $state(false);
    let isValid = $state(false);
    let hasError = $state(false);

    const requiredFields = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'message'
    ];

    const validateForm = () => {
        submitted = false;
        hasError = false;
        console.log(`before validateForm; isValid = ${isValid}`);
        let validCount = 0;
        requiredFields.forEach(field => {
            if (formData[field]) {
                validCount++
            }
        });
        isValid = requiredFields.length === validCount;
        console.log(`after validateForm; isValid = ${isValid}`);
    };

    const sendErrorMessage = async (data) => {
        const resp = await fetch('/submit-error', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        });
        let respJson = await resp.json();
        console.log('submit-error response', respJson);
    };

    const submitInquiry = async () => {
        validateForm();
        if (!isValid) {
            return;
        }

        submitting = true;

        const resp = await fetch('/inquire', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        });
        let respJson = await resp.json();
        console.log('respJson', respJson);

        submitting = false;
        submitted = true;
        hasError = respJson.status !== 200;

        if (hasError) {
            sendErrorMessage(respJson);
        }
    };

    onMount(() => {
        submitting = false;
        submitted = false;
        Object.keys(formData).forEach(key => formData[key] = '')
    });
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors | Contact Us</title>
</svelte:head>

<Hero
    background="/images/page/peace-bridge-inner.avif"
    title="Contact Us"
    description="Reach out today, and let's talk about how our team can help you move forward"
/>

<main class="container" id="contact">
    <section>
        <h2>Send Us A Message</h2>
        <p class="blurb">Fill out the form below and a member of our team will be in touch shortly.</p>
            <!-- class:hidden={submitted}
            class:flex={!submitted} -->
        <div id="message-form"
        >
            <div class="row">
                <Field name="first-name" label="First Name" required={true} bind:value={formData.first_name} onvalidate={validateForm} />
                <Field name="last-name" label="Last Name" required={true} bind:value={formData.last_name} onvalidate={validateForm} />
            </div>

            <div class="row">
                <Field name="email" label="Email Address" required={true} type="email" bind:value={formData.email} onvalidate={validateForm} />
                <Field name="phone" label="Phone Number" required={true} type="phone" bind:value={formData.phone} onvalidate={validateForm} />
            </div>

            <!-- <div class="field"> -->
            <Field name="category" label="How can we help?" type="select"
                required={true} bind:value={formData.category}
                items={[
                    { value: 'litigation', label: 'Civil Litigation' },
                    { value: 'corporate', label: 'Corporate & Commercial' },
                    { value: 'real-estate', label: 'Real Estate' },
                    { value: 'wills', label: 'Wills & Estates' }
                ]}
            />
            <!-- </div> -->

            <!-- <div class="field"> -->
            <Field name="description" label="Your Message" type="textarea" required={true} bind:value={formData.message} onvalidate={validateForm} />
            <!-- </div> -->

            <div class="confidential">
                <i class="ph ph-lock"></i>
                <p>Your information is confidential. We will never share your information without your consent.</p>
            </div>

            {#if submitted && isValid && hasError}
                <div class="error">Oops! There was an error submitting the form.</div>
            {/if}

            <!-- <div class="button-container"> -->
            {#if isValid}
                {#if submitted && !hasError}
                    <div class="thank-you">
                        Thank you for your message!
                    </div>
                    <!-- <div class={[ hasError ? 'remind' : 'thank-you' ]}>
                        { hasError ? 'Please fill out all required fields' : 'Thank you for your message!' }
                    </div> -->
                {:else}
                    <button type="button" onclick={submitInquiry}
                        class:submitting={submitting === true}
                    >
                        {#if submitting}
                            <div class="loader"></div>
                        {:else}
                            Send Message
                        {/if}
                    </button>
                {/if}
            {:else}
                <div class="remind">
                    Please fill out all required fields
                </div>
            {/if}

            <!-- {#if isValid && !submitted}
                <button type="button" onclick={submitInquiry}
                    class:submitting={submitting === true}
                >
                    {#if submitting}
                        <div class="loader"></div>
                    {:else}
                        Send Message
                    {/if}
                </button>
            {:else}
                <div class="thank-you">
                    Thank you for your message!
                </div>
            {/if} -->
            <!-- </div> -->
        </div>
    </section>

    <aside>
        <!-- <div id="advice">
            <h2>New to working with a lawyer?</h2>
            <p>
                It's normal to have questions. We're here to make the process straightforward and comfortable from the start.
            </p>
            <a href="/guide" title="Guide & Resources">View Our Guide <i class="ph ph-arrow-right"></i></a>
        </div> -->
        <NewToWorking />

        <div id="office">
            <h2>Our Office</h2>
            <div class="details">
                {@render officeDetails("clock", "Office Hours",
                    `Monday - Friday (excluding holidays)<br/>
                    9:00 am - 5:00 am`
                )}
                {@render officeDetails("map-pin", "Address",
                    `802 13th Avenue SW<br/>
                    Calgary, Alberta T2R 0L2`
                )}
                {@render officeDetails("phone", "Phone", "+1-403-278-3730")}
                {@render officeDetails("printer", "Fax", "+1-403-271-8016")}
                {@render officeDetails("envelope", "Email", "info@ridoutbarron.com")}
            </div>
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
        <div>{@html text}</div>
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
        scroll-margin-top: 6rem;
    }
    @media (min-width: 60rem) {
        main {
            gap: 3rem;
            flex-direction: row;
            align-items: flex-start;
        }
    }
    #contact > section {
        flex: 1;
        position: sticky;
        top: 6rem;
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
        position: relative;
    }
    /* #message-form.flex {
        display: flex;
    }
    #message-form.hidden {
        display: none;
    } */
    #message-form > .row {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 2rem;
    }
    @media (min-width: 40rem) {
        #message-form > .row {
            flex-direction: row;
            /* align-items: center; */
            /* gap: 2rem' */
        }
    }
    #message-form > .confidential {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
    }
    #message-form > .confidential > i {
        color: var(--accent);
        font-size: 2rem;
    }
    #message-form > .confidential > p {
        font-weight: 600;
    }
    #message-form > .error {
        background-color: var(--lighter);
        color: red;
        text-align: center;
        padding: 1rem 0;
    }
    #message-form > button {
        background-color: var(--accent);
        border: none;
        border-radius: 3rem;
        color: var(--white);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        font-size: 1rem;
        font-weight: 600;
        padding: 1rem 1.5rem;
        text-transform: uppercase;
        transition: opacity 150ms ease, box-shadow 150ms ease, background-color 150ms ease, opacity 150ms ease;
        opacity: 0.8;
    }
    #message-form > button:hover {
        box-shadow: var(--shadow);
        opacity: 1.0;
    }
    /* #message-form > button > i {
        font-size: 1.5rem;
    } */
    #message-form > button.submitting {
        background-color: var(--semi-light);
        pointer-events: none;
        cursor: not-allowed;
        /* opacity: 0.6; */
    }
    .remind,
    .thank-you {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--semi-light);
        border: none;
        border-radius: 3rem;
        color: var(--semi-dark);
        font-size: 1rem;
        font-weight: 600;
        padding: 1rem 1.5rem;
        /* text-transform: uppercase; */
    }
    .thank-you {
        color: var(--darkest);
    }

    aside {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    @media (min-width: 60rem) {
        aside {
            flex: 1;
            /* width: 24rem; */
            border-left: 1px solid var(--accent-lightest);
            padding-left: 3rem;
        }
    }

    /* #office { display: none } */
    #office > h2 {
        font: 700 2rem var(--font-serif);
        margin-bottom: 1rem;
    }
    #office > .details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    #office > .details > .row {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 2rem;
    }
    #office > .details > .row > i {
        font-size: 1.75rem;
        color: var(--accent);
    }
    #office > .details > .row > .details {
        margin-top: 0.125rem;
        line-height: 1.5rem;
    }
    #office > .details > .row > .details > .title {
        font: 400 1rem var(--font-default);
        opacity: 0.8;
    }
    #office > .details > .row > .details > div {
        /* opacity: 0.7; */
        font-weight: 600;
    }
    #map {
        display: none;
    }
    @media (min-width: 60rem) {
        #office, #map {
            display: block;
        }
    }

    /* #advice {
        padding: 2rem;
        background-color: var(--accent-lightest);
        border-radius: 0.5rem;
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
    } */

    /* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
/* #046D8B */
.loader {
  width: 60px;
  height: 20px;
  display: grid;
  color: var(--accent-darker);
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  --c:#0000 calc(100%/3),var(--accent-darker) 0 calc(2*100%/3),#0000 0;
  --c1:linear-gradient(90deg,var(--c));
  --c2:linear-gradient( 0deg,var(--c));
  background: var(--c1),var(--c2),var(--c1),var(--c2);
  background-size: 300% 4px,4px 300%;
  background-repeat: no-repeat;
  animation: l15 1.5s infinite;
}
.loader:after {
  animation-delay: -.75s;
}
@keyframes l15 {
  0%   {background-position: 50%  0,100% 100%,0    100%,0 0}
  25%  {background-position: 0    0,100% 50% ,0    100%,0 0}
  50%  {background-position: 0    0,100% 0   ,50%  100%,0 0}
  75%  {background-position: 0    0,100% 0   ,100% 100%,0 50%}
 75.01%{background-position: 100% 0,100% 0   ,100% 100%,0 50%}
  100% {background-position: 50%  0,100% 0   ,100% 100%,0 100%}
}
</style>
