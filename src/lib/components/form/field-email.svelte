<script>
    let {
        label = 'Email',
        max = 80,
        name = 'fld-email',
        placeholder = '',
        required
    } = $props();
</script>

<div class="field" class:required={required}>
    <label for={name}>{label}</label>
    <input type="email" {name} id={name} maxlength={max} {placeholder} />
</div>

<style></style>
