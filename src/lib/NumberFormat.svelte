<script lang="ts">
  export let placeholder = ''
  export let displayType = 'input'
  export let value: string | number = null
  export let type = 'text'
  export let prefix = ''

  let formattedValue = `${prefix} ${value}`

  function getCurrentCaretPosition(el: HTMLInputElement) {
    /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
    return Math.max(el.selectionStart, el.selectionEnd)
  }
</script>

{#if displayType === 'input'}
  <input
    {type}
    {placeholder}
    value={formattedValue}
    on:keydown={(e) => {
      console.log(getCurrentCaretPosition(e.target))
    }}
  />
{/if}

{#if displayType === 'text'}
  <span>{value}</span>
{/if}
