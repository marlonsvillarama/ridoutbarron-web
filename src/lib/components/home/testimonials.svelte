<script>
// @ts-nocheck

    import { reveal } from "#lib/reveal.js";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    const items = [
        {
            author: 'Avigail Eisenberg',
            info: '',
            text: 'I am so grateful for Jacqui\'s hard work on my mother\'s estate. It was wonderful working with her. She has a balanced and effective way of handling difficult moments, which is the perfect attribute in one\'s lawyer. I expect she has many devoted clients.'
        },
        {
            author: 'Gregory Davis',
            info: 'Client for 15 years',
            text: 'I have been enlisting the services of Ridout Barron off and on for the last 15 years. They are wonderful people and operate a competent, professional, knowledgeable, and personable firm. Additionally, they are available, easy to contact, and a friendly human voice greets you when you call.'
        },
        {
            author: 'Ilana Krygier Lapides',
            info: '',
            text: 'When my mother passed away, I had the good fortune to be guided by Ridout Barron to assist with the settling of her estate. Without exception, the service and care i received was excellent... I highly recommend Ridout Barron to anyone seeking legal assistance - you will be glad you did.'
        },
    ];
    let timer;
    let index = $state(0);

    const nextTestimonial = () => {
        if (index < items.length - 1) { index++ }
        else { index = 0 }
    };

    onMount(() => {
        timer = setInterval(nextTestimonial, 6000);
    });
</script>

<section id="testimonials" use:reveal class="reveal-section staggered">
    <div class="container split">
        <div class="content">
            <h2>What Our Clients Say</h2>
            <div class="text">
                <div class="testimonial">
                    <i class="ph-fill ph-quotes"></i>
                    <div class="content">
                        <!-- {#each [items[index]] as item (index)} -->
                        <div class="quote"
                            in:fade={{ duration: 500 }}
                            out:fade={{ duration: 500 }}
                        >
                            <p>{items[index]?.text}</p>
                            <div class="footer">
                                <span class="author">{items[index]?.author}</span>
                                <span class="info">{items[index]?.info}</span>
                            </div>
                        </div>
                        <!-- {/each} -->
                    </div>
                </div>
            </div>
        </div>
        <div class="image">
            <div class="layers">
                <img src="/images/barron_bldg.webp" alt="Barron Building" />
                <div class="backdrop"></div>
            </div>
        </div>
    </div>
</section>

<style>
    #testimonials {
        background:
            /* linear-gradient(160deg, var(--white) 40%, transparent 300%), */
            radial-gradient(circle at 30% 40%, var(--white) 0%, transparent 1000%),
            url(/images/svg/5.svg) top left repeat;
        position: relative;
        padding: 0;
        overflow: hidden;
    }
    #testimonials > .container {
        margin: 0 auto;
    }
    @media (min-width: 80rem) {
        #testimonials > .split {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: flex-start;
            gap: 3rem;
        }
    }
    #testimonials > .split > .content {
        padding: clamp(3.5rem, 5vw, 5rem) 0;
    }
    #testimonials > .split > .content > h2 {
        color: var(--accent);
        font: 500 clamp(2rem, 5vw, 2.5rem) var(--font-serif);
        margin-top: 4rem;
        margin-bottom: 1rem;
        text-align: center;
    }
    @media (min-width: 40rem) {
        #testimonials > .split > .content > h2 {
            text-align: left;
        }
    }
    .testimonial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    @media (min-width: 40rem) {
        .testimonial {
            align-items: flex-start;
            flex-direction: row;
        gap: 0.5rem;
        }
    }
    .testimonial > .ph-quotes {
        color: var(--accent);
        font-size: 3rem;
    }
    .testimonial > .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    .testimonial > .content > .quote {
        padding: 0 1rem;
    }
    .testimonial > .content > .quote > p {
        font: clamp(1.125rem, 2vw, 1.25rem)/clamp(2rem, 5vw, 2.5rem) var(--font-serif);
    }
    .testimonial > .content > .quote > .footer {
        color: var(--dark);
        margin-top: 1rem;
        font-size: 1.125rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.125rem;
    }
    @media (min-width: 40rem) {
        .testimonial > .content > .quote > .footer {
            align-items: start;
        }
    }
    .testimonial > .content > .quote > .footer > .author {
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .testimonial > .content > .quote > .footer > .info {
        font: italic 400 1rem var(--font-serif);
        opacity: 0.8;
    }
    #testimonials > .split > .image > .layers {
        display: none;
    }
    @media (min-width: 80rem) {
        #testimonials > .split {
            gap: 6rem;
        }
        #testimonials > .split > .image > .layers {
            display: block;
            position: relative;
            height: 44rem;
        }
        #testimonials > .split > .image > .layers > img {
            border-radius: 0.5rem;
            height: 30rem;
            width: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-55%) translateY(-55%);
            z-index: 100;
        }
        #testimonials > .split > .image > .layers > .backdrop {
            background-color: var(--accent);
            border-radius: 0.5rem;
            height: 30rem;
            width: 24rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-35%) translateY(-45%);
            /* z-index: 100; */
        }
    }
</style>
