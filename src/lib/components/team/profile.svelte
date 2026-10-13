<script>
    let {
        id = '',
        image = "",
        name = '',
        fullname = '',
        role = '',
        children
    } = $props();

    let isOpen = $state(false);
</script>

<div class="profile" {id} style="background-image: url({image});">
    <div class="details" class:read={isOpen === true}>
        <div class="name">{fullname}</div>
        <div class="role">{role}</div>
        <div class="bio" class:visible={isOpen === true}>
            {@render children?.()}
        </div>
    </div>
    <button type="button" class="profile-btn" data-id={id} onclick={() => isOpen = !isOpen}><i class="ph ph-info"></i> {name}'s bio</button>
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
        top: 80%;
        left: 0;
        right: 0;
        min-height: 100%;
        background: linear-gradient(to bottom, transparent 0%, var(--dark-bg-semi-opaque) 10%, var(--dark-bg-semi-opaque) 100%);
        padding: 2rem 1.5rem;
        display: flex;
        flex-direction: column;
        z-index: 100;
        transition: top 500ms cubic-bezier(0.34, 1.4, 0.64, 1);
    }
    :global(.profile > .details.read) {
        top: 10%;
    }
    .profile > .details > .name {
        display: block;
        font: 600 clamp(0.875rem, 2vw, 1.25rem) var(--font-default);
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
        margin-bottom: 1.5rem;
    }
    :global(.profile > .details > .bio) {
        opacity: 0;
    }
    :global(.profile > .details > .bio.visible) {
        opacity: 0.8;
    }
    :global(.profile > .details > .bio.visible > p) {
        color: var(--off-white);
        font-size: clamp(0.875rem, 2vw, 1rem);
        line-height: 1.25rem;
        padding: 0.75rem 1.5rem;
        text-decoration: none;
        transition: opacity 500ms ease;
    }
    .profile > .profile-btn {
        position: absolute;
        top: 0%;
        right: 0%;
        background-color: var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        padding: 0.75rem 1.5rem;
        border: 0;
        border-bottom-left-radius: 1rem;
        cursor: pointer;
        transition: background-color 150ms ease;
    }
    .profile > .profile-btn:hover {
        background-color: var(--accent);
    }
    .profile > .profile-btn > i {
        font-size: 1.25rem;
        margin-right: 0.375rem;
        color: var(--white);
    }
</style>
