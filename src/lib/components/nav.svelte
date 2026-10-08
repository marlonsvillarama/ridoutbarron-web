<nav>
    <ul>
        <li><a href="/" title="Home">Home</a></li>
        <li><a href="/" title="Expertise">Expertise</a></li>
        <li><a href="/" title="The Team">The Team</a></li>
        <li><a href="/" title="Guide">Guide</a></li>
        <li><a href="/" title="Contact Us">Contact Us</a></li>
    </ul>
    <button type="button" class="menu">
        <i class="menu ph ph-list"></i>
    </button>
    <div class="phone">
        <i class="ph ph-phone"></i>
        <span>403-278-3730</span>
    </div>
</nav>

<style>
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
        font-size: 0.875rem;
        font-weight: 500;
        color: var(white);
    }
</style>