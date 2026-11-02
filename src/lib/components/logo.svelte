<script>
    let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<div class={[ 'logo', scrollY > 50 ? 'light' : '' ]}>
    <span>ridout barron</span>
</div>

<style>
    .logo {
        /* color: var(--darkest); */
        color: var(--white);
        font: 400 clamp(1.25rem, 3vw, 2rem) var(--font-default);
        letter-spacing: -0.5px;
        position: relative;
    }
    .logo.light {
        color: var(--white);
    }
    @media (min-width: 60rem) {
        .logo {
            color: var(--white);
        }
        /* .logo.light {
            color: var(--white);
        } */
    }
    .logo::before {
        content: "";
        position: absolute;
        width: clamp(0.625rem, 3vw, 0.875rem);
        height: 3px;
        background-color: var(--accent);
        top: 0;
        left: clamp(1px, 3vw, 0.375rem);
    }
</style>
