<script>
// @ts-nocheck

    import { onMount } from "svelte";

    const items = [
        {
            author: 'Gregory Davis',
            info: 'Client for 15 years',
            text: 'I have been enlisting the services of Ridout Barron off and on for the last 15 years. They are wonderful people and operate a competent, professional, knowledgeable, and personable firm. Additionally, they are available, easy to contact, and a friendly human voice greets you when you call.'
        },
    ];
    let timer;
    let index = $state(0);

    const nextTestimonial = () => {
        if (index < items.length - 1) { index++ }
        else { index = 0 }
    };

    onMount(() => {
        timer = setInterval(nextTestimonial, 3000);
    });
</script>

<section id="testimonials">
    <div class="container split">
        <div class="content">
            <h2>What Our Clients Say</h2>
            <div class="text">
                <div class="testimonial">
                    <i class="ph-fill ph-quotes"></i>
                    <div class="content">
                        <div class="quote">
                            <p>{items[index]?.text}</p>
                            <div class="footer">
                                <span class="author">{items[index]?.author}</span>
                                <span class="info">{items[index]?.info}</span>
                            </div>
                        </div>
                        <!-- <div class="nav-buttons">
                            <button class="nav"></button>
                        </div> -->
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
        background-color: var(--off-white);
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
            align-items: center;
            gap: 3rem;
        }
    }
    #testimonials > .split > .content {
        padding: clamp(3.5rem, 5vw, 5rem) 0;
    }
    #testimonials > .split > .content > h2 {
        color: var(--accent);
        font: 500 clamp(2rem, 5vw, 2.5rem) var(--font-serif);
        margin-bottom: 1rem;
    }
    #testimonials > .split > .content > .text > .testimonial {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
    }
    #testimonials > .split > .content > .text > .testimonial > .ph-quotes {
        color: var(--accent);
        font-size: 3rem;
    }
    #testimonials > .split > .content > .text > .testimonial > .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    #testimonials > .split > .content > .text > .testimonial > .content > .quote {
        padding: 0 1rem;
    }
    #testimonials > .split > .content > .text > .testimonial > .content > .quote > p {
        font: clamp(1.125rem, 2vw, 1.25rem)/clamp(2rem, 5vw, 2.5rem) var(--font-serif);
    }
    #testimonials > .split > .content > .text > .testimonial > .content > .quote > .footer {
        color: var(--dark);
        margin-top: 1rem;
        font-size: 1.125rem;
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
    }
    #testimonials > .split > .content > .text > .testimonial > .content > .quote > .footer > .author {
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    #testimonials > .split > .content > .text > .testimonial > .content > .quote > .footer > .info {
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
