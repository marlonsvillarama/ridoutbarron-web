<div class="logo">
    <span>ridout barron</span>
</div>

<style>
    .logo {
        color: var(--white);
        font: 300 clamp(1.5rem, 3vw, 2rem) var(--font-default);
        letter-spacing: 0.5px;
        position: relative;
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
