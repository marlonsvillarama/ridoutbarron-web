<script>
    let {
        label = 'Text',
        max = 80,
        name = 'fld-text',
        placeholder = '',
        required
    } = $props();
</script>

<div class="field" class:required={required}>
    <label for="first-name">{label}</label>
    <input type="text" {name} id={name} maxlength={max} {placeholder} />
</div>

<style></style>
