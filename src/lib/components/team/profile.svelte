<script>
    import { reveal } from "#lib/reveal.js";

    let {
        id = '',
        image = "",
        name = '',
        fullname = '',
        role = '',
        children,
        onOpen = () => {},
        open = false
    } = $props();

    // let isOpen = $state(open);

    const toggleBio = () => {
        open = !open;
        onOpen(open);
    };
</script>

<div class="profile reveal-section staggered" use:reveal {id} style="background-image: url({image});">
    <div class="details" class:read={open === true}>
        <div class="name">{fullname}</div>
        <div class="role">{role}</div>
        <button type="button" class="profile-btn" data-id={id} onclick={toggleBio} class:hidden={open === true}>{name}'s profile</button>
        <div class="bio" class:visible={open === true}>
            {@render children?.()}
        </div>
        <button type="button" class="profile-btn" data-id={id} onclick={toggleBio} class:hidden={open === false}>Close</button>
    </div>
</div>

<style>
    .profile {
        flex: 1;
        border: 0;
        aspect-ratio: 1 / 1.5;
        background-size: cover;
        background-position: center;
        position: relative;
        overflow: hidden;
    }
    .profile > .details {
        position: absolute;
        top: calc(100% - 10rem);
        left: 0;
        right: 0;
        height: 200%;
        background: linear-gradient(to bottom, transparent 0%, var(--dark-bg-semi-opaque) 10%, var(--dark-bg-semi-opaque) 100%);
        padding: 2rem 1.5rem;
        display: flex;
        flex-direction: column;
        z-index: 100;
        transition: top 500ms cubic-bezier(0.34, 1.4, 0.64, 1);
    }
    :global(.profile > .details.read) {
        top: 0%;
    }
    .profile > .details > .name {
        display: block;
        font: 600 clamp(1.125rem, 2vw, 1.25rem) var(--font-default);
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--white);
        margin-bottom: 0.125rem;
    }
    .profile > .details > .role {
        display: block;
        font-size: 0.875rem;
        text-align: center;
        opacity: 0.6;
        color: var(--white);
        margin-bottom: 0.75rem;
    }
    :global(.profile > .details > .bio) {
        opacity: 0;
    }
    :global(.profile > .details > .bio.visible) {
        opacity: 0.8;
    }
    :global(.profile > .details > .bio > p) {
        color: var(--off-white);
        font-size: clamp(0.875rem, 1vw, 1rem);
        line-height: 1.25rem;
        padding: 0.5rem 0;
        text-decoration: none;
        transition: opacity 500ms ease;
    }
    :global(.profile > .details > .bio > p:last-child) {
        margin-bottom: 1rem;
    }
    .profile > .details > .profile-btn {
        /* position: absolute; */
        top: 0%;
        right: 0%;
        background-color: var(--accent);
        font-size: clamp(0.875rem, 1vw, 1rem);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        padding: 0.625rem 1.5rem;
        border: 0;
        border-radius: 3rem;
        cursor: pointer;
        transition: background-color 150ms ease;
        width: 10rem;
        margin: 0.25rem auto 0.375rem;
    }
    .profile > .details > .profile-btn.hidden {
        display: none;
    }
    /* .profile > .details > .profile-btn:hover {
        background-color: var(--accent);
    } */
    /* .profile > .profile-btn > i {
        font-size: 1.25rem;
        margin-right: 0.375rem;
        color: var(--white);
    } */
</style>
