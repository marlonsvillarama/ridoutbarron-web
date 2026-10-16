<script>
    let {
        onsearch
    } = $props();
</script>

<div class="search">
    <div class="search-box">
        <i class="ph ph-magnifying-glass"></i>
        <input type="text" id="search-text" placeholder="Search here...">
    </div>
    <!-- <button type="button" onclick={onsearch}>Search</button> -->
</div>

<style>
    .search {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
    .search-box {
        border-radius: 0.25rem;
        width: 100%;
    }
    .search-box > i {
        color: var(--accent);
        font-size: 1.25rem;
        position: absolute;
        top: 50%;
        left: 0.5rem;
        transform: translateY(-50%);
    }
    .search-box > input[type=text] {
        padding: 0.5rem 0.5rem 0.5rem 2rem;
        border: 1px solid var(--accent-lightest);
        border-radius: 0.25rem;
        font-size: 1rem;
        width: 100%;
    }
    @media (min-width: 60rem) {
        .search-box > input[type=text] {
            width: 20rem;
        }
    }
    .search-box > input[type=text]:focus {
        outline: 2px solid var(--accent);
        outline-offset: 1px;
    }
    .search > button {
        background-color: var(--accent);
        border: 0;
        border-radius: 3rem;
        color: var(--white);
        cursor: pointer;
        opacity: 0.8;
        padding: 0.625rem 1.5rem;
        transition: opacity 150ms ease, box-shadow 150ms ease;
    }
</style>
