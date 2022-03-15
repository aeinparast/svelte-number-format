<script lang="ts">
  import { imask, MaskedInput } from 'svelte-imask'

  export let placeholder = ''
  export let displayType = 'input'
  export let value: string | number = null
  export let type = 'text'
  export let prefix = ''
  export let mask: string | null = null
  const formattedValue = `${prefix} ${value}`

  const options = {
    mask,
  }

  $: if (prefix && mask) mask = `${prefix} ${mask}`
</script>

{#if displayType === 'input'}
  <MaskedInput bind:value {options} {type} {placeholder} />
{/if}

{#if displayType === 'text'}
  <span use:imask={{ mask }}>{formattedValue}</span>
{/if}
