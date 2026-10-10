<script>
    import TimelinePeriod from "./timeline-period.svelte";

    const periods = [
        {
            id: 'timeline-001',
            date: '1913',
            image: '/images/history/calgary-1928.webp',
            title: 'Barron and Barron is established by brothers Jacob and Abraham Barron.',
            text: 'For more than half a century, they practice law and philanthrophy, establish oil patch head offices in Calgary in the Barron Building and own and operate several Calgary theatres, including the Palace, the Grand, the Odeon, and the Uptown theatres.'
        },
        {
            id: 'timeline-002',
            date: '1938',
            image: '/images/history/calgary-1943.webp',
            title: 'Robert Barron graduates from law school.',
            text: 'He goes on to continue his father Jacob\'s legacy in a career that spans 64 years and includes successfully overturning the Supreme Court of Canada as one of the last lawyers to appear before the Privy Council in England. He eventually practices with all three of his daughters (Deborah, Tamara, and Jacqueline).'
        },
        {
            id: 'timeline-003',
            date: '1996',
            image: '/images/history/calgary-1990.webp',
            title: 'Jacqueline Barron and Peter Ridout join the firm.',
            text: 'The firm eventually becomes the Ridout Barron Law Firm.'
        },
    ];
</script>

<section id="history">
    <div class="container">
        <div>
            <h2>We're almost as old as Calgary!</h2>
            <p>For over a century, Ridout Barron has maintained a high-quality legal practice and a commitment to finding solutions for our clients.</p>
            <p>Throughout our history, our Calgary lawyers have maintained our principles of integrity, quality, and flexibility. Our clients' success have always been our priority.</p>
        </div>

        <div class="timeline">
            {#each periods as period}
            <TimelinePeriod {...period} />
            {/each}
        </div>
    </div>
</section>

<style>
    #history {
        --bg-alpha: 0.8;
        background-image:
            linear-gradient(270deg, rgba(52, 51, 51, 0.9), rgba(52, 51, 51, 0.5)),
            url(/images/banff-001.webp);
        background-size: cover;
        background-position: 0 30%;
        padding: clamp(3.5rem, 5vw, 5rem) 0;
        position: relative;
    }
    #history > .container {
        color: var(--white);
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        margin: 0 auto;
    }
    @media (min-width: 80rem) {
        #history > .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
        }
    }
    #history > .container > :first-child > h2 {
        font: 400 clamp(2rem, 5vw, 2.5rem) var(--font-serif);
        border-bottom: 3px solid var(--accent);
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
    }
    #history > .container > :first-child > p {
        line-height: 1.625rem;
        opacity: 0.8;
    }
    #history > .container > :first-child > p:not(:last-child) {
        margin-bottom: 1rem;
    }
</style>
