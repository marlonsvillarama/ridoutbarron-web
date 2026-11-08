<script>
    let {
        id = 'fld-phone',
        label = 'Phone',
        required = false,
        value = $bindable(),
        onblur,
        onchange
    } = $props();

    let isOpen = $state(false);
    let selectedCountry = $derived(
        items.find(item => item.value === value)?.label || placeholder
    );
</script>

<div class="phone-container">
</div>