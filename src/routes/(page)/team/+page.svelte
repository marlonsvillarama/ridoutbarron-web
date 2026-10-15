<script>
    import Hero from "#lib/components/page/hero.svelte";
    import Profile from "#lib/components/team/profile.svelte";
</script>

<svelte:head>
	<title>Ridout Barron - Barristers & Solicitors | Meet The Team</title>
</svelte:head>

<Hero
    background="/images/page/team_wacky.webp"
    texts={[
        'At Ridout Barron, our barristers and solicitors are easy to work with and will try to find creative solutions to our clients\' problems.',
        'Throughout our history, we have maintained our principles of integrity, quality, and flexibility. Our clients\' success has always been our first priority.'
    ]}
    title="Meet The Team"
/>

<main class="container">
    <section>
        <div class="group">
            <h2>Our Lawyers</h2>
            <div class="row">
                <Profile id="peter" name="Peter" fullname="Peter W. K. Ridout"
                    image="/images/team/mid/peter_mid.webp"
                    role="Barrister & Solicitor, Partner">
                    <p>Peter's practice focuses on civil litigation with a particular focus on real estate litigation, construction law, and commercial litigation including shareholder's disputes and fraud.</p>
                    <p>Peter was called to the Bar in Ontario in 1993 and Alberta in 1997. He has appeared at all levels of court in Ontario, the Alberta Court of Queen's Bench, the Alberta Court of Appeal, the Federal Court of Canada, Trial Division, and the Federal Court of Appeal.</p>
                    <p>Outside of law, Peter enjoys spending time with his family, biking, skiing, hiking, and politics.</p>
                </Profile>
                <Profile id="jacqui" name="Jacqui" fullname="Jacqueline A. Barron"
                    image="/images/team/mid/jacqui_mid.webp"
                    role="Barrister & Solicitor, Partner">
                    <p>Jacqueline is a proud third-generation Calgarian and comes from a long line of legal greats. She began her career in Wills and Estate Law in 1991 when she worked at the Official Guardian's Office in Toronto. In 1996, she and Peter W.K. Ridout joined the firm of Barron and Barron in Calgary.</p>
                    <p>She and her husband live with their standard poodle, Miss Eleanor Roosevelt Ridout ("Ellie"). Together, they enjoy travel, films, political debate, dog walking, the culinary and fermented arts, and occasionally, working together.</p>
                    <p>Outside of law, Peter enjoys spending time with his family, biking, skiing, hiking, and politics.</p>
                </Profile>
                <Profile id="lilian" name="Lilian" fullname="Lilian J. Howard"
                    image="/images/team/mid/lilian_mid.webp"
                    role="Barrister & Solicitor, Associate">
                    <p>Lilian joined Ridout Barron in 2025 after completing her Juris Doctor at the University of Alberta Faculty of Law. Before law school, she earned her Bachelor of Arts from the University of British Columbia.</p>
                    <p>While at the University of Alberta, Lilian spent three years volunteering with Student Legal Services of Edmonton. She worked with clients on civil, human rights, and family matters, gaining hands-on experience helping people navigate legal problems well before entering practice.</p>
                    <p>Lilian brings a thoughtful and practical approach to her work and enjoys making complicated legal issues easier for clients to understand.</p>
                </Profile>
            </div>
        </div>
        <div class="group">
            <h2>Our Staff</h2>
            <div class="row">
                <Profile id="robin" name="Robin" fullname="Robin Ewing"
                    image="/images/team/mid/robin_mid.webp"
                    role="Senior Real Estate Paralegal">
                    <p>Insert profile here...</p>
                </Profile>
                <Profile id="rana" name="Rana" fullname="Rana El Hajj Ahmad"
                    image="/images/team/mid/rana_mid.webp"
                    role="Paralegal">
                    <p>Insert profile here...</p>
                </Profile>
                <Profile id="mayey" name="Marielle" fullname="Marielle Villarama"
                    image="/images/team/mid/marielle_mid.webp"
                    role="Office Manager">
                    <p>Insert profile here...</p>
                </Profile>
            </div>
        </div>
    </section>
</main>

<style>
    main {
        align-items: flex-start;
        display: flex;
        gap: 3rem;
        margin: 3rem auto 5rem;
    }
    section {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    section > .group > h2 {
        font: 700 2rem var(--font-serif);
        margin-bottom: 0.5rem;
    }
    section > .group > .row {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
    @media (min-width: 60rem) {
        section > .group > .row {
            flex-direction: row;
            gap: 3rem;
            align-items: flex-start;
            justify-content: space-between;
        }
    }
</style>
