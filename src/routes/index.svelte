<script lang="ts">
  import NumberFormat from '$lib/NumberFormat.svelte'

  let myValue = ''

  $: console.log(myValue)
</script>

<h1>Welcome to `svelte-number-format`</h1>
<NumberFormat
  mask="+{7}(000)000-00-00"
  bind:value={myValue}
  displayType="input"
/>
