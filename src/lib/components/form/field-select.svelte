<script>
// @ts-nocheck

    let {
        id = 'fld-select',
        items = [],
        label = 'Text',
        placeholder = 'Select an option',
        required = false,
        value = $bindable(),
        onblur,
        onchange
    } = $props();

    let isOpen = $state(false);
    let selectedLabel = $derived(
        items.find(item => item.value === value)?.label || placeholder
    );

    const selectOption = (val) => {
        value = val;
        isOpen = false;
    };

    const clickOutside = (node) => {
        const handleClick = (e) => {
            if (!node.contains(e.target)) isOpen = false;
        };

        document.addEventListener('click', handleClick);
        return {
            destroy() {
                document.removeEventListener('click', handleClick);
            }
        };
    };
</script>

<div class="select-container" use:clickOutside>
    <select name={id} {id} bind:value tabindex="-1" {onchange}>
        {#each items as item}
            <option value={item.value}>{item.label}</option>
        {/each}
    </select>

    <button type="button" id="select-{id}" name="select-{id}"
        class="select-trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onclick={() => isOpen = !isOpen}
        {onblur}
    >
        <span class:placeholder={!value}>{selectedLabel}</span>
        <span class="arrow"><i class={[ 'ph', isOpen ? 'ph-caret-up' : 'ph-caret-down' ]}></i></span>
    </button>
    
    {#if isOpen}
        <ul class="select-options" role="listbox">
            {#each items as item}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <li role="option"
                    aria-selected={value === item.value}
                    class={[
                        'option-item',
                        value === item.value ? 'selected' : ''
                    ]}
                    onclick={() => selectOption(item.value)}
                >{item.label}</li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .select-container {
        position: relative;
        width: 100%;
    }
    .select-container > select {
        position: absolute;
        opacity: 0;
        pointer-events: none;
        /* width: 100%; */
    }
    .select-container > button.select-trigger {
        background-color: var(--off-white);
        border: 1px solid var(--accent-lightest);
        border-radius: 0.25rem;
        font-size: 1rem;
        outline: none;
        padding: 0.75rem 1rem;
        cursor: pointer;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .select-container > button.select-trigger > .placeholder {
        color: var(--semi-dark);
    }
    .select-container > button.select-trigger:focus {
        outline: 2px solid var(--accent);
        outline-offset: 1px;
    }
    .select-container > .select-options {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--white);
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        margin-top: 0.25rem;
        padding: 0;
        list-style: none;
        max-height: 12rem;
        overflow-y: auto;
        z-index: 100;
        box-shadow: var(--shadow);
    }
    .select-options > .option-item {
        padding: 0.5rem;
        cursor: pointer;
        transition: background-color 150ms ease;
    }
    .select-options > .option-item:not(.selected):hover {
        background-color: var(--light);
    }
    .select-options > .option-item.selected {
        background-color: var(--accent-dark);
        color: var(--white);
        font-weight: 600;
    }
</style>