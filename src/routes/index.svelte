<script lang='ts'>
    import NumberFormat from "$lib/NumberFormat.svelte";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<NumberFormat value={10000} prefix="$" displayType='input' />
