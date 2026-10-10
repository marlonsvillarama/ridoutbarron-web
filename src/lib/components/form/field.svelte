<script>
    let {
        items = [],
        label = 'Text',
        max = 80,
        name = 'fld-text',
        placeholder = '',
        required = false,
        type = 'text'
    } = $props();
</script>

<div class="field" class:required={required}>
    <label for={name}>{label}</label>

    {#if type === 'select'}
        <select {name} id={name}>
            {#each items as item}
                <option value={item.value}>{item.label}</option>
            {/each}
        </select>
    {:else if type === 'textarea'}
        <textarea {name} id={name}></textarea>
    {:else}
        <input {type} {name} id={name} maxlength={max} {placeholder} />
    {/if}
</div>

<style>
    .field {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
    .field > label {
        opacity: 0.7;
    }
    .field.required > label {
        font-weight: 500;
        opacity: 1.0;
    }
    .field > input[type=email],
    .field > input[type=phone],
    .field > input[type=text],
    .field > select,
    .field > textarea {
        background-color: var(--off-white);
        border: 1px solid var(--accent-lightest);
        border-radius: 0.25rem;
        font-size: 1rem;
        outline: none;
        padding: 0.75rem 1rem;
    }
    .field > input[type=email]:focus,
    .field > input[type=phone]:focus,
    .field > input[type=text]:focus,
    .field > select:focus,
    .field > textarea:focus {
        outline: 2px solid var(--accent);
        outline-offset: 1px;
    }
    .field > input[type=phone] { width: 10rem }
    .field > textarea {
        font-family: var(--font-default);
        height: 8rem;
        resize: none;
        overflow: auto;
    }
</style>
