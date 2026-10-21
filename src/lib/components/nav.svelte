<script>
    import { page } from "$app/state";
    import { afterNavigate } from "$app/navigation";

    let mobileMenu = $state();
    const closeMobileMenu = () => {
        mobileMenu.hide();
    }

    afterNavigate(() => {
        if (mobileMenu && mobileMenu.matches(':popover-open')) {
            mobileMenu.hidePopover();
        }
    })
</script>

<nav>
    <button type="button" class="menu" title="Menu" popovertarget="mobile-menu">
        <i class="menu ph ph-list"></i>
    </button>
    <div class="mobile-menu" id="mobile-menu" popover bind:this={mobileMenu}>
        <button class="btn-mobile-menu-close" type="button" popovertarget="mobile-menu" popovertargetaction="hide">
            <i class="ph ph-x"></i> Close
        </button>
        <a href="/" title="Home"
            class:active={page.url.pathname === '/'}
            >Home</a>
        <a href="/expertise" title="Expertise"
            class:active={page.url.pathname.startsWith('/expertise')}
            >Expertise</a>
        <a href="/team" title="The Team"
            class:active={page.url.pathname.startsWith('/team')}
            >The Team</a>
        <a href="/guide" title="Guide"
            class:active={page.url.pathname.startsWith('/guide')}
            >Guide</a>
        <a href="/contact" title="Contact Us"
            class:active={page.url.pathname.startsWith('/contact')}
            >Contact Us</a>
    </div>
    <ul>
        <li><a href="/" title="Home" class:active={page.url.pathname === '/'}>Home</a></li>
        <li><a href="/expertise" title="Expertise" class:active={page.url.pathname.startsWith('/expertise')}>Expertise</a></li>
        <li><a href="/team" title="The Team" class:active={page.url.pathname.startsWith('/team')}>The Team</a></li>
        <li><a href="/guide" title="Guide" class:active={page.url.pathname.startsWith('/guide')}>Guide</a></li>
        <li><a href="/contact" title="Contact Us" class:active={page.url.pathname.startsWith('/contact')}>Contact Us</a></li>
    </ul>
    <div class="phone">
        <i class="ph ph-phone"></i>
        <span>403-278-3730</span>
    </div>
</nav>

<style>
    nav {
        display: none;
    }
    nav {
        display: flex;
        align-items: first baseline;
        gap: 1rem;
    }
    nav > ul {
        list-style-type: none;
        display: none;
        gap: 1rem;
    }
    nav > .menu {
        background: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;
        display: inline-block;
        color: var(--white);
        font-size: 1.5rem;
    }

    @media (min-width: 60rem) {
        nav > ul {
            display: flex;
        }
        nav > .menu {
            display: none;
        }
    }
    nav > ul > li > a {
        border-radius: 3rem;
        color: var(--white);
        font-size: 0.875rem;
        padding: 0.5rem 1rem;
        text-decoration: none;
        transition: background-color 150ms ease;
    }
    nav > ul > li > :global(a.active) {
        background-color: var(--accent);
    }
    nav > ul > li > a:not(.active):hover {
        background-color: var(--darker);
    }
    .phone {
        display: none;
    }
    @media (min-width: 60rem) {
        .phone {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            color: var(--white);
            margin-left: 1rem;
        }
        .phone > .ph-phone {
            font-size: 1rem;
        }
        .phone > span {
            font: 500 0.875rem var(--font-default);
            color: var(--white);
        }
    }
    nav > .mobile-menu {
        border: 0;
        background-color: var(--darker);
        transform: translateX(100%);
        transition: transform 400ms, overlay 400ms ease-out;
        display: block;
        width: 90vw;
        max-width: 20rem;
        inset: unset;
        right: 0;
        top: 0;
        height: 100dvh;
        display: flex;
        flex-direction: column;
    }
    nav > .mobile-menu:popover-open {
        transform: translateX(0);
    }
    nav > .mobile-menu::backdrop {
        background-color: var(--dark-bg-semi-light);
    }
    nav > .mobile-menu > .btn-mobile-menu-close {
        border: 0;
        border-bottom: 1px solid var(--accent);
        background-color: transparent;
        outline: 0;
        color: var(--off-white);
        text-align: right;
        padding: 1rem 1.5rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 0.5rem;
    }
    nav > .mobile-menu > a {
        background-color: transparent;
        color: var(--off-white);
        padding: 1rem 1.5rem;
        text-decoration: none;
    }
    nav > .mobile-menu > a:not(:last-child) {
        border-bottom: 1px solid var(--accent-bg-lightest);
    }
</style>