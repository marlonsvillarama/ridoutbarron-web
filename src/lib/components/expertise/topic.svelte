<script>
    import { getPostsInCategory } from "#lib/posts.js";
    
    let {
        content,
        id = 'id',
        label = 'Label',
        team,
        show = false,
    } = $props();
</script>

<div class="topic" class:flex={show === true} class:hidden={show === false} id="topic-{id}">
    <div class="row">
        <aside>
            <h2>{label}</h2>
            <span class="subheader">Overview</span>
        </aside>
        <div class="content">
            {@render content?.()}
        </div>
    </div>
    <div class="row">
        <aside>
            <h2>Meet The Team</h2>
            <span class="subheader">Who you will work with</span>
        </aside>
        <div class="team">
            {@render team?.()}
        </div>
    </div>
</div>

<style>
    .topic {
        /* background-color: var(--accent-bg-lightest); */
        /* padding: 0.5rem 1.5rem; */
        /* width: 100%; */
        /* height: 15rem; */
        display: flex;
        flex-direction: column;
        /* align-items: flex-start; */
        gap: 2rem;
        /* justify-content: space-between; */
    }
    :global(.topic > .row) {
        display: flex;
        align-items: flex-start;
        gap: 3rem;
    }
    :global(.topic > .row:not(:last-child)) {
        border-bottom: 1px solid var(--accent-bg-lightest);
        padding-bottom: 2rem;
    }
    :global(.topic > .row > aside) {
        width: min(28rem, 100%);
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    :global(.topic > .row > aside ) {
        border-left: 3px solid var(--semi-light);
        padding: 0 1.5rem 0.5rem;
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    :global(.topic > .row > aside > h2) {
        color: var(--darkest);
        font: 500 2rem var(--font-serif);
    }
    :global(.topic > .row > aside > .subheader) {
        color: var(--dark);
        font-size: 0.875rem;
        font-weight: 400;
        opacity: 0.8;
    }
    /* .topic > aside > .header > ul {
        list-style-type: none;
    } */
    /* .topic > aside > .header > ul > li {
        color: var(--dark);
        font-size: 0.875rem;
        font-weight: 300;
    } */
    /* .topic > aside > .header > ul > li:not(:last-child) {
        margin-bottom: 0.5rem;
    } */
    /* .topic > aside > :last-child {
        height: auto;
        width: 100%;
    } */
    :global(.topic > aside > .image) {
        width: 100%;
        height: 100%;
    }
    .topic > .row > .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    :global(.topic > .row > .content > p.summary) {
        color: var(--darkest);
        font: 400 1.75rem var(--font-serif);
        letter-spacing: -0.25px;
        line-height: 2.5rem;
    }
    :global(.topic > .row > .content > p:not(.summary)) {
        opacity: 0.7;
        font-weight: 400;
        line-height: 1.75rem;
    }
    :global(.topic > .row > .content > ul) {
        list-style-type: none;
    }
    :global(.topic > .row > .content > ul > li) {
        margin-inline-start: 1.5rem;
        margin-block-end: 0.5rem;
        opacity: 0.8;
        line-height: 1.75rem;
    }
    .hidden {
        display: none;
    }
    .flex {
        display: flex;
    }
</style>
